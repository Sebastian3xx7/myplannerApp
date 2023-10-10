import React, { useState } from 'react';
import './Manager.css';
import Messenger from './Chat/Messenger';
import Sidebar from './Chat/Sidebar';
import { useNavigate } from 'react-router-dom';

function Manager() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Title: '',
    SkillRequired: '',
    Description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogout = () => {
    // Implement logout functionality here (e.g., clear session, redirect to login)
    navigate('/');
  };

  return (
    <div className="manager-window-container">
      <div className="manager-window">
      <button className="view-profile-button">Account</button>
      <div className="dropdown-content2">
        <button className="profile-button">
          <text className="alabel"> View Profile</text>
          </button>
        {/* <button className="advanced-button"><text className="alabel"> Advanced</text></button> */}
        <button className="logout-button2" onClick={handleLogout}><text className="llabel"> Logout</text></button>
      </div>

        {/* <text className="texts2">TaskPlanner</text>
        <text className="texts">Add a new task! Get the job done.</text> */}
        <h1 className='t1'>TaskPlanner</h1>
        
        <h1 className='t3'>My Messages</h1>
        <div className="left-panel">
          <div className="left-panel-cardw">
          <h1 className='infot'>Add a new task below!</h1>
            <form>
              <div className="form-group">
                <label className="labelTitle">Title</label>
                <input
                  className="field"
                  type="text"
                  name="Title"
                  value={formData.Title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label className="labelSkill">Skill Required</label>
                <input
                  className="field2"
                  type="text"
                  name="SkillRequired"
                  value={formData.SkillRequired}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label className="labelDesc">Description</label>
                <textarea
                  className="tarea"
                  type="text"
                  name="Description"
                  value={formData.Description}
                  onChange={handleInputChange}
                />
              </div>
              <button className="addTaskBtn">Add Task</button>
            </form>
          </div>
        </div>
        <div className="right-panel">
            <Sidebar/>
            <Messenger/>
        </div>
      </div>
    </div>
  );
}

export default Manager;
