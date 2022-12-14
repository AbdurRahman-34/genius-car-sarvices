import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import DynamicTitel from "../../Shared/DynamicTitel/DynamicTitel";

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from.pathname || '/';

    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      if(loading || sending){
        return <Loading/>
      }

      let errorElement;
      if (error) {
      errorElement = <p className="text-danger">Error: {error?.message}</p>
      }

      if(user){
        navigate(from, {replace: true})
      }
    const handelSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }



    const navigateRegister = (e) => {
        navigate('/register')
    }


    const resetPassword = async() => {
      const email = emailRef.current.value; 
      if(email){
        await sendPasswordResetEmail(email)
        toast("send email")
      }
      else{
        toast("Enter Your Email address")
      }
    }



  return (
    <div className="container w-50 mx-auto mb-5 pb-5">
      {/* <DynamicTitel title="Login"></DynamicTitel> */}
      <h2 className="text-primary text-center mt-5">Please Login</h2>

      <Form onSubmit={handelSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>


        <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p>New To Genius Car? <Link to="/register" className="text-primary pe-auto text-decoration-none" onClick={navigateRegister}>Please register</Link></p>
      <p>Forget password? <button className=" btn btn-link text-primary pe-auto text-decoration-none" onClick={resetPassword}>Reset Password</button></p>
      <SocialLogin/>
      <ToastContainer/>
    </div>
  );
};

export default Login;
