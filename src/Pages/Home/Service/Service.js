import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, img, description, price}= service;
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h4>{name}</h4>
            <p>Price : {price}</p>
            <p>{description.slice(0, 40)}</p>
            <button className='btn btn-primary'>{name} </button>
        </div>
    );
};

export default Service;