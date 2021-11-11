import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hook/useAuth';

const MyOrders = () => {
    const [myOrder, setMyOrder] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:9000/myorder?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data))
    }, [user?.email])
    console.log(setMyOrder);
    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                {myOrder.map(order => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={order?.img} />
                            <Card.Body>
                                <Card.Title>{order?.productName}</Card.Title>
                                <Card.Text>
                                    {order?.productDesc}
                                </Card.Text>
                            </Card.Body>
                            <Link to={`order/${order?._id}`}> <Button>order</Button></Link>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default MyOrders;


