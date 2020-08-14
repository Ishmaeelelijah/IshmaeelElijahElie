import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import IT_Logger from '../../assets/img/projects/itlogger.webp'
import Cook_Away from '../../assets/img/projects/cookaway.webp'
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Githubfinder from '../../assets/img/projects/githubfinder.webp'


import "./projects-timeline.styles.css";

export default function TimeLine() {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project: Smart Brain */}
          <ImageEvent date="21/05/2020" className="text-center" text="Github Finder" src={Githubfinder} alt="Smart Brain Face Detect">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An app that find github users
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Search for github users</li>
                          <li>See work and reposatories</li>
                         
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                             React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                             MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              Node.js
                            </span>
                          </li>
                         
                        </ul>
                        <hr />
                        <em>
                          <strong>Search User</strong>
                          <br />
                          <br />
                          You can <strong>Search</strong> for github user.
                        
                        </em>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://github.com/Ishmaeelelijah/githubfinder" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: IT Logger */}

          <ImageEvent date="14/06/2020" className="text-center" text="IT Logger" src={IT_Logger} alt="Robo Friends">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An app that allows to search through the IT log for IT techicains for an IT Firm
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Delet IT Problem</li>
                          <li>Log IT Problem</li>
                          <li>Create New Techicain and Delete it again</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                             Redux
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                               Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              MongoDB
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
               
                <UrlButton href="https://github.com/Ishmaeelelijah/IT-Logger" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Coo Away */}

          <ImageEvent date="15/6/2020" className="text-center" text="Cook Away" src={Cook_Away} alt="Product Hunt Clone">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This App you can Search for all types of Food
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Get Link For More Details</li>
                          <li>Search For Food </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                               React
                            </span>
                          </li>
                         
                          <li>
                            <span className="p-2">
                               Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              Edman API
                            </span>
                          </li>
                         
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://github.com/Ishmaeelelijah/Food-Recipe-App" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

         
         
        </Events>
      </Timeline>
    </div>
  );
}
