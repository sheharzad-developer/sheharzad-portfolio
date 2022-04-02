/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';

const Skills = () => {
    return (
        <Container fluid className="SkillsBody">
            <Container>
                <div class="SkillsProfile">
                    <h1>Skills Overview</h1>
                </div>
                <Row>
                    <div class="col-sm-4">
                        <div className="HTMLBox">
                            <div className="circle">
                            </div>
                            <div className="FrontEndLists">
                                <h5>Front End Development</h5>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>Bootstrap</li>
                                    <li>Sass</li>
                                    <li>ReactJs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div className="HTMLBox">
                            <div className="circle">
                            </div>
                            <div className="FrontEndLists">
                                <h5>Back End Development</h5>
                                <ul>
                                    <li>Github</li>
                                    <li>MySQL</li>
                                    <li>Json</li>
                                    <li>Firebase</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div className="HTMLBox">
                            <div className="circle">
                            </div>
                            <div className="FrontEndLists">
                                <h5>Mobile App Development</h5>
                                <ul>
                                    <li>React Native</li>
                                    <li>Firebase</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <div class="col-sm">
                        <div className="HTMLBox">
                            <div className="circle">
                            </div>
                            <div className="FrontEndLists">
                                <h5>Front End Development</h5>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                </Row>
            </Container>
        </Container>
    )
}

export default Skills;


{/* <div className="HTMLBox">
                            <div className="circle">
                                
                            </div>
                            <div className="FrontEndLists">
                                <h4>Front End Development</h4>
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Javascript</li>
                                        <li>Bootstrap</li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                    <div className="col-12 col-lg-4 mb-5 mb-3 mb-lg-0">
                        <div className="HTMLBox">
                            <div className="circle"></div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 mb-5 mb-3 mb-lg-0">
                        <div className="HTMLBox">
                            <div className="circle"></div>
                        </div> */}
