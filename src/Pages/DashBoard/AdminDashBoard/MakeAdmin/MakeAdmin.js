import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../../hook/useAuth';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const { adminToken } = useAuth();
    const onSubmit = (data, e) => {
        fetch('https://ancient-river-07627.herokuapp.com/user/admin', {
            method: "PUT",
            headers: {
                'authorization': `Bearer ${adminToken}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('admin make successfully');
                    reset();
                }

            })
        e.preventDefault()
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