
import { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import auth from '../../Firebase/Firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    let location = useLocation();
    const navigate = useNavigate()
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger' >Error: {error?.message}</p>
        </div>

    }
    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password);
    }
    const restPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent Email')
        }
        else {
            toast('please enter your email')
        }

    }
    if (user) {
        navigate(from, { replace: true });
    }





    return (
        <div className='container w-50 ' >
            <h1 className='text-center mt-5 text-primary'>Login Form</h1>
            <div className='mx-auto mt-5  '  >
                <Form onSubmit={handleSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <p>New to genius Car <Link to='/signup' className='text-primary text-decoration-none pe-auto'> Please Register</Link> </p>
                    <p>Forget Password <button className=' btn btn-link text-primary text-decoration-none pe-auto' onClick={restPassword} >  Rest Password</button> </p>
                    <Button className='w-50 d-block mx-auto mt-5' variant="primary" type="submit">
                        Login
                    </Button>
                    <p className='text-danger'>{error.message}</p>
                </Form>
                {errorElement}
            </div>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;