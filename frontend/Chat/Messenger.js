// Inside Messenger.js

import React from 'react';
import './Messenger.css';
import Conversation from './Conversation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Messenger() {
  return (
    <div className="messenger-container">
        <div className='upbar'>
            <img className='wfl'></img>  
            <text className='cnv'>username_worker</text>
            <text className='avl'>
              available
            </text>
            <button className='settings2'>
              <FontAwesomeIcon icon={faCog} className='setic'/>
            </button>
            <div className="dropdown-content2">
                <button className="profile-button">
                <text className="alabel"> View Profile</text>
                </button>
                {/* <button className="advanced-button"><text className="alabel"> Advanced</text></button> */}
                <button className="Block"><text className="blockuser"> Block user</text></button>
            </div>
        </div>

        <Conversation />


        <div className='messbar2'>
        <input className='field6'
            placeholder='Write something...'/>
            <button className='send2'>
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </div>
      
      
    </div>
  );
}

export default Messenger;
