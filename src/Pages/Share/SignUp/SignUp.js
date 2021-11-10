import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

const SignUp = () => {
    const [errorSignup, setErrorSignup] = useState('')
    const { handlerToGoogleLogin, handlerRegisterToEmailPass } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const location =useLocation()

    // form submit
    const onSubmit = ({ name, email, password, rePassword }) => {
        if (password === rePassword) {
            setErrorSignup('')
            handlerRegisterToEmailPass(email, password, name, history);
        }
        else {
            setErrorSignup('password not match...try again')
        }
    }
// google login
    const handlerGoogleLogin = ()=>{
        handlerToGoogleLogin(history,location)
    }

    return (
        <div className="login-div " style={{ height: "100vh" }}>
            <div className="text-center login-container py-5 shadow p-3 mb-5 rounded">
                <h1 className="pb-3">Sign Up</h1>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="input-icons">
                        <i className="fa fa-user icon"></i>
                        <input className="input-field w-100 h-50 mb-2" type="text" placeholder="Full Name"  {...register("name")} />
                        <br />
                        <i className="far fa-envelope icon"></i>
                        <input className="input-field w-100 h-50 mb-2" type="text" placeholder="Enter Email"  {...register("email")} />
                        <br />
                        <i className="fas fa-lock icon"></i>
                        <input className="input-field w-100 h-50" type="password" placeholder="Enter Password" {...register("password", { required: true })} />
                        <br />
                        <i className="fas fa-lock icon"></i>
                        <input className="input-field w-100 h-50" type="password" placeholder="Re-Enter Password" {...register("rePassword", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        {errorSignup && <span>{errorSignup}</span>}
                        <p>Forget Password ?</p>
                        <input className="w-100 button-login" type="submit" />
                    </form>
                    <p className="pt-3">Or Login With</p>
                    <Row>
                        <Col xs={6} className="mb-2"><Button className="button-login" onClick={handlerGoogleLogin}> <i className="fab fa-google me-2"></i>Google</Button>
                        </Col>
                        <Col xs={6} ><Button className="button-login "><i className="fab fa-github me-2"></i>Github</Button>
                        </Col>
                    </Row>
                    <p className="pt-3">Already have account ? <Nav.Link as={Link} to={'/login'} className="Services-nav ps-0" style={{ display: "inline" }}>Login</Nav.Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;