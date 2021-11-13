
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hook/useAuth';
import "./OrderPgae.css";

const OrderPgae = () => {
    const { user } = useAuth();
    const [products, setProducts] = useState({});
    const { id } = useParams();
    const history = useHistory()

    useEffect(() => {
        fetch(`https://ancient-river-07627.herokuapp.com/watchCollection/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [id])
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.userEmail = user?.email;
        data.productbrand = products?.brand;
        data.productName = products?.title;
        data.productPrice = products?.price;
        data.productDesc = products?.desc;
        data.productRating = products?.rating;
        data.productfrontImg = products?.frontImg;
        data.productbackImg = products?.backImg;
        data.productStatus = "Pending";
        data.date = new Date().toLocaleDateString();

        axios.post(`https://ancient-river-07627.herokuapp.com/allorder`, data)
            .then(function (response) {
                if (response.data.insertedId) {
                    alert('Order successfull');
                    reset();
                    history.push('/')
                }
            })
    };
    return (
        <>
            <div className="order-h1 py-5">
                <h1>Order Now</h1>
            </div>
            <div className="order-page">
                <Container >
                    <Row xs={1} md={2} >
                        <Col>
                            <Card >
                                <Card.Img style={{ height: "15rem" }} src={products?.frontImg} />
                                <Card.Body>
                                    <Card.Text>
                                        {products?.desc}
                                    </Card.Text>
                                </Card.Body>
                            </Card></Col>
                        <Col className="order-form my-3"><form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={products?.title} readOnly className="review-btn" />
                            <br />
                            <input defaultValue={products?.price} readOnly className="review-btn" />
                            <br />
                            <input type="number" defaultValue="1" {...register("productQuantity")} placeholder="Product Quantity" className="review-btn" />
                            <br />
                            <input type="text" {...register("userName")} placeholder="Full Name" className="review-btn" />
                            <br />
                            <input type="number" {...register("userPhone")} placeholder="Phone Number" className="review-btn" />
                            <br />
                            <input type="text" {...register("userAddress")} placeholder="Address" className="review-btn mb-3" />
                            <br />
                            <input  type="submit" className="review-btn mt-3" />
                        </form></Col>

                    </Row>
                </Container>

            </div>
        </>
    );
};

export default OrderPgae;

