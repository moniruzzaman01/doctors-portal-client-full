import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialSignup from "../Shared/SocialSignup";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
  useAuthState,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Signup = () => {
  const [authUser] = useAuthState(auth);
  const [createUserWithEmailAndPass, user] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const navigate = useNavigate();
  //-----------------------------
  const handleSignupForm = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const pass = event.target.pass.value;

    await createUserWithEmailAndPass(email, pass);
    await updateProfile({ displayName: name });
  };

  //------------------------------
  useEffect(() => {
    if (user || authUser) {
      navigate("/");
    }
  }, [user, authUser, navigate]);

  return (
    <div className=" lg:max-w-lg  md:max-w-md mx-auto my-20 px-5">
      <h2 className="text-5xl text-center mb-10">SignUp</h2>
      <form onSubmit={handleSignupForm}>
        <label htmlFor="">Name</label>
        <br />
        <input
          type="text"
          name="name"
          className="input mb-5 input-bordered w-full max-w-lg"
        />
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
        <button className="btn btn-accent w-full text-white mt-2">
          sign up
        </button>
        <p className="text-center mt-2">
          Have an account?{" "}
          <Link to="/login" className="text-primary">
            Login
          </Link>
        </p>
      </form>
      <SocialSignup />
    </div>
  );
};

export default Signup;
