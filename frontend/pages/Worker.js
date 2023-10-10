import React, { useState } from 'react';
import './Worker.css';
import Feed from './TaskFeed/Feed';
import Sidebar from './Chat/Sidebar';
import Messenger from './Chat/Messenger';
import { useNavigate } from 'react-router-dom';
import Sidebar2 from './Sidebar2';
import Mess2 from './Mess2';

function Manager() {

    const navigate = useNavigate();

    const handleLogout = () => {
        // Implement logout functionality here (e.g., clear session, redirect to login)
        navigate('/');
      };

    return (
        <div className="worker-window-container">

            {/* <div className='blob'></div>
            <div className='blob2'></div> */}

        <title>TaskPlanner</title>
        <h1 className="user">currently logged in as: </h1>
        <div className="worker-window">
        <button className="view-profile-button">Worker_username</button>
        <div className="dropdown-content">
            <button className="profile-button">
            <text className="alabel"> View Profile</text>
            </button>
            <button className="advanced-button"><text className="alabel">Light Mode</text></button>
            <button className="logout-button" onClick={handleLogout}><text className="llabel"> Logout</text></button>
        </div>

            <h1 className="texts2">MyPlanner</h1>
            <h1 className="texts">Task Feed</h1>
            <div className="left-panel-card">
                <Feed/>
            </div>

            <div className="right-panel">
                <Sidebar2/>
                <Mess2/>
            </div>
        </div>
        </div>
    );
}

export default Manager;
