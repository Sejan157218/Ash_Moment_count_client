import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const ManageAllProducts = () => {
    const [allProducts, setallProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9000/watchCollection')
            .then(res => res.json())
            .then(data => setallProducts(data))
    }, []);

    // handler to delete product
    const handlerToDelete = id => {
        const proceed = window.confirm('Are You sure to delete this');
        if (proceed) {
            axios.delete(`http://localhost:9000/watchCollection/${id}`)
                .then(function (response) {
                    if (response.data.deletedCount > 0) {
                        const filterOrder = allProducts.filter(product => product._id !== id);
                        setallProducts(filterOrder)
                        alert('successfully delete');
                    }
                })
        }
    }
    return (
        <div>
            allProducts {allProducts.length}
            <Row xs={1} md={2} className="g-4">
                {allProducts.map(product => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={product?.img} />
                            <Card.Body>
                                <Card.Title>{product?.name}</Card.Title>
                                <Card.Text>
                                    {product?.price}
                                </Card.Text>
                            </Card.Body>
                            <Button onClick={() => handlerToDelete(product?._id)}> delete</Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ManageAllProducts;