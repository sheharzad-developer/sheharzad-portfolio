/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialMedia.css';

const SocialMedia = () => {
    return (
        <Container className="SocialMedia">
            <div class="SocialMedia">
                <h1>Social Media</h1>
                <div class="col-sm">
                    <div class="SocialMediaLists">
                        <ul>
                            <li><i class="fab fa-facebook-f" /></li>
                            <li><i class="fab fa-twitter" /></li>
                            <li><i class="fab fa-linkedin" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Container>

    )
}

export default SocialMedia;