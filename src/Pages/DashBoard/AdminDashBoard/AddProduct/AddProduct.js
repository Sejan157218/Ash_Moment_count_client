import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddProduct.css"

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.date = new Date().toLocaleDateString()
        axios.post('https://ancient-river-07627.herokuapp.com/watchCollection', data)
            .then(function (response) {
                if (response.data.insertedId) {
                    alert('successfully added');
                    reset();
                }
            })
    };
    return (
        <div className="add-container">
            <div className="form-container container">
                <h1 className="my-3" style={{color:"#fff"}}>Add Product</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("brand")} placeholder="Product Brand" className="review-btn"/>
                    <br />
                    <input type="text" {...register("title")} placeholder="Product Title" className="review-btn"/>
                    <br />
                    <input type="number" {...register("price")} placeholder="Product Price" className="review-btn"/>
                    <br />
                    <input type="text" {...register("rating")} placeholder="Rating" className="review-btn"/>
                    <br />
                    <input type="text" {...register("desc")} placeholder="Product description" className="review-btn"/>
                    <br />
                    <input type="text" {...register("frontImg")} placeholder="Front image URL" className="review-btn"/>
                    <br />
                    <input type="text" {...register("backImg")} placeholder="Back image URL" className="review-btn"/>
                    <br />
                    <input  type="submit" className="review-btn"/>
                </form>
            </div>

        </div>
    );
};

export default AddProduct;
