import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import "./ManageAllOrders.css";

const ManageAllOrders = () => {
    const [allOrders, setallOrders] = useState([]);
    const [changeStatus, setChangeStatus] = useState('');
    const [updateStatus, setUpdateStatus] = useState(false);


    useEffect(() => {
        fetch('https://ancient-river-07627.herokuapp.com/allorder')
            .then(res => res.json())
            .then(data => {
                setallOrders(data)

            })
    }, [updateStatus]);

    const handleStatusChange = e => {
        setChangeStatus(e.target.value);
    };

    // status update
    const handleToUpdate = id => {
        const body = { updateSatus: changeStatus }
        axios.put(`https://ancient-river-07627.herokuapp.com/allorder/${id}`, body)
            .then(function (response) {
                if (response.data.modifiedCount > 0) {
                    setUpdateStatus(true)
                    alert('update Status successfully');
                    setUpdateStatus(false)
                }
            })
    };

    // delete order

    const handlerToDelete = id => {
        const proceed = window.confirm('Are You Confirm to delete this');
        if (proceed) {
            axios.delete(`https://ancient-river-07627.herokuapp.com/allorder/${id}`)
                .then(function (response) {
                    console.log(response.data)
                    if (response.data.deletedCount > 0) {
                        const filterOrder = allOrders.filter(order => order._id !== id);
                        setallOrders(filterOrder)
                        alert('successfully delete');
                    }
                })
        }
    }

    return (
        <div className="manage-order">
            <Table striped bordered hover responsive className="table-custom">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>User Name</th>
                        <th>user Email</th>
                        <th>Status</th>
                        <th>Status Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {allOrders.map(order =>
                        <tr className="mb-2">

                            <td>{order?.productName}</td>
                            <td>{order?.userName}</td>
                            <td>{order?.userEmail}</td>
                            <td>{order?.productStatus}</td>
                            <td>   <select
                            onChange={handleStatusChange}
                        >
                            <option value="Processing">Processing</option>
                            <option value="Shift">Shift</option>
                            <option value="Delivery Completed">Delivery Completed</option>
                        </select>
                                <button className="update-btn" onClick={() => handleToUpdate(order?._id)}>Update</button></td>
                            <td><button className="update-btn" onClick={() => handlerToDelete(order?._id)}><i className="fas fa-trash"></i></button></td>
                        </tr>

                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default ManageAllOrders;