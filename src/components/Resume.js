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
I am a recent graduate 🎓 with a Bachelor's degree in Software Engineering from IIUI. Over the past 3 months, I have been actively engaged in front-end development and SEO for social media platforms at Hira Dental Lab. I am driven by a passion for leveraging technology to solve real-world challenges and contribute to impactful projects.
              </p>
            )}
             <div className="your-container">
      {tab.id === 'Education' && (
        <ul className="education-list">
          <li>
            <strong className="education-title">[Degree Title]:BS Software Engineering</strong> <br />
            <span className="education-info">[Institute Name]:International Islamic University, Islamabad</span> <br />
            <span className="education-details">[CGPA]:2.6</span>
            <p className="education-date">[Date]:January 2024</p>
        
          </li>
          <li>
            <strong className="education-title">[Degree Title]: FS.c Pre-Engineering</strong> <br />
            <span className="education-info">[Institute Name]:MTB College, Sadiq Abad</span> <br />
            <span className="education-details">[Marks]:  865/1100</span>
            <p className="education-date">[Date]:August 2018</p>
          
          </li>
          <li>
            <strong className="education-title">[Degree Title]:Matriculation in Science</strong> <br />
            <span className="education-info">[Institute Name]:Fatima Public High School, Sadiq Abad</span> <br />
            <span className="education-details">[Marks]: 989/1100</span>
            <p className="education-date">[Date]:July 2016</p>

          </li>
        </ul>
      )}
    </div>
            {tab.id === 'Languages' && (
              <ul>
                <li style={{color:'white'}}>Urdu:Native</li>
                <li style={{color:'white'}}>Punjabi: Native</li>
                <li> English: Intermediate</li>
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
                    <li>SMOP WEbsite Front End</li>
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
