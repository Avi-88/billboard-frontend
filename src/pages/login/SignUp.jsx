import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleSignUp = () => {
    if (!username || !email || !password || !role) {
      window.alert('Please fill in all fields.');
      return;
    }
    handleRegistration();
  };

  const handleRegistration = () => {
    const url = "http://localhost:5000/api/user/register";
    const data = {
      "userName": username,
      "email": email,
      "password": password,
      "role": role
    }
    axios.post(url, data)
      .then((result) => {
        console.log(result);
        localStorage.setItem("userId", result.data.payload.id);
        localStorage.setItem("userName", result.data.payload.userName);
        navigate("/home");
      })
      .catch(error => {
        window.alert(error.response.data.message);
      });
  };

  const handleLogin = () => {
    navigate("/Login");
  };

  return (
    <div className='bodyL'>
      <div className='container'>
        <div className='headerL'>
          <div className='text'>Sign up</div>
          <div className='textF'>Already have an account? Then simply just login</div>
          <div className='underline'></div>
        </div>
        <div className='inputs'>
          <div className='input'>
            <FontAwesomeIcon icon={faUser} className='icon' />
            <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className='input'>
            <FontAwesomeIcon icon={faEnvelope} className='icon' />
            <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='input'>
            <FontAwesomeIcon icon={faLock} className='icon' />
            <input type={showPassword ? 'text' : 'password'} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <span onClick={togglePasswordVisibility} className="eye-icon">
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
          <div className='input'>
            <FontAwesomeIcon icon={faLock} className='icon' />
            <input type='text' placeholder='Role' value={role} onChange={(e) => setRole(e.target.value)} />
          </div>
        </div>
        <div className='submit-container'>
          <div className='submit' onClick={handleSignUp}>Sign Up</div>
          <div className='submit' onClick={handleLogin}>Login</div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;


