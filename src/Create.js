import React, { useState } from 'react';
import './App.css';

function Create({onSuccess, user}){
    let userID = user;
    
    const [formData, setFormData] = useState({
        name: '',
        userid: userID
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
          const response = await fetch('https://moidomaintest.freehostia.com/api/newproject.php', {
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
          if(data){
            onSuccess();
          }else{
            alert("Warning! Did not create the project!");
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="class2" type="text" placeholder=" Enter project name" name="name" 
                value={formData.name} onChange={handleChange} />
                <input className="class3" type="submit"/>
            </form>
        </div>
    );
}
export default Create;