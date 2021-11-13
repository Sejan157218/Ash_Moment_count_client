import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hook/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, isAdmin,isLoadingAdmin } = useAuth();
    if (isLoadingAdmin) {
        return <Spinner className="mx-auto" animation="border" variant="success" />
    }
    console.log(isLoadingAdmin,isAdmin);
    return (
        <Route
            {...rest}   
            render={({ location }) =>
            user.email && isAdmin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;