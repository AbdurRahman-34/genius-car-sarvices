import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate()
    const navigateLogin = (e) => {
        navigate('/login')
    }

    const handelRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.email.password.value;

    }
    return (
        <div className='register-form'>
            <h2 className='text-center my-5'>Please Register</h2>
            <form onSubmit={handelRegister}>
                <input type="text" name="name" id="" placeholder='Enter Name' required/> 
                <input type="email" name="email" id="" placeholder='Enter Email' required/> 
                <input type="password" name="password" id="" placeholder='Enter Password' required/>
                <input className='bg-primary text-white' type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className="text-danger pe-auto text-decoration-none" onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;