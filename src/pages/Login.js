import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase from "../firebase.js";
import { useNavigate } from "react-router-dom"; 

function Login({ setUser }) {
  // const auth = getAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/feed");
        console.log("signinuser" + user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        
      });
      
      
  };

  return (
    <>
    <div className="login">
        <div className="card">
            <div className="left">
                <h1 className="title">Hello Creatives 😏</h1>
                <p>
                    Creative Cube is a social media platform for creative people to share their work and connect with other creatives.
                    Here is where you can share your work and get feedback from other creatives. This platfom is for all creatives, whether you are a photographer, videographer, graphic designer, or a painter.
                    We are all creatives here and we are all here to help each other grow.
                </p>
                <span>Dont you have an account?</span>
                <Link to={"/signup"}>Signup</Link>
            </div>
        </div>
        <div className="right">
    </div>
    </div>



    <div className="theaterLogin">
      <h1 className="title">Creative Cube</h1>
      <h3 className="log">Login</h3>
      <form className="formcss" onSubmit={handleSubmit}>
        <label className="labelcss" htmlFor="username">
          User Name:
        </label>
        <input
          type="text"
          id="username"
          placeholder="Enter your username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label className="labelcss" htmlFor="password">
          Password:
        </label>
        <input
          className="inputcss"
          type="password"
          id="password"
            placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="buttoncss" type="submit">
          Submit
        </button>
      </form>
      <Link to={"/signup"}>Signup</Link>
    </div>
    </>
  );
}

export default Login;
