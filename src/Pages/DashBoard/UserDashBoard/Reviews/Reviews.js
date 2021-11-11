import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import useAuth from '../../../../hook/useAuth';



const Reviews = () => {
    const { user } = useAuth();
    const history = useHistory()
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.userEmail = user?.email;
        data.userName = user?.displayName;
        axios.post(`http://localhost:9000/allreviews`, data)
            .then(function (response) {
                if (response.data.insertedId) {
                    alert('Review successfully');
                    reset();

                }
            })
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("productName")} placeholder="Product Name" />
                <br />
                <input type="number" {...register("rating")} placeholder="Rating" />
                <br />
                <textarea type="text" {...register("reviewDesc")} placeholder="description" />
                <br />
                <input className="banner-btn" type="submit" />
            </form>
        </div>
    );
};

export default Reviews;