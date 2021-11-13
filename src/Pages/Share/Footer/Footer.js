import React from 'react';
import { Card, Col, Container, Nav, Row } from 'react-bootstrap';
import "./Footer.css";

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-container mt-5">
            <Container className="py-5">
                <Row>
                    <Col sm={4} xs={6}><h4>𝔸𝕤𝕙 𝕄𝕠𝕞𝕖𝕟𝕥 ℂ𝕠𝕦𝕟𝕥</h4>
                        <p>At WatchShop, you can guarantee you will find more watch brands than anywhere else. From the biggest designer brands, to the best of luxury and some hidden gems, along with outstanding service and next day delivery, WatchShop is the hottest place to buy your next watch.</p>

                    </Col>
                    <Col sm={3} xs={6}>
                        <Nav className="flex-column content-footer">
                            <Nav className="flex-column content-footer">
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                                <Nav.Link as={Link} to="/contact" >Contacts</Nav.Link>

                            </Nav>

                        </Nav>

                    </Col>
                    <Col sm={5} xs={12}>
                        <h1>Photos</h1>
                        <Row xs={4} md={6} className="g-2">
                            {Array.from({ length: 4 }).map((_, idx) => (
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={'https://i.ibb.co/k9NjxKg/15.jpg'} />
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
                <hr style={{ color: "white" }} />
                <Row className="mt-5 ms-3">
                    <Col sm={7} xs={12} className="d-flex align-items-center">
                        <p className="mb-0">Copyright © 2021 𝔸𝕤𝕙 𝕄𝕠𝕞𝕖𝕟𝕥 ℂ𝕠𝕦𝕟𝕥 by Sejan Mahmud</p>
                    </Col>
                    <Col sm={5} xs={12}>
                        <Nav className="content-footer">
                            <Nav.Link className="me-2">Privacy Policy.</Nav.Link>
                            <Nav.Link className="me-2">Terms of Use </Nav.Link>
                            <Nav.Link className="me-2">Pricing</Nav.Link>
                        </Nav>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Footer;