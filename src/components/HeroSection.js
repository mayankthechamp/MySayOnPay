import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import '../components/HeroSection.css';

const API_URL = 'https://api.sec-api.io/?token=6b3bf19df1784cb1a59bf55a7834ca93a3e59ec3cdc6d629837d96b711f99a5e';
const COMPENSATION_API_URL = 'https://api.sec-api.io/compensation/';

const HeroSection = () => {
  const [experts, setExperts] = useState([{ title: '', salary: '', subject: '' }]);
  const [compensationData, setCompensationData] = useState([]);
  const [loading, setLoading] = useState(true);

  const addRow = () => {
    setExperts([...experts, { title: '', salary: '', subject: '' }]);
  };

  const handleInputChange = (index, { target: { name, value } }) => {
    const newExperts = [...experts];
    newExperts[index][name] = value;
    setExperts(newExperts);
  };

  const fetchDef14AFilings = async () => {
    try {
      const requestBody = {
        query: 'formType:"DEF-14A"', // Filter by DEF 14A form type
        from: '0',                   // Starting index for pagination
        size: '200',                  // Number of results to fetch
        sort: [{ filedAt: { order: 'desc' } }] // Sort by filing date descending
      };
  
      const response = await axios.post(API_URL, requestBody, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_URL}`
        }
      });
  
      const data = response.data;
      return data;
    } catch (error) {
      console.error('Error fetching DEF 14A filings:', error);
      return null;
    }
  };
  
  // Example usage
  fetchDef14AFilings().then(data => {
    if (data) {
      // console.log('Total Filings:', data.total);
      console.log('Filings:', data.filings[0].linkToFilingDetails);
      // console.log('linkToFilingDetails', data.linkToFilingDetails);
    }
  });


  const fetchFilings = useCallback(async () => {
      try {
        const requestBody = {
          query: 'formType:"DEF-14A"', // Filter by DEF 14A form type
          from: '0',                   // Starting index for pagination
          size: '200',                  // Number of results to fetch
          sort: [{ filedAt: { order: 'desc' } }] // Sort by filing date descending
        };
    
        const response = await axios.post(API_URL, requestBody, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_URL}`
          }
        });
    
      const filings = response.data.filings || [];

      return filings.map((filing) => ({
        companyName: filing.companyName,
        linkToFilingDetails: filing.linkToFilingDetails,
        description: filing.description,
        filedAt: filing.filedAt,
        cik: filing.cik,
      }));
    } catch (error) {
      console.error('Error fetching filings:', error.response ? error.response.data : error.message);
      return [];
    }
  }, []);

  const fetchCompensation = useCallback(async (cik) => {
    try {
      const response = await axios.get(`${COMPENSATION_API_URL}${cik}?token=6b3bf19df1784cb1a59bf55a7834ca93a3e59ec3cdc6d629837d96b711f99a5e`);

      const compensations = response.data || [];

      return compensations.filter(compensation => compensation.total).map((compensation) => ({
        name: compensation.name,
        position: compensation.position,
        year: compensation.year,
        total: compensation.total,
      }));
    } catch (error) {
      console.error(`Error fetching compensation data for CIK ${cik}:`, error.response ? error.response.data : error.message);
      return [];
    }
  }, []);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const filingsData = await fetchFilings();

    const compensationPromises = filingsData.map((filing) => fetchCompensation(filing.cik));
    const compensationResults = await Promise.all(compensationPromises);

    const combinedData = filingsData.map((filing, index) => ({
      ...filing,
      compensation: compensationResults[index].slice(0, 1),
    }));

    setCompensationData(combinedData);
    setLoading(false);
  }, [fetchFilings, fetchCompensation]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const generateHeadline = (companyName, executiveName, totalCompensation, position, filedAt) => {
    const formattedCompensation = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(totalCompensation);

    const headlineTemplates = [
      `${companyName} announces ${position} ${executiveName}'s total compensation of ${formattedCompensation} for ${new Date(filedAt).getFullYear()}.`,
      `Executive ${executiveName} of ${companyName} receives a total of ${formattedCompensation} in compensation.`,
      `${companyName} discloses ${executiveName}'s ${position} earnings, totaling ${formattedCompensation} in recent filing.`,
      `CEO ${executiveName} of ${companyName} to earn ${formattedCompensation} in total compensation for the year.`,
      `${companyName} reports ${position} ${executiveName}'s annual compensation of ${formattedCompensation}.`,
      `${executiveName}, ${position} of ${companyName}, granted ${formattedCompensation} in total compensation.`
    ];

    const randomIndex = Math.floor(Math.random() * headlineTemplates.length);
    return headlineTemplates[randomIndex];
  };
  return (
    <div className="hero-section">
      <h2>Align my assets with my values</h2>
      <h2>Prioritize values, to achieve high-performance growth.</h2>
      <button className="get-started-btn">Get Started</button>
      <p>Join thousands of investors to vote down egregious CEO pay that is robbing you of your high-performance investment returns.</p>
      <p>See how much of your profits are disappearing - up to 25% annually</p>
      <p>Learn to build your own high-performance portfolio.</p>
      <br />
      <hr />
      <div className="about-us-heading">
        <h2>About Us</h2>
        <p>
          This site is being developed by Michael Cooper, an investor in small cap stocks who got tired of underperforming CEOs enriching themselves without delivering value to all other stakeholders, including employees and investors.
          Through this site, we will build investor tools to enable investors to find ways to profit by understanding which CEOs and other executives are truly aligned with your objectives.
          Double down on inequality, double up on investor returns. Our platform is designed to empower investors with the knowledge and tools they need to make informed decisions.
          Our mission is to create a community of investors who are committed to ethical investing. We will provide resources and insights to help you identify and support companies that prioritize fair compensation and responsible management. By leveraging our tools, you can track executive pay, analyze company performance, and participate in shareholder activism.
          We believe that transparency and accountability in corporate leadership are essential for long-term success.
          Join us in this journey to build a fairer, more sustainable investment landscape. Let's hold executives accountable and reward companies that align with our values. With your support, we can drive positive change and achieve high-performance growth that benefits everyone involved.
          Together, we can push for a more equitable distribution of corporate wealth, ensuring that all stakeholders benefit from the company's success.
        </p>
      </div>
      <br />
      <hr />
      <div className='chat-section1'>
        <h2>Chat Section</h2>
      </div>
      <div className="white-container">
        <div className="chat-section">
          <div className="chat-content">
            <div className="chat-window">
              <h3>Ask a Question</h3>
              <div className="question">
                <p>Is Tesla producing at full capacity?</p>
                <textarea placeholder="Your answer..."></textarea>
              </div>
              <div className="question">
                <p>How serious is Tesla's problem with battery disposal?</p>
                <textarea placeholder="Your answer..."></textarea>
              </div>
              <div className="question">
                <p>Does Musk deserve $50 billion pay?</p>
                <textarea placeholder="Your answer..."></textarea>
              </div>
              <button type="submit" className="submit-chat-btn">Submit</button>
            </div>
            <div className="bidding-section">
              <h3>Bidding</h3>
              <div className="bidding-item">
                <p># 100/min call + 1500 bonus potential</p>
              </div>
              <div className="bidding-item">
                <p># 1.50 / min call + $700 bonus potential</p>
              </div>
              <div className="bidding-item">
                <p># 0.50/min call + $100.00 bonus potential</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="subject-matter-experts">
        <h2>Subject Matter Experts</h2>
        <div className="white-container">
          <h3>Investors Chat with Subject Matter Experts</h3>
          <form>
            <table>
              <thead>
                <tr>
                  <th>Title/Description</th>
                  <th>Salary Level</th>
                  <th>Subject</th>
                </tr>
              </thead>
              <tbody>
                {experts.map((expert, index) => (
                  <tr key={index}>
                    <td><input type="text" name="title" value={expert.title} onChange={(e) => handleInputChange(index, e)} placeholder="Title/Description" /></td>
                    <td><input type="text" name="salary" value={expert.salary} onChange={(e) => handleInputChange(index, e)} placeholder="Salary Level" /></td>
                    <td><input type="text" name="subject" value={expert.subject} onChange={(e) => handleInputChange(index, e)} placeholder="Subject" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="form-buttons">
              <button type="button" className="add-row-btn" onClick={addRow}>Add More</button>
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <br />
      <div className='feed'>
        <h2>News Feed</h2>
      </div>
      <div className="executive-compensation">
        {loading ? (
          <p>Loading...</p>
        ) :  (
          compensationData
            .filter(item => item.compensation.length > 0)
            .map((item, index) => (
              <div key={index}>
                <h3>
                  {generateHeadline(
                    item.companyName,
                    item.compensation[0]?.name,
                    item.compensation[0]?.total,
                    item.compensation[0]?.position,
                    item.filedAt
                  )}
                </h3>
                <p>{item.description}</p>
                <p>Filed At: {new Date(item.filedAt).toLocaleString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                })}</p>
                <p>Submitted Filings: <a href={item.linkToFilingDetails} target="_blank" rel="noopener noreferrer">Link to Filing Details</a></p>
                <div className="compensation-data">
                  {item.compensation.length > 0 && (
                    <>
                      {item.compensation.map((comp, compIndex) => (
                        <div key={compIndex}>
                          <p>Executive Name: {comp.name}</p>
                          <p>Position: {comp.position}</p>
                          <p>Total Compensation: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(comp.total)}</p>
                          <p>Year: {comp.year}</p>
                        </div>
                      ))}
                    </>
                  )}
                </div>
                <hr />
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default HeroSection;