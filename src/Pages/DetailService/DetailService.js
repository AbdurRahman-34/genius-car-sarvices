import React from 'react';
import { useParams } from 'react-router-dom';

const DetailService = () => {
    const {id} = useParams()
    return (
        <div>
            <h2>Service Detals {id}</h2>
        </div>
    );
};

export default DetailService;