import React, { useRef } from 'react';

import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init'
import SocialLogin from '../Login/SocialLogin/SocialLogin';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const conformPasswordRef = useRef('')


    const handleFromSubmit = (event) => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const conformPassword = conformPasswordRef.current.value
        createUserWithEmailAndPassword(email, password, conformPassword)

    }
    if (user) {
        navigate('/')
    }


    return (
        <div className='container w-50' >
            <h1 className='text-center mt-5 text-primary '>SignUp Form</h1>

            <Form onSubmit={handleFromSubmit} className='mx-auto mt-5  '>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" ref={emailRef} placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" ref={passwordRef} placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" ref={conformPasswordRef} placeholder=" conform Password" required />
                </Form.Group>

                <p >already <Link className='text-primary text-decoration-none pe-auto' to='/login' >sign up ?</Link> </p>
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">Accept genius Car Trams ans Condition </label>


            </Form>
            <Button className='w-50 d-block d-block mx-auto mt-5' variant="primary" type="submit">
                Sign Up
            </Button>
            <p className='text-danger'> {error} </p>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default SignUp;