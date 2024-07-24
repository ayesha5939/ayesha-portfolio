import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import 'animate.css';

import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const form = useRef();

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_jf3sx4s', 'template_qk1cgsk', form.current, {
        publicKey: 'oMCtt9yGLcYSDF70n',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Email sent!")
          let btn = document.getElementById('send-btn');
          btn.innerText = 'sent';
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setButtonText('Sending...');
  //   try {
  //     let response = await fetch('http://localhost:5000/contact', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json;charset=utf-8',
  //       },
  //       body: JSON.stringify(formDetails),
  //     });
  //     setButtonText('Send');
  //     let result = await response.json();
  //     setFormDetails(formInitialDetails);
  //     if (result.code === 200) {
  //       setStatus({ success: true, message: 'Message sent successfully' });
  //     } else {
  //       setStatus({ success: false, message: 'Something went wrong, please try again later.' });
  //     }
  //   } catch (error) {
  //     console.error('Error sending message:', error);
  //     setStatus({ success: false, message: 'Failed to send message. Please try again later.' });
  //   }
  // };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>{({ isVisible }) => <img className={isVisible ? 'animate__animated animate__zoomIn' : ''} src={contactImg} alt="Contact Us" />}</TrackVisibility>
          </Col>
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="First Name" name='firstName' onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Last Name" name='lastName' onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Email Address" name='email' onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." name='phone' onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col xs={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Message" name='message' onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit">
                          <span id="send-btn">{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col xs={12}>
                          <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
