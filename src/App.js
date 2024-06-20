import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import {RegisterPage} from './pages/RegisterPage';
const App = () => {
  return (
   
    <Router>
      <Routes> {/* Replace Switch with Routes */}
        <Route exact path="/" element={<LandingPage />} />
        {/* Add other routes as needed */}
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

export default App;
