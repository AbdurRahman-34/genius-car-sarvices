import React from "react";
import google from "../../../Images/Social-logo/google.png";
import facebook from "../../../Images/Social-logo/Facebook.png";
import github from "../../../Images/Social-logo/github.png";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();

  let errorElement;
  if(loading || loading1){
    return <Loading/>
  }
  if (error || error1) {
    errorElement = 
    <div>
        <p className="text-danger">Error: {error?.message} {error1?.message}</p>
    </div>
  }

  if (user || user1) {
    navigate("/home");
  }
  return (
    <div>

      {/* // or link style */}
      <div 
        className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>

    {/* if error hoy  */}
        {errorElement}


     {/* // SIGNIN METHOD */}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-outline-primary d-block mx-auto w-50 my-3">
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>

        <button
       
        className="btn btn-outline-primary d-block mx-auto w-50 my-3">
          <img style={{ width: "30px" }} src={facebook} alt="" />
          <span className="px-2">Facebook Sign In</span>
        </button>

        <button
         onClick={() => signInWithGithub()}
        className="btn btn-outline-primary d-block mx-auto w-50 my-3">
          <img style={{ width: "30px" }} src={github} alt="" />
          <span className="px-2">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
