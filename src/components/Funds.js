import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Funds.css';

const Funds = () => {
  const [data, setData] = useState([]);
  const [year, setYear] = useState('2024');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      setError(null);

      try {
        const fileName = year === '2024' ? '/data/MutualFunds.json' : '/data/MutualFunds1.json';
        console.log(`Fetching data from: ${fileName}`);

        const response = await axios.get(fileName);
        const data = response.data;

        console.log('Fetched data:', data);

        setData(data);
      } catch (error) {
        console.error('Error fetching the JSON data:', error);
        setError('Failed to fetch data.');
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [year]);

  // Helper function to calculate Total Return
  const calculateTotalReturn = (fundAnnualReturn, MER) => {
    // Parse the percentage strings into numbers
    const returnNumber = parseFloat(fundAnnualReturn);
    const merNumber = parseFloat(MER);

    // Add the numbers together
    const totalReturn = returnNumber + merNumber;

    // Return the formatted percentage string
    return totalReturn.toFixed(2); // Ensures two decimal places
  };

  return (
    <div className="funds">
      <h1>Funds Data</h1>
      <div>
        <button onClick={() => setYear('2023')}>2023</button>
        <button onClick={() => setYear('2024')}>2024</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data.length > 0 && !loading ? (
        <div className='funds-table'>
          <h2>Mutual Funds for {year}</h2>
          <table>
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Fund Annual Return (%)</th>
                <th>Management Expense Ratio (MER) (%)</th>
                <th>Total Return (%)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.company_name}>
                  <td>{item.company_name}</td>
                  <td>{item.fundAnnualReturn}%</td>
                  <td>{item.MER}%</td>
                  <td>{calculateTotalReturn(item.fundAnnualReturn, item.MER)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : !loading && !data.length ? (
        <p>No data available for the selected year.</p>
      ) : null}
    </div>
  );
};

export default Funds;
