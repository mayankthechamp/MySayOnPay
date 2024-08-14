// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Search.css'; // Assuming the CSS file is here

// const Search = ({ type1 }) => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const [compensationData, setCompensationData] = useState([]);
//   const [compensationQuery, setCompensationQuery] = useState('');

//   useEffect(() => {
//     const fetchResults = async () => {
//       if (query.length < 3) {
//         setResults([]);
//         return;
//       }

//       try {
//         const response = await axios.get('/data/Compensation.json');
//         const data = response.data;

//         const filteredResults = data.filter(item =>
//           item.companyName.toLowerCase().includes(query.toLowerCase())
//         );

//         setResults(filteredResults);
//       } catch (error) {
//         console.error('There was an error fetching the data!', error);
//         setResults([]); // Clear results on error
//       }
//     };

//     fetchResults();
//   }, [query]);

//   useEffect(() => {
//     const fetchCompensationData = async () => {
//       try {
//         const response = await axios.get('/data/Compensation1.json');
//         setCompensationData(response.data);
//       } catch (error) {
//         console.error('There was an error fetching the data!', error);
//       }
//     };

//     fetchCompensationData();
//   }, []);

//   const filteredCompensationData = compensationData.filter(item =>
//     item.nameAndPosition.toLowerCase().includes(compensationQuery.toLowerCase())
//   );

//   return (
//     <div className="search-container">
//       <div className="search-section">
//         <h2>Find a {type1}</h2>
//         <div className="search-input-container">
//           <input
//             type="text"
//             placeholder={`Search for a ${type1}`}
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//           />
//           <span className="search-icon">&#x1F50D;</span> {/* Unicode for search icon */}
//         </div>
//         <div className="search-results">
//           {results.map((result, index) => (
//             <div key={index} className="search-result">
//               <p><strong>Company Name:</strong> {result.companyName}</p>
//               <p><strong>Total Maximum Compensation Approved:</strong> {result.totalMaximumCompensationApproved}</p>
//               <p><strong>Maximum Compensation as a Percentage of Net Income:</strong> {result.maximumCompensationAsPercentageOfNetIncome}</p>
//               <p><strong>Approval Status:</strong> {result.approvalStatus}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="search-section">
//         <h2>Company Previous Data</h2>
//         <div className="search-input-container">
//           <input
//             type="text"
//             placeholder="Search for Name and Principal Position"
//             value={compensationQuery}
//             onChange={(e) => setCompensationQuery(e.target.value)}
//           />
//           <span className="search-icon">&#x1F50D;</span> {/* Unicode for search icon */}
//         </div>
//         <div className="compensation-table">
//           <table>
//             <thead>
//               <tr>
//                 <th>Name and Principal Position</th>
//                 <th>Year</th>
//                 <th>Salary</th>
//                 <th>Stock Awards</th>
//                 <th>Non-equity Incentive Plan Compensation</th>
//                 <th>All Other Compensation</th>
//                 <th>Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredCompensationData.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.nameAndPosition}</td>
//                   <td>{item.year}</td>
//                   <td>{item.salary}</td>
//                   <td>{item.stockAwards}</td>
//                   <td>{item.nonEquityIncentivePlanCompensation}</td>
//                   <td>{item.allOtherCompensation}</td>
//                   <td>{item.total}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Search;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Search.css';

// const Search = ({ type1 }) => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     const fetchResults = async () => {
//       if (query.length < 3) {
//         setResults([]);
//         return;
//       }

//       try {
//         const response = await axios.get('/data/Compensation2.json');
//         const data = response.data;

//         const filteredResults = data.filter(item =>
//           item.ticker.toLowerCase().includes(query.toLowerCase())
//         );

//         setResults(filteredResults);
//       } catch (error) {
//         console.error('There was an error fetching the data!', error);
//         setResults([]); // Clear results on error
//       }
//     };

//     fetchResults();
//   }, [query]);

//   return (
//     <div className="search-container1">
//       <h2>Search Company</h2>
//       <div className="search-input-container1">
//         <input
//           type="text1"
//           placeholder={`Search for a ${type1}`}
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <span className="search-icon1">&#x1F50D;</span> {/* Unicode for search icon */}
//       </div>
//       <div className="search-results1">
//         {results.map((result, index) => (
//           <div key={index} className="search-result1">
//             <p><strong>ID:</strong> {result.id}</p>
//             <p><strong>CIK:</strong> {result.cik}</p>
//             <p><strong>Ticker:</strong> {result.ticker}</p>
//             <p><strong>Name:</strong> {result.name}</p>
//             <p><strong>Position:</strong> {result.position}</p>
//             <p><strong>Year:</strong> {result.year}</p>
//             <p><strong>Salary:</strong> {result.salary}</p>
//             <p><strong>Bonus:</strong> {result.bonus}</p>
//             <p><strong>Stock Awards:</strong> {result.stockAwards}</p>
//             <p><strong>Option Awards:</strong> {result.optionAwards}</p>
//             <p><strong>Non-Equity Incentive Compensation:</strong> {result.nonEquityIncentiveCompensation}</p>
//             <p><strong>Change in Pension Value and Deferred Earnings:</strong> {result.changeInPensionValueAndDeferredEarnings}</p>
//             <p><strong>Other Compensation:</strong> {result.otherCompensation}</p>
//             <p><strong>Total:</strong> {result.total}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Search;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Search.css';

