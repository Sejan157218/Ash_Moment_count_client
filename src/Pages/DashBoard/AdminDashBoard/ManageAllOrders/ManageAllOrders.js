import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

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
                    alert('successfully update Status');
                    setUpdateStatus(false)
                }
            })
    };

    // delete order

    const handlerToDelete = id => {
        const proceed = window.confirm('Are You sure to delete this');
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
        <div>
            allOrders {allOrders.length}
            {
                allOrders.map(order =>
                    <div>
                        <h1>{order?.productName}</h1>
                        <h1>{order?.userName}</h1>
                        <h1>{order?.productPrice}</h1>
                        <h1>{order?.productStatus}</h1>

                        <select
                            onChange={handleStatusChange}
                        >
                            <option value="Processing">Processing</option>
                            <option value="Shift">Shift</option>
                            <option value="Delivery Completed">Delivery Completed</option>
                        </select>
                        <button onClick={() => handleToUpdate(order?._id)}>Update</button>

                        <button onClick={() => handlerToDelete(order?._id)}>Delete</button>
                    </div>


                )
            }

        </div>
    );
};

export default ManageAllOrders;