// Inside Sidebar.js

import React from 'react';
import './Sidebar2.css';
import UsersList from './Chat/UsersList';
// import UsersList from './UsersList';

function Sidebar2() {
  return (
    <div className="sidebar-container2">
      {/* Sidebar content */}
      <div className='profile'>
        <img className='profile_pic'></img>
        <div className='online'></div>
        <text className='username'>username_manager</text>
        
        
      </div>
      <input className='sbar'
            placeholder='search user'></input>
      <UsersList/>
    </div>
  );
}

export default Sidebar2;
