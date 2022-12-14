import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch("services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    },[services])

    return (
        <div className='services-main container' id='services'>
            <h2 className='services-titel'>Our Populer Services <br /> --------------    +    --------------</h2>
            <div className='services-container'>
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
            </div>
        </div>
    );
};

export default Services;