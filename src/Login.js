import './App.css';
import one from './img/1.png';
import React from 'react';

function Login({ switchToRegister }) {
  return (
    <div>
        <h1>Login Page</h1>
        <hr />
        <div className="container">
        <img className="class1" src={one} alt="Cat icon" />
        <form className="inp" id="inp" method="post">
            <input className="class2" type="text" placeholder=" Enter email or username" id="login" name="login" required />
            <input className="class2" type="password" placeholder=" Enter password" id="pas" name="pas" required />
            <input className="class3" type="submit" value="Submit"/> 
        </form>
        </div>
        <hr />
        <p onClick={switchToRegister} className="linkowe">don't have a registration yet?</p>
    </div>
  );
}

export default Login;

