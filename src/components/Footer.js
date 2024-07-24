import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import './footer.css'; // Import the CSS file
import freelanceImage from '../assets/img/freelance-work.png'
const waveAnimation = {
  animation: 'wave 1.5s infinite',
};

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} sm={6} className="text-center">
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/ayesha-saddiqa-781178258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...waveAnimation, width: '40px', height: '40px', lineHeight: '40px', textAlign: 'center', borderRadius: '50%',  }}
              >
                <img src={navIcon1} alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
              </a>
              <a
                href="https://www.facebook.com/ayatfatima.fatima.378?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...waveAnimation,  width: '40px', height: '40px', lineHeight: '40px', textAlign: 'center', borderRadius: '50%',  }}
              >
                <img src={navIcon2} alt="Facebook" style={{ width: '24px', height: '24px' }} />
              </a>
              <a
                href="https://www.instagram.com/ayeshay125/?igsh=Z2hoOXRuN3RpbXV3"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...waveAnimation,  width: '40px', height: '40px', lineHeight: '40px', textAlign: 'center', borderRadius: '50%', }}
              >
                <img src={navIcon3} alt="Instagram" style={{ width: '24px', height: '24px' }} />
              </a>
              <a
                href="https://youtube.com/@dusty-queen-asmr?si=tlp3OAv6Jqgbryw3"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...waveAnimation,  width: '40px', height: '40px', lineHeight: '40px', textAlign: 'center', borderRadius: '50%',}}
              >
                <img src={navIcon4} alt="YouTube" style={{ width: '24px', height: '24px' }} />
              </a>
              <a
                href="https://wa.me/923268626952"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-icon"
                style={{ ...waveAnimation, display: 'inline-block', width: '40px', height: '40px', lineHeight: '40px', textAlign: 'center', borderRadius: '50%', }}
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/24px-WhatsApp.svg.png" alt="WhatsApp" style={{ width: '24px', height: '24px' }} />
              </a>
            </div>
            
            <p>AYESHA SADDIQA 2024 | All Rights Reserved <i className="fas fa-copyright" ></i></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
