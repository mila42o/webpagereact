import React from 'react';
import './App.css';
import six from './img/6.webp';

function OneProject({no,projectname,author,projectid,onEdit}){
    return (
        
        <tr>
            <td>{no}</td> 
            <td>{projectname}</td>
            <td>{author}</td>
            <td>
                <img className="hiksche" src={six} alt="editicon" onClick={() => onEdit(projectid)} />
            </td>
        </tr>
        
    );
}
export default OneProject;