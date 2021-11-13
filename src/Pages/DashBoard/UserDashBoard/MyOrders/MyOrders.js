import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
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
                        alert('deleted successFully')
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
            <Row xs={1} md={3} className="g-3">
                {myOrder.slice(0, 12).map(order => (
                    <Col className="watch-collection-container">
                        <Card style={{ height: "20rem" }} className="border-0">
                            <div className="card-watchcollection">
                                <div style={{ background: `url('${order?.productfrontImg}') no-repeat center center`, backgroundSize: 'cover', backgroundPosition: 'center' }} class="card-front"></div>
                                <div>
                                    <div style={{ background: `url('${order?.productbackImg}') no-repeat center center`, backgroundSize: 'cover', backgroundPosition: 'center' }} class="card-back">
                                        <div class="social-icons">
                                            <button  onClick={() => handlerToDelete(order?._id)} className="social-icon-btn border-0"> <i class="fas fa-trash"></i></button>
                                            <button  className="social-icon-btn border-0"> <i class="fas fa-heart"></i></button>
                                            <button className="social-icon-btn border-0"> <i class="fas fa-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card className="border-0 ">
                            <Card.Body>
                                <Card.Title>{order?.productbrand}</Card.Title>
                                <Card.Text className="mb-1">
                                    {order?.productName}
                                </Card.Text>
                                <Card.Text className="mb-1">
                                    ${order?.productPrice}
                                </Card.Text>
                                <Rating
                                    initialRating={order?.productRating}
                                    readonly
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star icon-color"
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default MyOrders;


