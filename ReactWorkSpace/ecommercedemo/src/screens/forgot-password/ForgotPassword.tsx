
import React from 'react';
import "./ForgotPassword.css";

function ForgotPassword() {
  return (
      <div className="main-login-continer" translate="no">
    <div className="form">
    <h2>Login</h2>
    <div className="input">
    <div className="inputBox">
            <label >Username</label>
            <input type="text"/>
        </div>
        <div className="inputBox">
            <label >Email</label>
            <input type="email"/>
        </div>
        <div className="inputBox">
            <label >Old Password</label>
            <input type="password"/>
        </div>
        <div className="inputBox">
            <input type="submit" name="" value="Sign In"/> 
        </div>
    </div>
    <p className="forgot">Forgot Password? <a href="#">Click Here</a></p>
    </div>
      </div>
  );
}

export default ForgotPassword;
