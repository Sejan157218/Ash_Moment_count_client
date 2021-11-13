import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import "./AddProduct.css"

const AddProduct = () => {
    const [ratingError, setRatingError] = useState('')
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        if (data.rating > 0 && data.rating < 6) {
            data.date = new Date().toLocaleDateString()
            axios.post('https://ancient-river-07627.herokuapp.com/watchCollection', data)
                .then(function (response) {
                    if (response.data.insertedId) {
                        alert('Successfully Added');
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
        <div className="add-container">
            <div className="form-container container">
                <h1 className="my-3" style={{ color: "#fff" }}>Add Product</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("brand")} placeholder="Product Brand" className="review-btn" />
                    <br />
                    <input type="text" {...register("title")} placeholder="Product Title" className="review-btn" />
                    <br />
                    <input type="number" {...register("price")} placeholder="Product Price" className="review-btn" />
                    <br />
                    <input type="text" {...register("rating")} placeholder="Rating Will Be 1-5" className="review-btn" />
                    <h1 className="rating-error mx-auto">{ratingError}</h1>
                    <input type="text" {...register("desc")} placeholder="Product description" className="review-btn" />
                    <br />
                    <input type="text" {...register("frontImg")} placeholder="Front image URL" className="review-btn" />
                    <br />
                    <input type="text" {...register("backImg")} placeholder="Back image URL" className="review-btn" />
                    <br />
                    <input type="submit" className="review-btn" />
                </form>
            </div>

        </div>
    );
};

export default AddProduct;
