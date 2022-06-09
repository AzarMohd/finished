import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import {Link} from"react-router-dom"


const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value)
  }
  const togglePassword = (e) => {
    if (passwordType === "password") {
      setPasswordType("text");
      //  this.classList.toggle("fa","fa-eye");
      // e.preventDefault();
      return;
    }
    setPasswordType("password");
    e.preventDefault();
  }
  return (
    <div className='login'>
      
        <div className='sign'><h5><i class="fa fa-user-circle" aria-hidden="true" /> Sign in</h5>
          <p>Version 2.0</p>
        </div>
        <div>
          <form className='form'>
            <label className='line'><i class="fa fa-user" id="fa" aria-hidden="true"></i> <input type="text" placeholder='user name' /></label>
            <label className='line'><i class="fa fa-lock" aria-hidden="true"></i> <input type={passwordType} placeholder='password' value={passwordInput} name='password' onChange={handlePasswordChange} />
              <i id='icon' onClick={togglePassword}>{passwordType === "password" ? <i className="fa fa-eye-slash"></i> : <i class="fa fa-eye"></i>}</i></label>
            {/* <label className='line'><i class="fa fa-globe"></i> <button></button></label> */}
          </form>
          <div className='buttons'>
          <Link to="/screens">
            <button id='globe'>
              <i class="fa fa-globe"></i>Websso
            </button>
                </Link>
            <button id='globe'>
            <FontAwesomeIcon icon={faWindowMaximize} /> Windows
            </button>
          </div>
          <div className='right'>
            <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
          </div>
        </div>
      
    </div>
  )
}

export default Login