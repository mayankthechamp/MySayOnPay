import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define the API endpoint and token
const API_URL = 'https://api.sec-api.io';
const TOKEN = '12a52247ed6936bd4370b68b388a3b36694cacac397ea679b2356e01bc171cc3';
const QUERY = 'formType:"13F-HR" AND holdings.ticker:TSLA';

const App = () => {
  const [compensationData, setCompensationData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch filings and extract CIK numbers
    const fetchFilings = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            token: TOKEN,
            query: QUERY,
            from: '0',
            size: '50',
            sort: JSON.stringify([{ filedAt: { order: 'desc' } }]),
          },
        });
        const filings = response.data.filings || [];
        const cikNumbers = filings.map((filing) => filing.cik);
        return cikNumbers;
      } catch (error) {
        console.error('Error fetching filings:', error);
        return [];
      }
    };

    // Function to fetch executive compensation data for each CIK
    const fetchCompensationData = async (cik) => {
      try {
        const compensationUrl = `${API_URL}/compensation/${cik}`;
        const response = await axios.get(compensationUrl, { params: { token: TOKEN } });
        return response.data;
      } catch (error) {
        console.error(`Error fetching compensation data for CIK ${cik}:`, error);
        return null;
      }
    };

    // Fetch data and update state
    const fetchData = async () => {
      setLoading(true);
      const cikNumbers = await fetchFilings();
      const compensationPromises = cikNumbers.map(fetchCompensationData);
      const compensationResults = await Promise.all(compensationPromises);
      setCompensationData(compensationResults.filter((data) => data !== null));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Executive Compensation Data</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {compensationData.map((data, index) => (
            <div key={index}>
              <h2>Company Name: {data.companyName}</h2>
              <p>CEO Name: {data.executive?.name}</p>
              <p>Total Compensation: {data.executive?.totalCompensation}</p>
              <p>Position: {data.executive?.position}</p>
              <p>Date of Submission: {data.filedAt}</p>
              <p>
                Link to Filing Details:{' '}
                <a href={data.linkToFilingDetails} target="_blank" rel="noopener noreferrer">
                  View Filing
                </a>
              </p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
