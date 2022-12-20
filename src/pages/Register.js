import React, { useState } from "react";
import "./styles/register.scss";
import add from "../imgs/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../file";
import { async } from "@firebase/util";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState(false);
  let handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const Auth = auth;
      let res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);

      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              name,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              name,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Wagmi</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input id="name" type="text" placeholder="name" />
          <input id="email" type="text" placeholder="email" />
          <input id="password" type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label className="addFile" htmlFor="file">
            <img src={add} alt="" />
            <small>Add avatar</small>
          </label>
          <button id="btn">Sign up</button>
          {error && <p>Somthing went wrong</p>}
        </form>
        <small>
          You have an account? <Link to="/Login">Login</Link>
        </small>
      </div>
    </div>
  );
};

export default Register;
