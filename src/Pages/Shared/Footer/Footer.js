import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 py-2 text-white bg-primary'>
            <p>Copyright @ 2022 Abdur Rahman {year}</p>
        </footer>
    );
};

export default Footer;