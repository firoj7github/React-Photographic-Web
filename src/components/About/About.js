import React from 'react';
import icon11 from '../../image/coding.png'
import icon12 from '../../image/project.png'
import'./About.css'

const About = () => {
    return (
        <div>
             <session className="all-service">
        <div className="service-1">
           <img src={icon11} alt="" />
        </div>
        <div className="service-2">
            <h1>BEST SERVICE</h1>
            <h1>ANYTIME ANYWHERE</h1>
            <p>Desirous of making a career in Photographic by obtaining the role of Accounting and Financial Analyst at a challenging organization to utilize my knowledge in financial planning, forecasting and reporting.</p>
            <a href="">Read the documentation</a>
        </div>

    </session>
    <session className="community">
          <div className="community-1">
              <h1>KNOW OUR</h1>
              <h1>GLOBAL COMMUNITY</h1>
              <p>Highly motivated and result-oriented individual seeking an entry-level managerial profile in your company to gain practical exposure along with implement my knowledge and expertise to ensure the success of the organisational goals.</p>
              <a href="">Read the documentation</a>
          </div>
          <div className="community-2">
              <img src={icon12} alt="" />
          </div>
    </session>
        </div>
    );
};

export default About;