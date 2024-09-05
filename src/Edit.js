import React, { useState } from 'react';
import './App.css';
import one from './img/6.webp';
import two from './img/4.png';
import three from './img/x.png';

const Edit = ({ projectid, onCancel }) => {
    const [isOpen, setIsOpen] = useState(false);
    const changeOpen = () => {
        setIsOpen(!isOpen);
    };
    const [isOpen2, setIsOpen2] = useState(false);
    const changeOpen2 = () => {
        setIsOpen2(!isOpen2);
    };


    return (
        <div className="class4">
            <h2>Project Name:{projectid}</h2>
            <hr />
                <div className="items">
                    <img className="ikonki2" src={one} alt="editicon" onClick={changeOpen}/>
                    <p className="inf" >Edit project name</p>
                </div>
                {isOpen && (
                    <div>
                        <hr />
                        <form>
                            <input className="class2" type="text" placeholder=" Enter new project name" name="ime" required/>
                            <input className="class3" type="submit" value="Change"/>
                        </form>
                    </div>
                )}
                <hr />
                <div className="items">
                    <img className="ikonki" src={two} alt="editusericon" onClick={changeOpen2} />
                    <p className="inf" >Invite user</p>
                </div>
                {isOpen2 && (
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
