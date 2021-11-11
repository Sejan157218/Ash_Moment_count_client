import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [allOrders, setallOrders] = useState([]);


    useEffect(() => {
        fetch('http://localhost:9000/allorder')
            .then(res => res.json())
            .then(data => setallOrders(data))
    }, [])
    return (
        <div>
            allOrders {allOrders.length}
        </div>
    );
};

export default ManageAllOrders;