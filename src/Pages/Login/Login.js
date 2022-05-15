import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialSignup from "../Shared/SocialSignup";
import {
  useSignInWithEmailAndPassword,
  useAuthState,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [authUser] = useAuthState(auth);
  const [signInWithEmailAndPass, user] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  //----------------------------
  const handleLoginForm = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const pass = event.target.pass.value;

    await signInWithEmailAndPass(email, pass);
  };

  //------------------------
  useEffect(() => {
    if (user || authUser) {
      navigate("/");
    }
  }, [user, authUser, navigate]);

  return (
    <div className=" lg:max-w-lg md:max-w-md mx-auto my-20 px-5">
      <h2 className="text-5xl text-center mb-10">Login</h2>
      <form onSubmit={handleLoginForm}>
        <label htmlFor="">Email</label>
        <br />
        <input
          type="text"
          name="email"
          className="input mb-5 input-bordered w-full max-w-lg"
        />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input
          type="text"
          name="pass"
          className="input mb-5 input-bordered w-full max-w-lg"
        />
        <br />
        <p>Forgot password?</p>
        <button className="btn btn-accent w-full text-white mt-2">login</button>
        <p className="text-center mt-2">
          New to Doctor's Portal?{" "}
          <Link to="/signup" className="text-primary">
            Create new account
          </Link>
        </p>
      </form>
      <SocialSignup />
    </div>
  );
};

export default Login;
