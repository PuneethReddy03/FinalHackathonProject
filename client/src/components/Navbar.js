import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">ConsultPro</Link> {/* Clicking "ConsultPro" redirects to the homepage */}
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Login</Link> {/* Redirects to the Login page */}
        </li>
        <li>
          <Link to="/register">Register</Link> {/* Redirects to the Register page */}
        </li>
        <li>
          <Link to="/appointments">Appointments</Link> {/* Redirects to the Appointments page */}
        </li>
        <li>
          <Link to="/appointments/list">Appointment List</Link> {/* New link for Appointment List page */}
        </li>
        <li>
          <Link to="/chatbot">Chatbot</Link> {/* Redirects to the Chatbot page */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
