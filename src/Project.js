import React from 'react';
import './App.css';

function Project({switchToLogin}){
    return (
        <div>
            <h1>Project page</h1>
            <hr />
            <div className="class5">
                <p className="butoni">Create a new project</p>
                <p className="butoni">Open all projects</p>
                <p className="butoni">View my profile</p>
            </div>
            <hr />
            <p onClick={switchToLogin} className="linkowe">log out of my account</p>
        </div>
    );
}
export default Project;