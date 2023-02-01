import React from 'react';
import { useNavigate } from 'react-router-dom'

const ServicesDetails = () => {
    const { ServicesId } = useNavigate()
    const navigate = useNavigate()

    function handleCheckout() {
        navigate('/checkout')
    }
    return (
        <div>
            <h2>Welcome To {ServicesId}</h2>
            <div className='text-center' >
                <button onClick={handleCheckout} className='btn btn-primary'> Proceed CheckOut </button>
            </div>
        </div>
    );
};

export default ServicesDetails;