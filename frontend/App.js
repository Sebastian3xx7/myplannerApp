import React from 'react';
import LoginForm from './pages/LoginForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin';
import Manager from './pages/Manager';
import Worker from './pages/Worker';
import Signupform from './pages/Signupform'; // Create a new component for signup


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/manager" element={<Manager/>} />
          <Route path="/worker" element={<Worker/>} />
          <Route path="/signup" element={<Signupform/>}/>
        </Routes>
      </div>
      </Router>
  );
}

export default App;
