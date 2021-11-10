import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

import "./Header.css";

const Header = () => {
    const { user, SignOut } = useAuth();
    const [scroll, setScroll] = useState(false);

    const scrollOnChange = () => {
        if (window.scrollY < 80) {
            setScroll(true)
        }
        else {
            setScroll(false)
        }
    }

    window.addEventListener('scroll', scrollOnChange)
    return (

        <Navbar collapseOnSelect expand="md" className={scroll ? "nav-container" : "nav-container-scroll"}>
            <Container>
                <Navbar.Brand as={Link} to="/" className='header-h1'>𝔸𝕤𝕙 𝕄𝕠𝕞𝕖𝕟𝕥 ℂ𝕠𝕦𝕟𝕥</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Nav className="me-auto header-nav">
                            <Nav.Link className="nav-color" as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className="nav-color" as={Link} to="/dashboard">DashBoard</Nav.Link>

                            {/* <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link> */}
                        </Nav>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Nav className="me-auto  header-nav">
                            {
                                user.email ?
                                    <Navbar.Text style={{ display: 'flex' }}>
                                        <Nav.Link as={Link} style={{ marginRight: "1rem" }} to="">{user.displayName || user?.email}</Nav.Link>
                                        <Nav.Link onClick={() => SignOut()}> Log Out</Nav.Link>
                                    </Navbar.Text> :
                                    <Navbar.Text style={{ display: 'flex' }}>
                                        <Nav.Link as={Link} style={{ paddingRight: "0" }} to="/signin"> Sign In</Nav.Link>
                                        <Nav.Link as={Link} to="/signup">/ Sign Up</Nav.Link>
                                    </Navbar.Text>
                            }
                        </Nav>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>



    );
};

export default Header;