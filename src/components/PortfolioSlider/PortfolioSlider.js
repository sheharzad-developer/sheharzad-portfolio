/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import WebDevelopment from '../../assets/images/web-dev.jpg'
import './PortfolioSlider.css';

const PortfolioSlider = () => {
    return (
        <Container className="PortfolioSlider">
            <div class="PortfolioSlider">
                <h1>Portfolio</h1>
            </div>
            <div class="PortfolioColumn">
                <div className="row">
                    <div className='col-sm-4'>
                        <div className="PortfolioBox">
                            <img src={WebDevelopment} />
                            <div class="PortfolioText">
                                <h2>Web Development</h2>
                                <Button>Open</Button>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className="PortfolioBox">
                            <img src={WebDevelopment} />
                            <div class="PortfolioText">
                                <h2>Web Development</h2>
                                <Button>Open</Button>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className="PortfolioBox">
                            <img src={WebDevelopment} />
                            <div class="PortfolioText">
                                <h2>Web Development</h2>
                                <Button>Open</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-sm-4'>
                        <div className="PortfolioBox">
                            <img src={WebDevelopment} />
                            <div class="PortfolioText">
                                <h2>Web Development</h2>
                                <Button>Open</Button>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className="PortfolioBox">
                            <img src={WebDevelopment} />
                            <div class="PortfolioText">
                                <h2>Web Development</h2>
                                <Button>Open</Button>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className="PortfolioBox">
                            <img src={WebDevelopment} />
                            <div class="PortfolioText">
                                <h2>Web Development</h2>
                                <Button>Open</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>

    )
}

export default PortfolioSlider;