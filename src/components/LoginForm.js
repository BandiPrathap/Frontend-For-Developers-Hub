import React from 'react';
import './LoginForm.css'; // If you use a separate CSS file

const LoginForm = () => {
  return (
    <div className="form-container">
      <p className="title">Welcome back</p>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <input type="email" className="input" placeholder="Email" required />
        <input type="password" className="input" placeholder="Password" required />
        <p className="page-link">
          <span className="page-link-label">Forgot Password?</span>
        </p>
        <button type="submit" className="form-btn">Log in</button>
      </form>
      <p className="sign-up-label">
        Don't have an account?<span className="sign-up-link">Sign up</span>
      </p>
    </div>
  );
};

export default LoginForm;