const Search = ({ type1 }) => {
  const [query, setQuery] = useState('');
  const [groupedResults, setGroupedResults] = useState({});
  const [experts, setExperts] = useState([{ title: '', salary: '', subject: '' }]);

  useEffect(() => {
    const fetchResults = async () => {
      if (query.length < 3) {
        setGroupedResults({});
        return;
      }

      try {
        const response = await axios.get('/data/Compensation2.json');
        const data = response.data;

        const filteredResults = data.filter(item =>
          item.ticker.toLowerCase().includes(query.toLowerCase())
        );

        const grouped = filteredResults.reduce((acc, item) => {
          if (!acc[item.name]) {
            acc[item.name] = [];
          }
          acc[item.name].push(item);
          return acc;
        }, {});

        setGroupedResults(grouped);
      } catch (error) {
        console.error('There was an error fetching the data!', error);
        setGroupedResults({});
      }
    };

    fetchResults();
  }, [query]);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const newExperts = [...experts];
    newExperts[index][name] = value;
    setExperts(newExperts);
  };

  const addRow = () => {
    setExperts([...experts, { title: '', salary: '', subject: '' }]);
  };

  return (
    <div className="search-container1">
      <h2>Search Company</h2>
      <div className="search-input-container1">
        <input
          type="text"
          placeholder={`Search for a ${type1}`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="search-icon1">&#x1F50D;</span> {/* Unicode for search icon */}
      </div>
      <div className="search-results">
        {Object.keys(groupedResults).length > 0 && (
          <div>
            {Object.keys(groupedResults).map((name, index) => (
              <div key={index} className="grouped-result">
                <h3>{name}</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Position</th>
                      <th>Year</th>
                      <th>Salary</th>
                      <th>Bonus</th>
                      <th>Non-Equity Incentive Compensation</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {groupedResults[name].map((result, idx) => (
                      <tr key={idx}>
                        <td>{result.position}</td>
                        <td>{result.year}</td>
                        <td>{result.salary}</td>
                        <td>{result.bonus}</td>
                        <td>{result.nonEquityIncentiveCompensation}</td>
                        <td>{result.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}
        
        {query.length >= 3 && (
          <>
          <hr/>
          
            <div className='chat-section1'>
              <h2>Chat Section</h2>
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
                        <p># 100/min call + 1500 bonus patenting</p>
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
            </div>

            <hr />

            <div className="subject-matter-experts">
              <h2>Subject Matter Experts</h2>
              <div className="white-container">
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
                          <td>
                            <input
                              type="text"
                              name="title"
                              value={expert.title}
                              onChange={(e) => handleInputChange(index, e)}
                              placeholder="Title/Description"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="salary"
                              value={expert.salary}
                              onChange={(e) => handleInputChange(index, e)}
                              placeholder="Salary Level"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="subject"
                              value={expert.subject}
                              onChange={(e) => handleInputChange(index, e)}
                              placeholder="Subject"
                            />
                          </td>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Search;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Search.css';

// const Search = ({ type1 }) => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     const fetchResults = async () => {
//       if (query.length < 3) {
//         setResults([]);
//         return;
//       }

//       try {
//         const response = await axios.get('/data/Compensation2.json');
//         const data = response.data;

//         const filteredResults = data.filter(item =>
//           item.ticker.toLowerCase().includes(query.toLowerCase())
//         );

//         setResults(filteredResults);
//       } catch (error) {
//         console.error('There was an error fetching the data!', error);
//         setResults([]); // Clear results on error
//       }
//     };

//     fetchResults();
//   }, [query]);

//   return (
//     <div className="search-container1">
//       <h2>Search Company</h2>
//       <div className="search-input-container1">
//         <input
//           type="text"
//           placeholder={`Search for a ${type1}`}
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <span className="search-icon1">&#x1F50D;</span> {/* Unicode for search icon */}
//       </div>
//       <div className="search-results1">
//         {results.length > 0 && (
//           <table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>CIK</th>
//                 <th>Ticker</th>
//                 <th>Name</th>
//                 <th>Position</th>
//                 <th>Year</th>
//                 <th>Salary</th>
//                 <th>Bonus</th>
//                 <th>Stock Awards</th>
//                 <th>Option Awards</th>
//                 <th>Non-Equity Incentive Compensation</th>
//                 <th>Change in Pension Value and Deferred Earnings</th>
//                 <th>Other Compensation</th>
//                 <th>Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               {results.map((result, index) => (
//                 <tr key={index}>
//                   <td>{result.id}</td>
//                   <td>{result.cik}</td>
//                   <td>{result.ticker}</td>
//                   <td>{result.name}</td>
//                   <td>{result.position}</td>
//                   <td>{result.year}</td>
//                   <td>{result.salary}</td>
//                   <td>{result.bonus}</td>
//                   <td>{result.stockAwards}</td>
//                   <td>{result.optionAwards}</td>
//                   <td>{result.nonEquityIncentiveCompensation}</td>
//                   <td>{result.changeInPensionValueAndDeferredEarnings}</td>
//                   <td>{result.otherCompensation}</td>
//                   <td>{result.total}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Search;
