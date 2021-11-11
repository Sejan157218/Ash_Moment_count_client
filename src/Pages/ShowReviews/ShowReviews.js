import React, { useEffect, useState } from 'react';

const ShowReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9000/allreviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            reviews {reviews.length}
        </div>
    );
};

export default ShowReviews;