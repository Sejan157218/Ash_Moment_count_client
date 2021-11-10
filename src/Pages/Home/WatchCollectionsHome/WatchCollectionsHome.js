import React, { useEffect, useState } from 'react';

const WatchCollectionsHome = () => {
    const [weatchCollectin, setWeatchCollectin] = useState([]);


    useEffect(() => {
        fetch('http://localhost:9000/watchCollection')
            .then(res => res.json())
            .then(data => setWeatchCollectin(data))
    }, [])
    console.log(weatchCollectin);
    return (
        <div>
            {weatchCollectin.length}
        </div>
    );
};

export default WatchCollectionsHome;