import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./DiscoverCollection.css";


const DiscoverCollection = () => {
        const objectCollection = [
            {img:"https://i.ibb.co/WVKvPnH/6.jpg"},
            {img:"https://i.ibb.co/k9NjxKg/15.jpg"},
            {img:"https://i.ibb.co/xXFZtGc/wrist-watch-time-accessory-isolated-on-black-3d-illustration.jpg"},
        ]
    return (
    <Container className="my-5">
        <h1 >Discover Our Collections</h1>
           <Row xs={1} md={3} className="g-3 mt-1">
           
           {objectCollection.map(collect => (
               <Col>
                   <Card className="mb-5">
                       <Card.Img className="discovercollection-img"  src={collect?.img} />
                       <div className="discovercollection-body mx-4">
                           <Card.Title className="discovercollection-title">INTRODUCING AN EVOLUTION OF MILITARY STYLE</Card.Title>
                           <Link to="/exploreCollection"><button className="discovercollection-btn">Shop Now</button></Link>
                       </div>
                   </Card>
               </Col>
           ))}
       </Row>
    </Container>
    );
};

export default DiscoverCollection;