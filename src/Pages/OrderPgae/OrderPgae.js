
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';

import { Card, Col, Row } from 'react-bootstrap';
import useAuth from '../../hook/useAuth';

const OrderPgae = () => {
    const { user } = useAuth();
    const [products, setProducts] = useState({});
    const { id } = useParams();
    const history = useHistory()

    useEffect(() => {
        fetch(`http://localhost:9000/watchCollection/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [id])
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.userEmail = user?.email;
        data.productName = products?.name;
        data.productPrice = products?.price;
        data.productDesc = products?.desc;
        data.productRating = products?.rating;
        data.date = new Date().toLocaleDateString();
        axios.post(`http://localhost:9000/allorder`, data)
            .then(function (response) {
                if (response.data.insertedId) {
                    alert('successfully ordered');
                    reset();
                    history.push('/')
                }
            })
    };
    return (
        <div className="container">
            <div className="text-center my-5">
                <h1>Order Now</h1>
            </div>
            <Row xs={1} md={2}>
                <Col>  <Card border="primary" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={products?.img} />
                    <Card.Body>

                        <Card.Text>
                            {products?.desc}
                        </Card.Text>
                    </Card.Body>
                </Card></Col>
                <Col className="order-form"><form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={products?.name} readOnly />
                    <br />
                    <input defaultValue={products?.price} readOnly />
                    <br />
                    <input type="text" {...register("userName")} placeholder="Full Name" />
                    <br />
                    <input type="number" {...register("userPhone")} placeholder="Phone Number" />
                    <br />
                    <input type="text" {...register("userAddress")} placeholder="Address" />
                    <br />
                    <input className="banner-btn" type="submit" />
                </form></Col>
            </Row>


        </div>
    );
};

export default OrderPgae;

