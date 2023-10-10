// Message.js
import React from 'react';
import './Message.css';

function Message({ content, isMyMessage }) {
  const messageClass = isMyMessage ? 'my-message' : 'other-message';

  return (
    <div className={`message-container ${messageClass}`}>
      <div className="time">12:15</div>
      <div className="message-content">
        {content}
      </div>
    </div>
  );
}

export default Message;
