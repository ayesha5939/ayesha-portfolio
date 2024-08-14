import React, { useState } from 'react';
import './resume.css';

export const Resume = () => {
  const [activeTab, setActiveTab] = useState('AboutMe');

  const tabs = [
    { name: 'About Me', id: 'AboutMe' },
    { name: 'Education', id: 'Education' },
    { name: 'Languages', id: 'Languages' },
    { name: 'Experience', id: 'Experience' },
    { name: 'Certificates', id: 'Certificates' },
  ];

  return (
    <div style={{
      background: "linear-gradient(255deg,#b0b3b6 10%, #b9babd 10%, #6b8ca1 10%,#e0dbde 70%) ",
      color: '#fff',
      padding: '20px',
      borderRadius: '10px'
    }}>
    <div className="resume" >
      <header>
        <h1>Ayesha Saddiqa</h1>
        <p>0326-8626952
          <br/>
          PCHS House No: 78,Street 2,Lahore
        </p>
      </header>

      <nav>
        <ul className="tab-list">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={activeTab === tab.id ? 'active' : ''}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </nav>

      <div className="tab-content" style={{ color: 'black', textDecorationStyle: 'underline' }}>

        {tabs.map((tab) => (
          <section
            key={tab.id}
            id={tab.id}
            className={activeTab === tab.id ? 'active' : ''}
          >
            <h2>{tab.name}</h2>
            {/* Content specific to each tab */}
            {tab.id === 'AboutMe' && (
              <p style={{color:'white'}}>
I am a passionate front-end developer with a strong foundation in HTML, CSS, JavaScript, and React.js. With experience in designing and iterating user interfaces for web and mobile products, I excel at translating user feedback and business requirements into elegant solutions for complex problems. My collaborative approach involves working closely with product managers, analysts, and engineers to conceptualize new features and maintain scalable and well-documented codebases.
              </p>
            )}
             <div className="your-container">
      {tab.id === 'Education' && (
        <ul className="education-list">
          <li>
            <strong className="education-title">Degree Title:BS Software Engineering</strong> <br />
            <span className="education-info">Institute Name:International Islamic University, Islamabad</span> <br />
            <span className="education-details">CGPA:2.68</span>
            <p className="education-date"> Date:January 2024</p>
        
          </li>
          <li>
            <strong className="education-title">Degree Title: FS.c Pre-Engineering</strong> <br />
            <span className="education-info">Institute Name:MTB College, Sadiq Abad</span> <br />
            <span className="education-details">Marks:  865/1100</span>
            <p className="education-date">Date:August 2018</p>
          
          </li>
          
        </ul>
      )}
    </div>
            {tab.id === 'Languages' && (
              <ul>
                <li style={{color:'white'}}>Urdu:Native</li>
               
                <li style={{color:'white'}}> English: Intermediate</li>
              </ul>
            )}
            {tab.id === 'Experience' && (
              <>
                <div className="job">
                  <h3>BDO</h3>
                  <p>
                    <span>SKY Marketing , Islamabad</span> <br />
                    <p>June 2023 – December 2023</p>
                  </p>
                 
                </div>
                <div className="job">
                  <h3>Front End Developer</h3>
                  <p>
                    <span>Hira Dental Lab, Lahore</span> <br />
                    <p>May 2024 – Present Here</p>

                  </p>
                  <ul>
                    <li>SMOP Website Front End</li>
                  </ul>
                </div>
                <div className="job">
                  <h3>Social Media Management </h3>
                  <p>
                    <span>Hira Dental Lab, Lahore</span> <br />
                    <p>May 2024 – Present Here</p>

                  </p>
                  <ul>
                    <li>Youtube,Linkedin SEO</li>
                  </ul>
                </div>
              </>
            )}
            {tab.id === 'Certificates' && (
              <ul>
                <li style={{color:'white'}}>Web Design & Development,  PNY Trainings Institute Lahore,2023</li>
                <li style={{color:'white'}}>Freelancing,  PNY Trainings Institute Lahore,2023</li>
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
    </div>
  );
};
