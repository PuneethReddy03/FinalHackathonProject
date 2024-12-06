import React from 'react';
import './Auth.css';

const Register = () => {
  return (
    <div id="register" className="auth-container">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit">Register</button>
      </form>
      <p className="switch-link">
        Already have an account? <a href="/">Login</a>
      </p>
    </div>
  );
};

export default Register;
