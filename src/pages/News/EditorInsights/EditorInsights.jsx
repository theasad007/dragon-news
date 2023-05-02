import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import firstImage from '../../../assets/editorsInsight1.png'
import secondImage from '../../../assets/editorsInsight2.png'
import thirdImage from '../../../assets/editorsInsight3.png'

const EditorInsights = () => {
    return (
        <Row xs={1} md={2} lg={3} className="g-4 mt-4">
            <Col>
                <Card>
                    <Card.Img variant="top" src={firstImage} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={secondImage} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={thirdImage} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default EditorInsights;