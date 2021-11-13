import React, { useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import "./ShowReviews.css";

const ShowReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://ancient-river-07627.herokuapp.com/allreviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Container>
            <h1 className="my-3">Reviews</h1>
            <Row xs={1} md={2} className="g-4">
                {reviews.map(review => (
                    <div className="main-container">
                        <div className="review-texts">
                            <div className="review-text review-text-1">
                                <div className="review-text__icon">
                                <Card.Title ><i className="fas fa-bolt me-4 review-text__icon">{review?.productName}</i></Card.Title>
                                </div>
                                <Card.Body>
                                    <Card.Text>
                                    {review?.reviewDesc}
                                    </Card.Text>
                                    <Rating
                                    initialRating={review?.rating}
                                    readonly
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star icon-color"
                                />
                                    <Card.Title>____ {review?.userName}</Card.Title>
                                </Card.Body>
                            </div>
                        </div>
                    </div>
                ))}
            </Row>
        </Container>
    );
};

export default ShowReviews;