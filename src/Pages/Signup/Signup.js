import React from "react";
import { Link } from "react-router-dom";
import SocialSignup from "../Shared/SocialSignup";

const Signup = () => {
  return (
    <div className=" lg:max-w-lg  md:max-w-md mx-auto my-20 px-5">
      <h2 className="text-5xl text-center mb-10">SignUp</h2>
      <form className="">
        <label htmlFor="">Name</label>
        <br />
        <input
          type="text"
          name=""
          className="input mb-5 input-bordered w-full max-w-lg"
        />
        <label htmlFor="">Email</label>
        <br />
        <input
          type="text"
          name=""
          className="input mb-5 input-bordered w-full max-w-lg"
        />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input
          type="text"
          name=""
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
