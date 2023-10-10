// Conversation.js

import React from 'react';
import './Conversation.css';
import Message from './Message';

function Conversation() {
  const messages = [
    {
      content: 'Hi there!',
      isMyMessage: false,
    },
    {
      content: 'Hello!',
      isMyMessage: true,
    },
    {
        content: 'asdsadsadsadsadsad',
        isMyMessage: true,
      },
      {
        content: 'asdasdasdsadblalblalblalblalslsadlsadlsadlsadlsa',
        isMyMessage: true,
      },
      {
        content: 'Hello!',
        isMyMessage: true,
      },
      {
        content: 'Byeeee',
        isMyMessage: false,
      },
      {
        content: 'bla bla',
        isMyMessage: true,
      },
      {
        content: 'bla bla bla',
        isMyMessage: true,
      },
      
    // Add more messages as needed
  ];

  return (
    <div className="conversation">
      {messages.map((message, index) => (
        <Message
          key={index}
          content={message.content}
          isMyMessage={message.isMyMessage}
        />
      ))}
    </div>
  );
}

export default Conversation;
