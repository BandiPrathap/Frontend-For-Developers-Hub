import React from 'react';
import './RegisterForm.css'; // Import CSS if you have a separate file

const RegisterForm = () => {
  return (
    <form className="form">
      <p className="title">Register</p>
      <p className="message">Signup now and get full access to our app.</p>
      <div className="flex">
        <label>
          <input required placeholder="" type="text" className="input" />
          <span>Firstname</span>
        </label>

        <label>
          <input required placeholder="" type="text" className="input" />
          <span>Lastname</span>
        </label>
      </div>

      <label>
        <input required placeholder="" type="email" className="input" />
        <span>Email</span>
      </label>

      <label className="role-label">
        <h6>Role</h6>
        <input type="radio" name="role" value="founder" className="role-input" />
        <span className="ml-2">Founder</span>
        <input type="radio" name="role" value="freelancer" className="role-input ml-5" />
        <span className="ml-2">Freelancer</span>
      </label>

      <label>
        <input required placeholder="" type="password" className="input" />
        <span>Password</span>
      </label>

      <label>
        <input required placeholder="" type="password" className="input" />
        <span>Confirm password</span>
      </label>

      <button type="submit" className="submit">Submit</button>

      <p className="signin">
        Already have an account? Sign in
      </p>
    </form>
  );
};

export default RegisterForm;
