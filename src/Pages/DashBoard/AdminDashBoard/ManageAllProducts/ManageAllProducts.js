import React, { useEffect, useState } from 'react';

const ManageAllProducts = () => {
    const [allProducts, setallProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9000/watchCollection')
            .then(res => res.json())
            .then(data => setallProducts(data))
    }, [])
    return (
        <div>
            allProducts {allProducts.length}
        </div>
    );
};

export default ManageAllProducts;