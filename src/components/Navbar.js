import React, { useState } from 'react';
import './Navbar.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  return (
    <nav className='navbar'>
      <div>
        <h1 className='brand'>Developers Hub</h1>
      </div>
      <div>
        <button onClick={handleLoginClick}>Login</button>
        <button onClick={handleRegisterClick}>Register</button>
      </div>
      {showLogin && <LoginForm onClose={handleCloseLogin} />}
      {showRegister && <RegisterForm />}
    </nav>
  );
};

export default Navbar;
