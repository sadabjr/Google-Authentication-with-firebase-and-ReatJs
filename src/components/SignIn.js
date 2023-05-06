import React, { useEffect, useState } from "react";
import { auth, provider } from "./Config";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";

const SignIn = () => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });


  return (
    <div className="main">
      {value ? (
        <Home />
      ) : (
        <button className="btn" onClick={handleClick}>SignIn With Google</button>
      )}
    </div>
  );
};

export default SignIn;
