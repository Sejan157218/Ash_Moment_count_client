import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import notImg from "../../Images/pagenotfound.jpg";
import "./NotFound.css"

const NotFound = () => {
    return (
        <div className="text-center">
            <img className="img-notfound" src={notImg} alt="" />
            <h1>
                <Link to="/home">
                    <Button className="not-btn  mt-2">Back to Home</Button>
                </Link>
            </h1>

        </div>
    );
};

export default NotFound;