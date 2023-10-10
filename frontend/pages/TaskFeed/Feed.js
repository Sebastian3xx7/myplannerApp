// ContactList.js
import React from 'react';
import './Feed.css';

function ContactList() {
  const tasks = [
    {
      id: 1,
      title: 'Forklift driver',
      description: 'I need someone to put stuff on shelvs.',
    },
    {
        id: 1,
        title: 'Toilet',
        description: 'Clean toilets urgently',
      },
      {
        id: 1,
        title: 'Bank Assistant',
        description: 'This job requires little to no experience. All you have to do is to help out the cashier, count money and do taxes.',
      },
     
    
    // Add more contacts as needed
  ];

  return (
    <div className="contact-list-container">
        <div className="contact-list">
        {tasks.map((contact) => (
            <div key={contact.id} className="contact-card">
            <h2>{contact.title}</h2>
            <p>{contact.description}</p>
            <button className="accept-button">
                <text className="textAccept">Accept Task</text>
            </button>
            </div>
        ))}
        </div>
    </div>
    
  );
}

export default ContactList;
