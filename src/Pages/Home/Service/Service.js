import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, name, img, description, price}= service;
    const navigate = useNavigate()
    const navigateToServiceDetail = (id) => {
        navigate(`service/${id}`)
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h4>{name}</h4>
            <p>Price : {price}</p>
            <p>{description.slice(0, 40)}</p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>{name} </button>
        </div>
    );
};

export default Service;