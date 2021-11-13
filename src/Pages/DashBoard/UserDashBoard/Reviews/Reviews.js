import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import useAuth from '../../../../hook/useAuth';
import "./Reviews.css";


const Reviews = () => {
    const [ratingError, setRatingError] = useState('')
    const { user } = useAuth();
    const history = useHistory()
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        if (data.rating > 0 && data.rating < 6) {
            data.userEmail = user?.email;
            data.userName = user?.displayName;
            axios.post(`https://ancient-river-07627.herokuapp.com/allreviews`, data)
                .then(function (response) {
                    if (response.data.insertedId) {
                        alert('Review Added');
                        setRatingError('')
                        reset();
                    }
                })
        }
        else {
            setRatingError('Rating Must Be 1-5')
        }
    };
    return (
        <div className="review-container">
            <form onSubmit={handleSubmit(onSubmit)} className="review-from">
                <input type="text" {...register("productName")} placeholder="Product Name" className="review-btn" />
                <br />
                <input type="text" {...register("rating")} placeholder="Rating Will Be 1-5" className="review-btn" />
                <h1 style={{width: "100%"}} className="rating-error mx-auto">{ratingError}</h1>
               
                <textarea type="text" {...register("reviewDesc")} placeholder="Description" className="review-btn" />
                <br />
                <input className="review-btn" type="submit" />
            </form>
        </div>
    );
};

export default Reviews;