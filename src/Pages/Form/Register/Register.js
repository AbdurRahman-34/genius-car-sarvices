import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification : true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate()
    
    const navigateLogin = (e) => {
        navigate('/login')
    }

    if(loading || updating){
        return <Loading/>
      }

    if(user){
        console.log("user", user)
    }
    const handelRegister = async (e) => {
        e.preventDefault();
        const displayName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // 1 waye
        // const agree = e.target.terms.checked;
       
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({displayName});
        console.log("Update Your Profile")    
        navigate('/home')
    }
    return (
        <div className='register-form'>
            <h2 className='text-center my-5'>Please Register</h2>
            <form onSubmit={handelRegister}>
                <input type="text" name="name" id="" placeholder='Enter Name' required/> 
                <input type="email" name="email" id="" placeholder='Enter Email' required/> 
                <input type="password" name="password" id="" placeholder='Enter Password' required/>

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />

                {/* 1 waye */}
                {/* <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accept Genius Terms & conditions</label> */}
                
                {/* 2nd waye */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`}  htmlFor="terms">Accept Genius Terms & conditions</label> 
                <input 
                disabled={!agree}
                className='bg-primary text-white' 
                type="submit" 
                value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className="text-danger pe-auto text-decoration-none" onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin/>
        </div>
    );
};

export default Register;