import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SocialSignup = () => {
  const [googleSignIn, user] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  //-------------------------
  const handleGoogleSignup = async () => {
    await googleSignIn();
    toast(`Hello ${user?.user?.displayName || ""}! Task successfull.`);
  };

  //---------------------
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div>
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
