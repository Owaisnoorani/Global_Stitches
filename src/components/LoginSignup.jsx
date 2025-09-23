import React, { useState } from "react";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isSignup ? "Create Account" : "Welcome Back"}</h2>
        <p>{isSignup ? "Sign up to get started" : "Login to your account"}</p>

        <form className="auth-form">
          {isSignup && (
            <div className="form-group with-icon">
              <i className="fa fa-user"></i>
              <input type="text" placeholder="Full Name" required />
            </div>
          )}
          <div className="form-group with-icon">
            <i className="fa fa-envelope"></i>
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="form-group with-icon">
            <i className="fa fa-lock"></i>
            <input type="password" placeholder="Password" required />
          </div>
          {isSignup && (
            <div className="form-group with-icon">
              <i className="fa fa-lock"></i>
              <input type="password" placeholder="Confirm Password" required />
            </div>
          )}

          <button type="submit" className="auth-btn">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <div className="auth-footer">
          {isSignup ? (
            <p>
              Already have an account?{" "}
              <button onClick={toggleForm} className="switch-btn">
                Login
              </button>
            </p>
          ) : (
            <p>
              Don’t have an account?{" "}
              <button onClick={toggleForm} className="switch-btn">
                Sign Up
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
