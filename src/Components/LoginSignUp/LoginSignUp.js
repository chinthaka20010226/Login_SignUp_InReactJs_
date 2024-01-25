import React, { useState } from 'react';
import './LoginSignUp.css';

import name_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

function LoginSignUp(){
    const[action,setAction] = useState("Login");

    return(
        <div className='container'>
            <div className='header'>
                <div className='header-text'>{action}</div>
                <div className='header-underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={name_icon} alt='input-name'></img>
                    <input type='text' placeholder='Name'></input>
                    </div>
                <div className='input'>
                    <img src={email_icon} alt='input-email'></img>
                    <input type='email' placeholder='Email'></input>
                </div>
                <div className='input'>
                    <img src={password_icon} alt='input-password'></img>
                    <input type='password' placeholder='Password'></input>
                </div>
            </div>
            <div className='forgot-password'>
                Lost Password? <span>Click Here!</span>
            </div>
            <div className='submit-container'>
                <div className={action === "Login" ? "submit gray" : "submit"}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"}>Login</div>
            </div>
        </div>
    )
}

export default LoginSignUp;