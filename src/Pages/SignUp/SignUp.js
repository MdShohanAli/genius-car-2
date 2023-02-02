import React, { useRef } from 'react';

import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init'
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import { useState } from 'react';

const SignUp = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate()
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const conformPasswordRef = useRef('')

    if (user) {
        console.log(user);
    }


    const handleFromSubmit = async (event) => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const name = conformPasswordRef.current.value


        await createUserWithEmailAndPassword(email, password, name)
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/')

    }
    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger' >Error: {error?.message}</p>
        </div>

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
                <Form.Group className="mb-3" controlId="formBasicConformPassword">

                    <Form.Control type="text" ref={conformPasswordRef} placeholder="Your Name" required />
                </Form.Group>

                <p >already <Link className='text-primary text-decoration-none pe-auto' to='/login' >sign up ?</Link> </p>
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? ' px-2 text-primary' : ' px-2 text-danger'} htmlFor="terms">Accept genius Car Trams ans Condition</label> */}
                <label className={`px-2 ${agree ? ' text-primary' : 'text-danger'}`} htmlFor="terms">Accept genius Car Trams ans Condition</label>
                <Button disabled={!agree} className='w-50 d-block d-block mx-auto mt-5' variant="primary" type="submit">
                    Sign Up
                </Button>

            </Form>

            <p className='text-danger'> {errorElement} </p>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default SignUp;