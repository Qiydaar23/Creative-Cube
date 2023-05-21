import React, { useState } from 'react';



function Signup({setUser}) {
  
  
  const [info, setInfo] = useState({username:"", password: "", age: "", address: "", email:""});


  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch("/users",{
      method: "POST" , 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...info}),
    }).then((response)=>{
      return response.json() 

    }).then((data)=>{
      localStorage.setItem("user",JSON.stringify(data))
      setUser(data)
    })
     .catch((error)=>{
      console.log(error)
    })
  };

  function handleChange(evt) {
    const value = evt.target.value;
    setInfo({
      ...info,
      [evt.target.name]: value
    });
  }


  return (
    <div className="theaterSignup"> 
      <h1 className='signup'>Signup</h1>
      <form className='formcss' onSubmit={handleSubmit}>
        <label className='labelcss' htmlFor="username">User Name:</label>
        <input name = "username"
          type="text"
          id="username"
          value={info.username}
          onChange={handleChange}
        />
        <label className='labelcss' htmlFor="password">Password:</label>
        <input className='inputcss'
        name = "password"
          type="password"
          id="password"
          value={info.password}
          onChange={handleChange}
        />
        <label className='labelcss' htmlFor="email">Email:</label>
        <input className='inputcss'
        name = "email"
          type="email"
          id="email"
          value={info.email}
          onChange={handleChange}
        />
        <label className='labelcss' htmlFor="age">Age:</label>
        <input className='inputcss'
        name = "age"
          type="number"
          id="age"
          value={info.age}
          onChange={handleChange}
        />
        <label className='labelcss' htmlFor="address">Adress:</label>
        <input className='inputcss'
        name = "address"
          type="text"
          id="address"
          value={info.address}
          onChange={handleChange}
        />
        
        <button className='buttoncss' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
