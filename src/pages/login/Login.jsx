import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import UserIcon from '../login/images/UserIcon.png';
import "./login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const handleSignUP=()=>{
        navigate("/");
    }
    const handleLogin=()=>{
        navigate("/home");
    }
  return (
    <div className='bodyL'>
    <div className='container'>
      <div className='headerL'>
        <div className='text'>Login</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <FontAwesomeIcon icon={faUser} className='icon' />
          <input type='text' placeholder='Username' />
        </div>
        
        <div className='input'>
          <FontAwesomeIcon icon={faLock} className='icon' />
          <input type='password' placeholder='Password' />
        </div>
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