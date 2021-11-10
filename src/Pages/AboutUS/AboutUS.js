import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hook/useAuth';

const AboutUS = () => {
    const { SignOut } = useAuth()
    return (
        <div>
            <Button onClick={SignOut}>signOut</Button>
        </div>
    );
};

export default AboutUS;