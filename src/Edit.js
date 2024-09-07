import React, { useState, useEffect } from 'react';
import './App.css';
import one from './img/6.webp';
import two from './img/4.png';
import three from './img/x.png';

const Edit = ({ user, projectid, onCancel }) => {
    const [isNewNameOpen, setIsNewNameOpen] = useState(false);
    const changeNewNameOpen = () => {
        setIsNewNameOpen(!isNewNameOpen);
    };
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const changeUserDropdownOpen = () => {
        setIsUserDropdownOpen(!isUserDropdownOpen);
    };
    const [data, setData] = useState({
        otherusers: [],
        addedusers: [],
        projectname: ''
    });

    useEffect(() => {
        fetch('https://moidomaintest.freehostia.com/api/users.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              projectid: projectid,
              user: user
            })
        })
          .then(response => response.json())
          .then(jsonData => {
            setData({
              otherusers: jsonData.otherusers,
              addedusers: jsonData.addedusers,
              projectname: jsonData.projectname
            });
          })
          .catch(error => console.error('Error fetching data:', error));
    }, []);
    
    const [formChangeName, setFormChangeName] = useState({
        newprojectname: '',
        projectid: projectid
    });
    
    const handleChange = (e) => {
        setFormChangeName({
          ...formChangeName,
          [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('https://moidomaintest.freehostia.com/api/changename.php', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(formChangeName)
            });
        
            const dataResponse = await response.json();
            if(!dataResponse){
                alert("Warning! Did not change the name of the project!");
            }else{
                setData({
                    projectname: formChangeName.newprojectname
                });
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    if (!data) {
        return <div>Loading...</div>; 
    }
    return (
        <div className="class4">
            <h2>Project Name:{data.projectname}</h2>
            <hr />
                <div className="items">
                    <img className="ikonki2" src={one} alt="editicon" onClick={changeNewNameOpen}/>
                    <p className="inf" >Edit project name</p>
                </div>
                {isNewNameOpen && (
                    <div>
                        <hr />
                        <form onSubmit={handleSubmit}>
                            <input className="class2" type="text" placeholder=" Enter new project name" name="newprojectname"
                            value={formChangeName.newprojectname} onChange={handleChange} />
                            <input className="class3" type="submit" value="Change"/>
                        </form>
                    </div>
                )}
                <hr />
                <div className="items">
                    <img className="ikonki" src={two} alt="editusericon" onClick={changeUserDropdownOpen} />
                    <p className="inf" >Invite user</p>
                </div>
                {isUserDropdownOpen && (
                    <div>
                        <hr />
                        <p>nyakakyw list s userite za dobawqne i mahane</p>
                    </div>
                )}
                <hr />
                <div className="items">
                    <img className="ikonki" src={three} alt="deleteicon" />
                    <p className="inf" >Delete project</p>
                </div>
                <hr />
                <p className="linkowe4" onClick={onCancel}>open other project</p>
        </div>
    );
}

export default Edit;
