import React, { useState } from 'react';
import './login.css'; 
import { Link } from "react-router-dom";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase from '../firebase.js';


function Login({setUser}) {
    // const auth = getAuth();
    const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');

  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password)
    firebase.auth().signInWithEmailAndPassword(username, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
  };

  return (
    <div className="theaterLogin"> 
        <h1 className='title'>Creative Cube</h1>
      <h3 className='log'>Login</h3>
      <form className='formcss' onSubmit={handleSubmit}>
        <label className='labelcss' htmlFor="username">User Name:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label className='labelcss' htmlFor="password">Password:</label>
        <input className='inputcss'
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className='buttoncss' type="submit">Submit</button>
      </form>
      <Link to={"/signup"}>Signup</Link>
    </div>
  );
}

export default Login;
