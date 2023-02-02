
import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/25231.png'
import auth from '../../../Firebase/Firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom'
import Loading from '../../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    let errorElement;
    if (loading || loading1) {
        return <Loading></Loading>
    }
    if (error || error1) {

        errorElement = <div>
            <p className='text-danger' >Error: {error?.message} {error1?.message}</p>
        </div>

    }

    if (user || user1) {
        navigate('/')
    }

    return (
        <div>
            <div className='d-flex align-items-center ' >
                <div style={{ height: '1px' }} className='bg-primary w-50 '></div>
                <p className='px-3 mt-2' > or </p>
                <div style={{ height: '1px' }} className='bg-primary w-50 '></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-secondary w-50 d-block mx-auto mb-2'>
                    <img src={google} alt="" />
                    <span className='mx-2' >Google Login</span>
                </button>

                <button

                    className='btn btn-secondary w-50 d-block mx-auto mb-2'>
                    <img style={{ height: 30 }} src={facebook} alt="" />
                    <span className='mx-2'>Facebook Login</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-secondary w-50 d-block mx-auto mb-2 '>
                    <img src={github} alt="" />
                    <span className='mx-2'>GitHub Login</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;