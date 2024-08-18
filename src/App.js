import React, { useState } from 'react';
import './App.css';
import Login from './Login.js';
import Register from './Register.js';
import Project from './Project.js';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const switchToLogin = () => setCurrentPage('login');
  const switchToRegister = () => setCurrentPage('register');
  const handleSuccess = () => {
    setCurrentPage('project'); 
  };

  return (
    <div>
      {currentPage === 'login' && <Login onLoginSuccess={handleSuccess} switchToRegister={switchToRegister} />}
      {currentPage === 'register' && <Register onRegisterSuccess={handleSuccess} switchToLogin={switchToLogin} />}
      {currentPage === 'project' && <Project />}
    </div>
  );
}

export default App;