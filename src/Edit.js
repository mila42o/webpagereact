import React, { useState } from 'react';
import './App.css';
import one from './img/6.webp';
import two from './img/4.png';
import three from './img/x.png';

const Edit = ({ projectid, onCancel }) => {
  return (
    <div className="class4">
        <h2>Project Name:{projectid}</h2>
        <hr />
            <div className="items">
                <img className="ikonki2" src={one} alt="editicon" />
                <p className="inf" >Edit project name</p>
            </div>
            <hr />
            <div className="items">
                <img className="ikonki" src={two} alt="editusericon" />
                <p className="inf" >Invite user</p>
            </div>
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
