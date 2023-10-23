import React, { useState } from 'react';
import './Feed.css';

function ContactList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Forklift driver',
      description: 'I need someone to put stuff on shelves.',
      isExpanded: false,
    },
    {
      id: 2,
      title: 'Toilet',
      description: 'Clean toilets urgently',
      isExpanded: false,
    },
    {
      id: 3,
      title: 'Bank Assistant',
      description:
        'This job requires little to no experience. All you have to do is to help out the cashier, count money, and do taxes. This is a long description that should be truncated.',
      isExpanded: false,
    },
  ]);

  const toggleDescription = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isExpanded: !task.isExpanded };
      }
      return { ...task, isExpanded: false };
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="contact-list-container">
      <text className='fdd'>Task Feed</text>
      <div className="contact-list">
        {tasks.map((contact) => (
          <div
            key={contact.id}
            className={`contact-card ${contact.isExpanded ? 'expanded-card' : ''}`}
          >
            <h2>{contact.title}</h2>
            <p>{contact.description}</p>
            {/* <button
              className="expand-button"
              onClick={() => toggleDescription(contact.id)}
            >
              {contact.isExpanded ? 'Less' : '...'}
            </button> */}
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
