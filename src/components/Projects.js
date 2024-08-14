import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/pro1.PNG';
import projImg2 from '../assets/img/pro2.PNG';
import projImg3 from '../assets/img/pro3.PNG';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {
  const projects = [
    {
      title: 'Open Source',
      description: 'Design & Development',
      imgUrl: projImg1,
    },
    {
      title: 'Aymer Attire',
      description: 'Design & Development',
      imgUrl: projImg2,
    },
    {
      title: 'My Portfolio',
      description: 'Design & Development',
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <Col key={index} md={4} className="mb-4">
                              <ProjectCard {...project} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <Col>
                            <p>
                              Completed the frontend of a dental implant surgical guide website including the Home page, About Us Page, Login/SignUp Pages, and Contact us page.
                            </p>
                            <p>
                              Working on an E-Commerce website, I have completed half of the Home Page with Video Background,<br/> Products, and Add To Cart pages. Also, completed the backend for products and currently working on the backend of the checkout page using Django.
                            </p>
                          </Col>
                         
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                        <Col>
                                                    <p>
                                                      1. Working on SEO for Hira Dental Lab YouTube and LinkedIn channels.
                                                    </p>
                                                    <p>
                                                      2. Rendered more than 100 Implant Images on Blender for Hira Dental Lab.
                                                    </p>
                                                    <p>
                                                      3.Working on Gimp and Clip Cham for video Editing for Hira dental lab.
                                                    </p>
                                                  </Col>
                        </Row>
                     </Tab.Pane>

                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
