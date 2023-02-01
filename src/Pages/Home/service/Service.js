import React from 'react';
import './Service.css'
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();

    const navigateToServicesDetail = id => {

        navigate(`/service/${id}`)
    }

    return (
        <div id='services' className='service-container'>
            <img className='w-100' src={img} alt="" />
            <h2>{name} </h2>
            <p>price : {price} </p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServicesDetail(id)} className=' btn btn-primary' >Book {name} </button>
        </div>
    );
};

export default Service;