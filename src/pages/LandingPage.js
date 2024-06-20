import React from 'react';
import './LandingPage.css';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  
  return (
    <div>
      <Navbar/>
      <div className="landing-page">
      <header className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Welcome to Developers Hub</h1>
          <p className="lead">Explore projects, connect with freelancers, and build your team!</p>
        </div>
      </header>
      <div className="container">
        <p>Additional content goes here...</p>
      </div>
    </div>
    </div>
  );
};

export default LandingPage;
