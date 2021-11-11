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
        <div className="text-center">
            <div className="add-container">

            </div>

            <div className="form-container container">

                <h1 className="my-3">Add Product</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("name")} placeholder="Product Name" />
                    <br />
                    <input type="number" {...register("price")} placeholder="Product Price" />
                    <br />
                    <input type="text" {...register("rating")} placeholder="Rating" />
                    <br />
                    <input type="text" {...register("desc")} placeholder="Product description" />
                    <br />
                    <input type="text" {...register("img")} placeholder="image URL" />
                    <br />
                    <input className="banner-btn" type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddProduct;
