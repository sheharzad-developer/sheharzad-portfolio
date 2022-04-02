import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Grid.css';

const Grid = () => {
    return (
        <Container fluid>
            <Container className="Container">
                <Row>
                    <Col>
                        <div className="RedBoxes">
                            <div class="claimSteps" id="stepOne">
                                <p class="claimStepNumber">1</p>
                                <p class="claimStepTitle">step one</p>
                                <p class="claimStepText">Get started by entering your claim information in the fields below.</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="PurpleBoxes">
                            <div class="claimSteps" id="stepTwo">
                                <p class="claimStepNumber">2</p>
                                <p class="claimStepTitle">step two</p>
                                <p class="claimStepText">Get started by entering your claim information in the fields below.</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="GreenBoxes">
                        <div class="claimSteps" id="stepTwo">
                                <p class="claimStepNumber">3</p>
                                <p class="claimStepTitle">step three</p>
                                <p class="claimStepText">Get started by entering your claim information in the fields below.</p>
                            </div>
                        </div>          
                    </Col>
                </Row>
            </Container>
        </Container>

    )
}

export default Grid;