import React from 'react';
import './App.css';
import six from './img/6.webp';

function OneProject({no,projectname,author}){
    return (
        <div>
            <tr>
                <td>{no}</td> 
                <td>{projectname}</td>
                <td>{author}</td>
                <td>
                    <img className="hiksche" src={six} alt="editicon" />
                </td>
            </tr>
        </div>
    );
}
export default OneProject;