import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./CollectionHome.css";

const CollectionHome = () => {
    const Collection = [
        {
            img: "https://i.ibb.co/9wXBXvV/dresswatch.jpg",
            title: "DRESS WATCHES",
        },
        {
            img: "https://i.ibb.co/KVydRbn/simon-desarzens-Bi-OA0-I1ui8o-unsplash.jpg",
            title: "SPORTS WATCHES",
        },
        {
            img: "https://i.ibb.co/f8hSFX0/dmitry-nucky-thompson-ccnc-RDICVNk-unsplash.jpg",
            title: "SMART WATCHES",
        },
    ]
    return (

        <Row xs={1} md={3} className="g-3 mx-4 mt-1">
            {Collection.map(collect => (
                <Col>
                    <Card style={{overflow:"hidden"}}>
                        <Card.Img className="collection-img"  src={collect?.img} />
                        <div className="collection-body">
                            <Card.Title className="collection-title">{collect?.title}</Card.Title>
                           <Link to="/exploreCollection"> <Button className="shop-btn">Shop Now</Button></Link>
                        </div>
                    </Card>
                </Col>
            ))}
        </Row>

    );
};

export default CollectionHome;