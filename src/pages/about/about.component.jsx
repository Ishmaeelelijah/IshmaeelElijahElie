import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Ishmaeel Elijah</strong>
                I am a gamer and a tech geek so as a gamer and tech geek I keep myself updated with the latest tech news and everything i need to know in ordered to perform my coding.I love people and i am very interactive and friendly.I can easily adapt to unknown environments and be comfortable in that environment. I love coding and as a coder i want to be able to write my own code one day and that is what i am currently working on ,on my own.Coding is used in our everyday life and for me to be part of the people that provide the code for the world makes me very happy because i then know that i have done something good for the world and that my code will help millions of people <br></br>
                The place where i got into tech first started in high school , I wanted to find out how people make the app we use and why does it gives us error or fails and then when i finished high school i decided that i was going to research more about the tech world and at the time i finished high school i have already become a tech geek and i was in love with teach but the only missing thing that i was lacking was coding so that is when i decided to do a short course and the join Life Choice academy
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Get In Touch
                      </Button>
                    </a>
                  </div>
                 
                  <div>
                    <a href="https://github.com/Ishmaeelelijah" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/ishmaeel-elijah-0562511a0/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://codepen.io/IshmaeelElie" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        CodePen
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
