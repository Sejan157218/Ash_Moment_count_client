import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import useAuth from '../../../../hook/useAuth';
import "./Reviews.css";


const Reviews = () => {
    
    const { user } = useAuth();
    const history = useHistory()
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.userEmail = user?.email;
        data.userName = user?.displayName;
        axios.post(`https://ancient-river-07627.herokuapp.com/allreviews`, data)
            .then(function (response) {
                if (response.data.insertedId) {
                    alert('Review successfully');
                    reset();

                }
            })
    };
    return (
        <div className="review-container">
            <form onSubmit={handleSubmit(onSubmit)} className="review-from">
                <input type="text" {...register("productName")} placeholder="Product Name"  className="review-btn"/>
                <br />
                <input type="text" {...register("rating")} placeholder="Rating" className="review-btn"/>
                <br />
                <textarea type="text" {...register("reviewDesc")} placeholder="Description" className="review-btn"/>
                <br />
                <input className="review-btn" type="submit" />
            </form>
        </div>
    );
};

export default Reviews;