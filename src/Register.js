import './App.css';
import CountryList from './CountryList';
import two from './img/2.webp';
import React, { useState } from 'react';

function Register({ switchToLogin }){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pas: '',
        role: '',
        country: ''
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
          const response = await fetch('https://moidomaintest.freehostia.com/api/check2.php', {
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
    
    return(
        <div>        
            <h1>Register Page</h1>
            <hr />
            <div className="container">
            <img className="class1" src={two} alt="cat icon" />
            <form className="inp" id="inp2" onSubmit={handleSubmit}>
                <input className="class2" type="text" placeholder=" Enter email" id="email" name="email" 
                value={formData.email} onChange={handleChange}/>
                <input className="class2" type="text" placeholder=" Enter username" id="name" name="name" 
                value={formData.name} onChange={handleChange}/>
                <input className="class2" type="password" placeholder=" Enter your password" id="pas" name="pas" 
                value={formData.pas} onChange={handleChange}/>
                <select className="class2" id="role" name="role" value={formData.role} onChange={handleChange}>
                    <option value=""> Choose a role</option>
                    <option value="0">Admin</option>
                    <option value="1">User</option>
                </select>
                <CountryList name="country" onChange={handleChange}/>
                <button className="class3" type="submit">Submit</button>
            </form>
            </div>
            <hr />
            <p onClick={ switchToLogin } className="linkowe2">Go to login page!</p>
        </div>
    );
}

export default Register;
