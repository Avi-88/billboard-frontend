import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import UserIcon from '../login/images/UserIcon.png';
import "./login.css";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const navigate = useNavigate();
    const handleSignUP=()=>{
      navigate("/home");
  }
    const handleLogin=()=>{
      navigate("/Login");
  }
  return (
    <div className='bodyL'>
    <div className='container'>
      <div className='headerL'>
        <div className='text'>Sign up</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <FontAwesomeIcon icon={faUser} className='icon' />
          <input type='text' placeholder='Username' />
        </div>
        <div className='input'>
          <FontAwesomeIcon icon={faEnvelope} className='icon' />
          <input type='email' placeholder='Email' />
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

export default SignUp;

