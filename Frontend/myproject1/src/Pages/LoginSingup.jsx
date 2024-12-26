import React from 'react';
import './Css/LoginSingup.css'

function LoginSingup(props) {
    return (
        <div className='loginsingup'>
            <div className='loginsingup-container'>
                <h1>Sing Up</h1>
                <div className='loginsingup-fields'>
                    <input type='text' placeholder='Your name '/>
                    <input type='email' placeholder='Your email '/>
                    <input type='password' placeholder='Your password '/>
                </div>
                <button>Continue</button>
                <p className='loginsingup-login'>Alread have an account?<span>Login</span></p>
                <div className='loginsingup-agree'>
                    <input type ="checkbox" name ='' id=''/>
                    <p>By Continuing, I agree to the terms of use & privacy polite</p>
                </div>
            </div>
        </div>
    );
}

export default LoginSingup;