import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import './SignIn.css';
import useAuth from '../../../hook/useAuth';

const SignIn = () => {
    const history = useHistory();
    const location = useLocation();

    const { handlerToGoogleLogin, handlerLoginWithEmailPass } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = ({ email, password }) => {
        handlerLoginWithEmailPass(email, password,history,location)
    }

    // google login
    const handlerGoogleLoin = () => {
        handlerToGoogleLogin(history, location)
    }

    return (
        <div className="login-div " style={{ height: "100vh" }}>
            <div className="text-center login-container py-5 shadow p-3 mb-5 rounded">
                <h1 className="pb-3">Sign In</h1>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <input className="input-field w-100 h-50 mb-2" type="text" placeholder="Enter Email"  {...register("email")} />
                        <br />
                        <input className="input-field w-100 h-50" type="password" placeholder="Enter Password" {...register("password", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input className="w-100 button-login mt-2" type="submit" />
                    </form>
                    <p className="pt-3">Or Sign In With</p>
                    <Row>
                        <Col xs={12} ><Button className="w-100 button-login" onClick={() => handlerGoogleLoin()}> <i className="fab fa-google me-2"></i>Google</Button>
                        </Col>
                    </Row>
                    <p className="pt-3">Dont't have account ?  <Nav.Link as={Link} to={'/signup'} className="Services-nav ps-0" style={{ display: "inline" }}>Sing Up</Nav.Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;