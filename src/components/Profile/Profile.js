/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProfileImage from '../../assets/images/Passport-Size.jpg';
import './Profile.css';

const Profile = () => {
    return (
        <Container fluid className="Body">
            <Container>
                <Row>
                    <div class="col-md-6 m6">
                        <div className="image">
                            <img src={ProfileImage} />
                        </div>
                    </div>
                    <div class="col-md-6 m6">
                        <div className="content">
                            <p>
                                I am a front web developer with 5 years experience in Web Development. My experience enables me to create modern & responsive web sites with high quality, professional look, and feel. A dedicated and hardworking computer programmer seeking to leverage my technical and professional expertise to grow in a reputable organization to achieve personal and corporate growth. I particularly enjoy developing cross-platform web applications and interactive front-end templates. I understand that every website that represents a business plays a very important role in its growth.
                            </p>
                        </div>
                        <div class="ProfileExperienceButton">
                            <Button variant="primary" size="lg">
                                Hire me!
                            </Button>
                        </div>
                    </div>
                </Row>
            </Container>
        </Container>
    )
}

export default Profile;