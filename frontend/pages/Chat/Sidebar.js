// Inside Sidebar.js

import React from 'react';
import './Sidebar.css';
import UsersList from './UsersList';

function Sidebar() {
  return (
    <div className="sidebar-container">
      {/* Sidebar content */}
      <div className='profile'>
        <img className='profile_pic'></img>
        <div className='online'></div>
        <text className='username'>username_manager</text>
        
        
      </div>
      <input className='sbar'
            placeholder='search user'></input>
      <UsersList />
    </div>
  );
}

export default Sidebar;
