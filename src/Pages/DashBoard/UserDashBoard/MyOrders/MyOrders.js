import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hook/useAuth';

const MyOrders = () => {
    const [myOrder, setMyOrder] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://ancient-river-07627.herokuapp.com/myorder?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data))
    }, [user?.email])


    const handlerToDelete = id => {
        const proceed = window.confirm('Are You want delete');
        if (proceed) {
            axios.delete(`https://ancient-river-07627.herokuapp.com/myorder?email=${user?.email}&&id=${id}`)
                .then(function (response) {
                    // handle success
                    if (response.data.deletedCount > 0) {
                        const filterProduct = myOrder.filter(order => order._id !== id);
                        setMyOrder(filterProduct)
                        alert('delete successFully')
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
    }
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
                            <Button onClick={() => handlerToDelete(order?._id)}>Delete</Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default MyOrders;


