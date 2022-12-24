import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const RequerAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  console.log("inside RequrAuth", user);
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!user.emailVerified) {
    return (
      <div>
        <h3 className="text-danger">You Email is Not Verifeid!!</h3>
        <h5>Please verify Your Email Address</h5>
        <button
          className="btn btn-primary"
          onClick={async () => {
            const success = await sendEmailVerification();
            if (success) {
              toast("Sent email");
            }
          }}
        >
          Send Verification email again
        </button>
        <ToastContainer/>
      </div>
    );
  }
  return children;
};

export default RequerAuth;
