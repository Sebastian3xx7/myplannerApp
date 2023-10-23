// UsersList.js

import React from 'react';
import './UsersList.css';
import User from './User';

function UsersList() {
  const users = [
    {
      userImage: 'https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.webp?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=',
      username: 'John Doe',
      isOnline: true,
      lastMessage: 'Hello there!',
    },
    {
      userImage: 'Jessica',
      username: 'Jessica Allen',
      isOnline: true,
      lastMessage: 'How are you?',
    },
    {
        userImage: 'Bob Done',
        username: 'Bob Done',
        isOnline: true,
        lastMessage: 'How are you?',
      },
      
    // Add more user objects as needed
  ];

  return (
    <div className="user-list">
      {users.map((user, index) => (
        <User
          key={index}
          userImage={user.userImage}
          username={user.username}
          isOnline={user.isOnline}
          lastMessage={user.lastMessage}
        />
      ))}
    </div>
  );
}

export default UsersList;
