import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
    Switch,
    Route,
    useParams,
    useRouteMatch
} from "react-router-dom";
import AddProduct from '../AdminDashBoard/AddProduct/AddProduct';
import MakeAdmin from '../AdminDashBoard/MakeAdmin/MakeAdmin';
import ManageAllOrders from '../AdminDashBoard/ManageAllOrders/ManageAllOrders';
import DashBoardHome from '../DashBoardHome/DashBoardHome';
import MyOrders from '../UserDashBoard/MyOrders/MyOrders';
import Pay from '../UserDashBoard/Pay/Pay';
import Reviews from '../UserDashBoard/Reviews/Reviews';
const DashBoard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <Row>
                <Col xs={12} md={3}>
                    <Nav className="flex-column">
                        <Nav.Link as={Link} to={`${url}`}>DashBoard</Nav.Link>
                        <Nav.Link as={Link} to={`${url}/myorder`}>My Orders</Nav.Link>
                        <Nav.Link as={Link} to={`${url}/review`}>Review</Nav.Link>
                        <Nav.Link as={Link} to={`${url}/pay`}>Pay</Nav.Link>
                        <Nav.Link as={Link} to={`${url}`}>Logout</Nav.Link>

                        <Nav.Link as={Link} to={`${url}/manageallorder`}>Manage All Orders</Nav.Link>
                        <Nav.Link as={Link} to={`${url}/addproduct`}>Add A Product</Nav.Link>
                        <Nav.Link as={Link} to={`${url}/makeadmin`}>Make Admin</Nav.Link>
                        <Nav.Link as={Link} to={`${url}`}>Manage Products</Nav.Link>
                        <Nav.Link as={Link} to={`${url}`}>Logout</Nav.Link>
                    </Nav>
                </Col>
                <Col xs={12} md={9}>
                    <Switch>
                        <Route exact path={`${path}`}>
                            <DashBoardHome></DashBoardHome>
                        </Route>
                        <Route path={`${path}/myorder`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/review`}>
                            <Reviews></Reviews>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/manageallorder`}>
                            <ManageAllOrders></ManageAllOrders>
                        </Route>
                        <Route path={`${path}/addproduct`}>
                            <AddProduct></AddProduct>
                        </Route>
                        <Route path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/`}>

                        </Route>
                        <Route path={`${path}/`}>

                        </Route>
                        <Route path={`${path}/`}>

                        </Route>
                        <Route path={`${path}/`}>

                        </Route>
                    </Switch>
                </Col>
            </Row>
        </div>
    );
};

export default DashBoard;