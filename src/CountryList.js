import React, { useState, useEffect } from 'react';
import './App.css';

function CountryList(){
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');

    useEffect(() => { fetchCountries(); }, []);

    const fetchCountries = async () => {
        try {
            const response = await fetch('https://moidomaintest.freehostia.com/api/country.php');
            const data = await response.json();
            setCountries(data);
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    };
    return (
        <div>
        <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} className="class2" id="country" name="country" required>
            <option value="">Select a country</option>
            {countries.map((country) => ( <option key={country.name} value={country.name}> {country.name} </option> ))}
        </select>
        </div>        
    );
}
export default CountryList;