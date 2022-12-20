import React, { useState } from "react";
import "./styles/register.scss";
import { useContext } from "react";
import AuthContext from "../Contexts/AuthContext";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../file";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const hundleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/Home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Wagmi</span>
        <span className="title">Login</span>
        <form onSubmit={hundleSubmit}>
          <input id="email" type="text" placeholder="email" />
          <input id="password" type="password" placeholder="password" />
          <button id="btn">Sign in</button>
        </form>
        <small>
          You don't have an account? <Link to="/Register">Register</Link>
        </small>
      </div>
    </div>
  );
};

export default Login;
