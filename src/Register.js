import './App.css';
import two from './img/2.webp';
import React, { useState, useEffect } from 'react';

function Register({ switchToLogin }){
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');

    useEffect(() => { fetchCountries(); }, []);

    const fetchCountries = async () => {
        try {
            const response = await fetch('http://localhost/webpagewithreact/src/api/country.php');
            const data = await response.json();
            setCountries(data);
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    };
    
    return(
        <div>        
            <h1>Register Page</h1>
            <hr />
            <div className="container">
            <img className="class1" src={two} alt="cat icon" />
            <form className="inp" id="inp2" method="POST">
                <input className="class2" type="text" placeholder=" Enter email" id="login" name="login" required/>
                <input className="class2" type="text" placeholder=" Enter username" id="usern" name="usern" required/>
                <input className="class2" type="password" placeholder=" Enter your password" id="pas" name="pas" required/>
                <select className="class2" id="rolq" name="rolq" required>
                    <option value=""> Choose a role</option>
                    <option value="0">Admin</option>
                    <option value="1">User</option>
                </select>
                <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} className="class2" id="country" name="country" required>
                    <option value="">Select a country</option>
                    {countries.map((country) => ( <option key={country.name} value={country.name}> {country.name} </option> ))}
                </select>
                <input className="class3" type="submit" value="Submit"/>
            </form>
            </div>
            <hr />
            <p onClick={ switchToLogin } className="linkowe2">Go to login page!</p>
        </div>
    );
}

export default Register;
