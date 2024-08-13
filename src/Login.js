import './App.css';
import one from './img/1.png';
import React, { useState } from 'react';

function Login({ switchToRegister }) {
    
  const [formData, setFormData] = useState({
    name: '',
    pas: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://moidomaintest.freehostia.com/api/check.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
        <h1>Login Page</h1>
        <hr />
        <div className="container">
        <img className="class1" src={one} alt="Cat icon" />
        <form className="inp" id="inp" onSubmit={handleSubmit}>
            <input className="class2" type="text" placeholder=" Enter email or username" id="login" name="name" 
            value={formData.name} onChange={handleChange} />
            <input className="class2" type="password" placeholder=" Enter password" id="pas" name="pas" 
            value={formData.pas} onChange={handleChange} />
            <button className="class3" type="submit">Submit</button> 
        </form>
        </div>
        <hr />
        <p onClick={switchToRegister} className="linkowe">don't have a registration yet?</p>
    </div>
  );
}

export default Login;
