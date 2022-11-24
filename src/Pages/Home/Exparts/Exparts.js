import React from 'react';
import Expart from '../../Home/Expart/Expart'

import expart1 from '../../../Images/experts/expert-1.jpg';
import expart2 from '../../../Images/experts/expert-2.jpg';
import expart3 from '../../../Images/experts/expert-3.jpg';
import expart4 from '../../../Images/experts/expert-4.jpg';
import expart5 from '../../../Images/experts/expert-5.jpg';
import expart6 from '../../../Images/experts/expert-6.png';

const exparts = [
    {id: 1, name: 'Wil Nano', img: expart1},
    {id: 2, name: 'Hel Nano', img: expart2},
    {id: 3, name: 'Fready Nano', img: expart3},
    {id: 4, name: 'Sumith Nano', img: expart4},
    {id: 5, name: 'Rayhan Nano', img: expart5},
    {id: 6, name: 'Alamin Nano', img: expart6},
]

const Exparts = () => {
    return (
        <div className='container'>
            <h2 className='services-titel mt-5'>Our Experts Team <br /> -------------- + --------------</h2>
            <div className="row">
                {
                    exparts.map(expart => <Expart
                    key ={expart.id}
                    expart={expart}
                    ></Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;