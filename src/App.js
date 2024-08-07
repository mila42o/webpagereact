import React, { useState } from 'react';
import './App.css';
import Login from './Login.js';
import Register from './Register.js';

function App() {
  const [view, setView] = useState('login');

  const switchToLogin = () => setView('login');
  const switchToRegister = () => setView('register');

  return (
    <div>
      {view === 'login' ? (
        <Login switchToRegister={switchToRegister} />
      ) : (
        <Register switchToLogin={switchToLogin} />
      )}
    </div>
  );
}

export default App;
