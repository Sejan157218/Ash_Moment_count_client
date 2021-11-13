import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import "./ManageAllProducts.css";
const ManageAllProducts = () => {
    const [allProducts, setallProducts] = useState([]);

    useEffect(() => {
        fetch('https://ancient-river-07627.herokuapp.com/watchCollection')
            .then(res => res.json())
            .then(data => setallProducts(data))
    }, []);

    // handler to delete product
    const handlerToDelete = id => {
        const proceed = window.confirm('Are You Confirm to delete this');
        if (proceed) {
            axios.delete(`https://ancient-river-07627.herokuapp.com/watchCollection/${id}`)
                .then(function (response) {
                    if (response.data.deletedCount > 0) {
                        const filterOrder = allProducts.filter(product => product._id !== id);
                        setallProducts(filterOrder)
                        alert('successfully deleted');
                    }
                })
        }
    }
    return (
        <div className="allproduct">
            <Table striped bordered hover responsive className="table-custom">
                <thead>
                    <tr>
                        <th>Product Brand</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product Rating</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {allProducts.map(product =>
                        <tr className="mb-2">

                            <td>{product?.brand}</td>
                            <td>{product?.title}</td>
                            <td>${product?.price}</td>
                            <td>{product?.rating}</td>
                            <td><button className="update-btn" onClick={() => handlerToDelete(product?._id)}><i className="fas fa-trash"></i></button></td>
                        </tr>

                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default ManageAllProducts;