import React, { useState } from 'react';
import './App.css';
import Create from './Create.js';
import OpenOld from './OpenOld.js';
import Profile from './Profile.js';

function Project({switchToLogin}){
    const [currentPage, setCurrentPage] = useState('create');

    const switchToCreate = () => setCurrentPage('create');
    const switchToOld = () => setCurrentPage('old');
    const switchToProfile = () => setCurrentPage('profile');
    
    return (
        <div>
            <h1>Project page</h1>
            <hr />
            <div className="class5">
                <p onClick={switchToCreate} className="butoni">Create a new project</p>
                <p onClick={switchToOld} className="butoni">Open all projects</p>
                <p onClick={switchToProfile} className="butoni">View my profile</p>
            </div>
            <hr />        
            {currentPage === 'create' && <Create />}
            {currentPage === 'old' && <OpenOld />}
            {currentPage === 'profile' && <Profile />}
            <hr />
            <p onClick={switchToLogin} className="linkowe3">log out of my account</p>
        </div>
    );
}
export default Project;