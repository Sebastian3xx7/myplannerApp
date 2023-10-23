import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom'; // Import useHistory from react-router-dom
import './LoginForm.css';


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const history = useHistory(); // Create a history object

  const usr = 'admin';
  const correctPassword = 'admin';
  const managerCr = 'manager';
  const managerPass = 'manager';
  const worker = 'worker';
  const workerPass = 'worker';
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if entered email and password match the correct credentials
    if (username === usr && password === correctPassword) {
      // Redirect to the admin page
      // history.push('/admin');
      navigate('/admin');
    } else if(username === managerCr && password === managerPass){
      navigate('/manager');
      
    }else if(username === worker && password === workerPass){
      navigate('/worker');
      
    }else {
      // Display an error message for incorrect credentials
      alert('Incorrect username or password. Please try again.');
    }
  };

  return (
    <div className="login-form-container">

      
      <form className="login-form" onSubmit={handleSubmit}>
        <text className='x'>TaskPlanner</text>
        {/* <h1 className='texts2'>Login</h1> */}
        <div className="form-group">
          <text className='det'>Username</text>
          <input className='inus'
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <text className='det2'>Password</text>
          <input className='inpass'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* <button classname="loginbtn" type="submit">Login</button> */}

        <button className="loginbtn" onClick={handleSubmit}>
          Login
        </button>

        {/* <p>
          Don't have an account? <link to="/signup">Sign up here</link>
        </p> */}

        <p className="sgnlink">
          Don't have an account? <Link to="/signup" className='where'>Sign up here</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
