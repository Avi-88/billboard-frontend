import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import UserIcon from '../login/images/UserIcon.png';
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
    const navigate = useNavigate();
    const handleSignUP=()=>{
        navigate("/");
    }
    const handleLogin=()=>{
      if (!email || !password || !role) {
        window.alert('Please fill in all fields.');
        return;
      }
        handleLoginPage();
        
    }
    const handleLoginPage=()=>{
      const url="http://localhost:5000/api/user/login"
      const data=
        {
          "email":email,
          "password":password,
          "role":role
        
      }
      axios.post(url,data)
      .then((result) => {
        localStorage.setItem("userId", result.data.payload.id);
        localStorage.setItem("userName", result.data.payload.userName);
        if(result.data.payload.role=="user"){
          navigate("/home");
        }
        else{
          navigate("/sell");
        }
        
      })
      .catch(error => {
        window.alert(error.response.data.message);
      });
      
    }
  return (
    <div className='bodyL'>
    <div className='container'>
      <div className='headerL'>
        <div className='text'>Login</div>
        <div className='textF'>Please SignUp if you dont have an account</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <FontAwesomeIcon icon={faUser} className='icon' />
          <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        
        <div className='input'>
          <FontAwesomeIcon icon={faLock} className='icon' />
          <input type='password' placeholder='Password'value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <div className='input'>
            <FontAwesomeIcon icon={faLock} className='icon' />
            <input type='text' placeholder='Role' value={role} onChange={(e) => setRole(e.target.value)} />
          </div>
      
      <div className='submit-container'>
        <div className='submit'onClick={handleSignUP}>Sign Up</div>
        <div className='submit'onClick={handleLogin}>Login</div>
      
      </div>
    </div>
    </div>
  );
};

export default Login;