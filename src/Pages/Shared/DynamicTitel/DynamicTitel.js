import React from 'react';
import { Helmet } from 'react-helmet-async';

const DynamicTitel = ({titel}) => {
    return (
        <Helmet>
                <title>{titel} - Genius Car services</title>
        </Helmet>
    );
};

export default DynamicTitel;