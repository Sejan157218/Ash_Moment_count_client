import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';

import "./NotFound.css"

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>
                <Link to="/">
                    <Button className="review-btn">Back to Home</Button>
                </Link>
            </h1>

        </div>
    );
};

export default NotFound;