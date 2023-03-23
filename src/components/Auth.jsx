import React, { useState,useEffect } from "react";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Auth = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // console.log(auth?.currentUser?.email);

  const signIn = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      onLogin();
      navigate("/news");
      localStorage.setItem("Ravi", res);
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      // console.log(auth?.currentUser);
      console.log(res);
      onLogin();
      navigate("/news");
      localStorage.setItem("Ravi", res);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   localStorage.getItem("tanmay")
  
   
  // }, [])
  

  return (
    <div className="inputs">
      {/* bootstrap */}

      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          placeholder="password must be min. 6 characters"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button onClick={signIn} type="button" className="btn btn-dark">
        Sign In
      </button>
      <button onClick={signInWithGoogle} type="button" className="btn btn-dark">
        Sign In With Google
      </button>
    </div>
  );
};

export default Auth;
