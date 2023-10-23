// Inside Sidebar.js

import React from 'react';
import './Sidebar.css';
import UsersList from './UsersList';
import { faSearch, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Sidebar() {
  return (
    <div className="sidebar-container">
      {/* Sidebar content */}
      <div className='profile'>
        <div className='profile_pic2'>
        <FontAwesomeIcon icon={faUser} className='uuu'/> {/* Search icon */}
        </div>
        <div className='online'></div>
        <text className='username2'>username_manager</text>
        {/* <FontAwesomeIcon icon={faPlus} className='searc'/> {}
        <FontAwesomeIcon icon={faSearch} className='searc2'/> Search icon */}
        
        
      </div>
      
      <input className='sbar2'
      
            placeholder='Search...'>

            
            </input>
      <UsersList />

      <div className='support'>
        <button className='customize'>
          Customize your chat
        </button>
        <button className='reachout'>
          Privacy and support
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
