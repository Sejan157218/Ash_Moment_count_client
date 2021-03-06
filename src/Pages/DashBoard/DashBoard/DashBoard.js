import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Switch, useRouteMatch } from "react-router-dom";
import useAuth from '../../../hook/useAuth';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import AddProduct from '../AdminDashBoard/AddProduct/AddProduct';
import MakeAdmin from '../AdminDashBoard/MakeAdmin/MakeAdmin';
import ManageAllOrders from '../AdminDashBoard/ManageAllOrders/ManageAllOrders';
import ManageAllProducts from '../AdminDashBoard/ManageAllProducts/ManageAllProducts';
import AdminRoute from '../AdminRoute/AdminRoute';
import DashBoardHome from '../DashBoardHome/DashBoardHome';
import MyOrders from '../UserDashBoard/MyOrders/MyOrders';
import Pay from '../UserDashBoard/Pay/Pay';
import Reviews from '../UserDashBoard/Reviews/Reviews';
import "./DashBoard.css";
const DashBoard = () => {
    const { user, isAdmin, SignOut } = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <div>
            <Row>
                <Col xs={12} md={2} className="dashboard-menu">
                    <Nav className="flex-column">

                        {
                            user?.email && !isAdmin && <div>
                                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                                <Nav.Link as={Link} to={`${url}`}>DashBoard</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/myorder`}>My Orders</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/review`}>Review</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/pay`}>Pay</Nav.Link>
                                <Nav.Link onClick={SignOut}>SignOut</Nav.Link>
                            </div>
                        }
                        {
                            user?.email && isAdmin && <>
                                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/manageallorder`}>Manage All Orders</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/addproduct`}>Add A Product</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/makeadmin`}>Make Admin</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/manageproducts`}>Manage All Products</Nav.Link>
                                <Nav.Link onClick={SignOut}>SignOut</Nav.Link>
                            </>
                        }


                    </Nav>
                </Col>
                <Col xs={12} md={10}>
                    <Switch>
                        <PrivateRoute exact path={`${path}`}>
                            <DashBoardHome></DashBoardHome>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/myorder`}>
                            <MyOrders></MyOrders>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/review`}>
                            <Reviews></Reviews>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/pay`}>
                            <Pay></Pay>
                        </PrivateRoute>
                        {/* admin */}
                        <AdminRoute path={`${path}/manageallorder`}>
                            <ManageAllOrders></ManageAllOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addproduct`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                        <AdminRoute path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageproducts`}>
                            <ManageAllProducts></ManageAllProducts>
                        </AdminRoute>
                    </Switch>
                </Col>
            </Row>
        </div>
    );
};

export default DashBoard;