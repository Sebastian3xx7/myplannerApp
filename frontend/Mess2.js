// Inside Messenger.js

import React from 'react';
import './Mess2.css';
import Conversation from './Chat/Conversation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

function Mess2() {
  return (
    <div className="messenger-container2">
        <div className='upbar'>
            <img className='worker_profile'></img>  
            <text className='converser'>username_worker</text>
            <text className='availability'>
              available
            </text>
            <button className='settings2'>
              <FontAwesomeIcon icon={faCog} className='ic2'/>
            </button>
            <div className="dropdown-content">
                <button className="profile-button">
                <text className="alabel"> View Profile</text>
                </button>
                {/* <button className="advanced-button"><text className="alabel"> Advanced</text></button> */}
                <button className="Block"><text className="blockuser"> Block user</text></button>
            </div>
        </div>

        <Conversation />


        <div className='messbar'>
        <input className='field9'
            placeholder='Write something...'/>
            <button className='send'
                text='send'>
            </button>
        </div>
      
      
    </div>
  );
}

export default Mess2;
