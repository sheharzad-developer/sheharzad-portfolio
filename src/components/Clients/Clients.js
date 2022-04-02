/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo1 from '../../assets/images/logo-1.svg';
import Logo2 from '../../assets/images/logo-2.svg';
import Logo3 from '../../assets/images/logo-3.svg';
import Logo4 from '../../assets/images/logo-4.svg';
import Logo5 from '../../assets/images/logo-5.svg';
import Logo6 from '../../assets/images/logo-6.svg';
import './Clients.css';

const Clients = () => {
    return (
        <Container className="ClientsContainer">
            <Row>
                <Col sm>
                    <div className="logoOne">
                        <a href="#">
                            <img src={Logo1} alt="LogoOne" />
                        </a>
                    </div>
                </Col>
                <Col sm>
                    <div className="logoOne">
                        <a href="#">
                            <img src={Logo2} alt="LogoOne" />
                        </a>
                    </div>
                </Col>
                <Col sm>
                    <div className="logoOne">
                        <a href="#">
                            <img src={Logo3} alt="LogoOne" />
                        </a>
                    </div>
                </Col>
                <Col sm>
                    <div className="logoOne">
                        <a href="#">
                            <img src={Logo4} alt="LogoOne" />
                        </a>
                    </div>
                </Col>
                <Col sm>
                    <div className="logoOne">
                        <a href="#">
                            <img src={Logo5} alt="LogoOne" />
                        </a>
                    </div>
                </Col>
                <Col sm>
                    <div className="logoOne">
                        <a href="#">
                            <img src={Logo6} alt="LogoOne" />
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Clients;