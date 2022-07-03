/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <Container className="ContactUs">
            <div className="ContactUs">
                <h1>Contact Us</h1>

                <div class="Contact">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="ContactTitle">
                                <h2>Sheharzad Salahuddin</h2>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="ContactTitle">
                                <span>Email: <p><a href="mailto:sheharzad.salahuddin9000@outlook.com">sheharzad.salahuddin9000@outlook.com</a></p></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>

    )
}

export default ContactUs;