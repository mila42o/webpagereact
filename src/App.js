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
  const [userID, setUserID] = useState(null);

  const handleUserID = (id) => {
      setUserID(id);
  };

  return (
    <div>
      {currentPage === 'login' && <Login onLoginSuccess={handleSuccess} switchToRegister={switchToRegister} onUserIDChange={handleUserID} />}
      {currentPage === 'register' && <Register onRegisterSuccess={handleSuccess} switchToLogin={switchToLogin} onUserIDChange={handleUserID} />}
      {currentPage === 'project' && <Project switchToLogin={switchToLogin} userID={userID} />}
    </div>
  );
}

export default App;