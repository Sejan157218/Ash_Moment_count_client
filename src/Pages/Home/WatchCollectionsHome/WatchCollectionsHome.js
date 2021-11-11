import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WatchCollectionsHome = () => {
    const [weatchCollectin, setWeatchCollectin] = useState([]);


    useEffect(() => {
        fetch('https://ancient-river-07627.herokuapp.com/watchCollection')
            .then(res => res.json())
            .then(data => setWeatchCollectin(data))
    }, [])
    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                {weatchCollectin.slice(0, 4).map(watch => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={watch?.img} />
                            <Card.Body>
                                <Card.Title>{watch?.name}</Card.Title>
                                <Card.Text>
                                    {watch?.desc}
                                </Card.Text>
                            </Card.Body>
                            <Link to={`order/${watch?._id}`}> <Button>order</Button></Link>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default WatchCollectionsHome;