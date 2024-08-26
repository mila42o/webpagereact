import React, {useState,useEffect} from 'react';
import './App.css';
import three from './img/3.png';
import four from './img/4.png';
import five from './img/5.png';
import six from './img/c.png';

function Profile({ user }) {
    const [data, setData] = useState(null); 
    
    useEffect(() => {
        const profileInfo = async () => {
            try {
                const response = await fetch('https://moidomaintest.freehostia.com/api/myprofile.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ user })
                });
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setData(data); 

            } catch (error) {
                console.error('Error:', error); 
            }
        };

        profileInfo(); 
    }, [user]);

    if (!data) {
        return <div>Loading...</div>; 
    }
    return (
        <div className="class4">
            <div className="items">
                <img className="ikonki" src={three} alt="usericon" />
                <p className="inf">{data.user}</p> 
            </div>
            <div className="items">
                <img className="ikonki" src={four} alt="emailicon" />
                <p className="inf">{data.email}</p>
            </div>
            <div className="items">
                <img className="ikonki" src={five} alt="roleicon" />
                <p className="inf">{data.role}</p>
            </div>
            <div className="items">
                <img className="ikonki" src={six} alt="countryicon" />
                <p className="inf">{data.country}</p>
            </div>
        </div>
    );
}

export default Profile;
