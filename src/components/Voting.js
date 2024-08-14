import React, { useState } from 'react';
import './Voting.css';
import Swal from 'sweetalert2'

const Voting = () => {
    const [votes, setVotes] = useState({
        billion: '',
        hundredMillion: '',
        losingCompany: ''
      });
    
      const handleOptionChange = (e) => {
        const { name, value } = e.target;
        setVotes({
          ...votes,
          [name]: value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
          html: `<div style="font-size: 1.1em; font-weight:600">
                   You voted:<br>
                   No CEO should be paid $1 billion: ${votes.billion}<br>
                   Should CEO be paid $100 million: ${votes.hundredMillion}<br>
                   Should CEO of money losing company be paid $100 million: ${votes.losingCompany}
                 </div>`
        });
        
      };

    return (
        <div className="voting-container">
            <div className="voting-header">Voice Your Opinion</div>
            <p className="voting-paragraph">
                Here is where visitors can voice their opinion, and results will be sent to all CEOs. This platform is designed to empower the public to express their views on executive compensation in a structured and impactful manner. By providing a space for public feedback, we aim to bring greater transparency and accountability to the compensation practices of CEOs at public companies.
                Our mission is rooted in the belief that excessive CEO compensation, especially in publicly traded companies, needs to be scrutinized and aligned with both the company’s performance and the broader economic context. When you disapprove of any public company CEO making over $100 million per year or $1 billion per year, our platform takes several steps to ensure your voice is heard and has a tangible impact. We believe that by harnessing collective opinion, we can drive meaningful change in corporate governance and executive pay structures.
                When you cast a disapproval vote for a CEO whose compensation exceeds these thresholds, we create, send, and track an approved vote to those making under $100 million and a disapproval vote to all CEOs being paid over $100 million. This process involves generating an automated response that is sent directly to the CEOs and board members of the respective companies. The response clearly communicates public discontent with their compensation levels, highlighting the need for more reasonable and performance-based pay structures.
                In addition to sending these votes, we meticulously track them to monitor trends and patterns in public sentiment regarding CEO compensation. This data is invaluable as it allows us to create comprehensive reports and insights that can influence corporate governance and policy-making. Over time, as more people use our platform and our audience grows, our tools will become more powerful, and our influence will expand. This increasing influence will enable us to advocate more effectively for fair and equitable compensation practices across the corporate landscape.
                Moreover, for CEOs earning under $100 million per year who receive approval votes, we send positive feedback, reinforcing fair compensation practices. This encouragement helps support and promote a culture of equitable pay within the corporate world. By acknowledging and rewarding reasonable compensation practices, we aim to set a benchmark for other companies to follow.
                In summary, our platform is not just about expressing disapproval but also about fostering a balanced and fair approach to executive compensation. By combining public opinion with data-driven insights, we strive to create a corporate environment where CEO compensation is fair, transparent, and aligned with the overall success and well-being of the company and its stakeholders. Over time, our tools and audience will grow, and our influence will grow, enabling us to make a significant impact on the corporate world.
            </p>
            <form className="voting-form" onSubmit={handleSubmit}>
            <div className="voting-item">
          <span className="voting-statement">No CEO should be paid $1 billion</span>
          <label>
            <input
              type="radio"
              name="billion"
              value="Approve"
              checked={votes.billion === "Approve"}
              onChange={handleOptionChange}
            />
            <span>Approve</span>
          </label>
          <label>
            <input
              type="radio"
              name="billion"
              value="Disapprove"
              checked={votes.billion === "Disapprove"}
              onChange={handleOptionChange}
            />
            <span>Disapprove</span>
          </label>
        </div>
        <div className="voting-item">
          <span className="voting-statement">Should CEO be paid $100 million</span>
          <label>
            <input
              type="radio"
              name="hundredMillion"
              value="Approve"
              checked={votes.hundredMillion === "Approve"}
              onChange={handleOptionChange}
            />
            <span>Approve</span>
          </label>
          <label>
            <input
              type="radio"
              name="hundredMillion"
              value="Disapprove"
              checked={votes.hundredMillion === "Disapprove"}
              onChange={handleOptionChange}
            />
            <span>Disapprove</span>
          </label>
        </div>
        <div className="voting-item">
          <span className="voting-statement">Should CEO of money losing company be paid $100 million</span>
          <label>
            <input
              type="radio"
              name="losingCompany"
              value="Approve"
              checked={votes.losingCompany === "Approve"}
              onChange={handleOptionChange}
            />
            <span>Approve</span>
          </label>
          <label>
            <input
              type="radio"
              name="losingCompany"
              value="Disapprove"
              checked={votes.losingCompany === "Disapprove"}
              onChange={handleOptionChange}
            />
            <span>Disapprove</span>
          </label>
        </div>
        <button type="submit" className="submit-button">Submit Vote</button>
      </form>
    </div>
  );
};

export default Voting;
