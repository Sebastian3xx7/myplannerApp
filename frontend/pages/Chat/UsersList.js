// UsersList.js

import React from 'react';
import './UsersList.css';
import User from './User';

function UsersList() {
  const users = [
    {
      userImage: 'user_image_url_1',
      username: 'Username 1',
      isOnline: true,
      lastMessage: 'Hello there!',
    },
    {
      userImage: 'user_image_url_2',
      username: 'Username 2',
      isOnline: true,
      lastMessage: 'How are you?',
    },
    {
        userImage: 'user_image_url_2',
        username: 'Username 2',
        isOnline: true,
        lastMessage: 'How are you?',
      },
      {
        userImage: 'user_image_url_2',
        username: 'Username 2',
        isOnline: true,
        lastMessage: 'How are you?',
      },
      {
        userImage: 'user_image_url_2',
        username: 'Username 2',
        isOnline: true,
        lastMessage: 'How are you?',
      },
      {
        userImage: 'user_image_url_2',
        username: 'Username 2',
        isOnline: true,
        lastMessage: 'How are you?',
      },
      {
        userImage: 'user_image_url_2',
        username: 'Username 2',
        isOnline: true,
        lastMessage: 'How are you?',
      },
      {
        userImage: 'user_image_url_2',
        username: 'Username 2',
        isOnline: true,
        lastMessage: 'How are you?',
      },
      {
        userImage: 'user_image_url_2',
        username: 'Username 2',
        isOnline: true,
        lastMessage: 'How are you?',
      },
      {
        userImage: 'user_image_url_2',
        username: 'Username 2',
        isOnline: true,
        lastMessage: 'How are you?',
      },
      {
        userImage: 'user_image_url_2',
        username: 'Username 2',
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
