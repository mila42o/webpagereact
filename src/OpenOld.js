import React, {useState, useEffect} from 'react';
import './App.css';
import OneProject from './OneProject';

function OpenOld({user}){
    const [data, setData] = useState(null); 
    
    useEffect(() => {
        const rolq = async () => {
            try {
                const response = await fetch('https://moidomaintest.freehostia.com/api/role.php', {
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

        rolq(); 
    }, [user]);
    if (!data) {
        return <div>Loading...</div>; 
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ProjectNo</th>
                        <th>
                            <div className="but">
                                <h4>ProjectName</h4>
                                <div className="sort-buttons">
                                <span className="sort-button">▲</span>
                                <span className="sort-button">▼</span>
                                </div>
                            </div>
                        </th>
                        <th> 
                            <div className="but">
                                <h4>Author</h4>
                                <div className="sort-buttons">
                                <span className="sort-button">▲</span>
                                <span className="sort-button">▼</span>
                                </div>
                            </div>
                        </th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <OneProject key={index} no={row.id} projectname={row.projectname} author={row.author} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default OpenOld;