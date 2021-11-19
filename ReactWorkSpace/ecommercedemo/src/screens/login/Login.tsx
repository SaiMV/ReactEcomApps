
import React from 'react';
import "./Login.css";

function Login() {
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
            <label >Password</label>
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

export default Login;
