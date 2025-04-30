import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css'

function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [ email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    
  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/profile');
    };

    const  handleSubmit = (e) => {
      e.preventDefault();

       const payload = {
        email:email,
        password :password,


      };
      console.log("output", payload)
    

    axios.post(" https://api.escuelajs.co/api/v1/auth/login",payload)
    .then((res) => {
      localStorage.setItem("token",JSON.stringify(res.data.access_token))
      alert("login success")
      console.log("login succssfully")
      setIsAuthenticated(true); 
      navigate("/profile"); 
    })
    .catch((err)=> {
      alert("Login failed");
       console.log("not login",err)
    })
  }
    


  return (
    <div>
   <div className="container">
   <div className="login-form" >
  <div className="log">
  <form  onSubmit={handleSubmit}>
    <h4>LOGIN</h4>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={(e) => setEmail(e.target.value)} value={email}/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"onChange={(e) => setPassword(e.target.value)}  value={password} />
  </div>
 
  <button type="submit" className="btn btn-primary" onClick={handleLogin}>login</button>
</form>
  </div>
   </div>
   </div>

    </div>
  )
}

export default Login
