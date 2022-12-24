import React from 'react';
import DynamicTitel from '../../Shared/DynamicTitel/DynamicTitel';
import Banner from '../Banner/Banner';
import Exparts from '../Exparts/Exparts';
import Services from '../Services/Services'

const Home = () => {
    return (
        <div>
            <DynamicTitel titel="Home"></DynamicTitel>
            <Banner></Banner>
            <Services></Services>
            <Exparts></Exparts>
        </div>
    );
};

export default Home;