import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        axios.put('http://localhost:9000/user/admin', data)
            .then(function (response) {

                console.log(response.data.modifiedCount);
                reset()
            })
            .catch(function (error) {
                console.log(error);
            })
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Enter Email To Make Admin" {...register("email")} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default MakeAdmin;