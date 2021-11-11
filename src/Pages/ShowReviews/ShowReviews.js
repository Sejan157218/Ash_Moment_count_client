import React, { useEffect, useState } from 'react';

const ShowReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://ancient-river-07627.herokuapp.com/allreviews')
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