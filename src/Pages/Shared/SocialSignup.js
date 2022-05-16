import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Spinner from "./Spinner";

const SocialSignup = () => {
  const [googleSignIn, user, loading] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  //-------------------------
  const handleGoogleSignup = async () => {
    await googleSignIn();
  };

  //---------------------
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div>
      {loading && <Spinner />}
      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider my-14">OR</div>
      </div>
      <button onClick={handleGoogleSignup} className="btn btn-outline w-full">
        continue with google
      </button>
    </div>
  );
};

export default SocialSignup;
