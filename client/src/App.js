import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AppointmentForm from './components/Appointments/AppointmentForm';
import AppointmentList from './components/Appointments/AppointmentList'; // Import AppointmentList
import Chatbot from './components/Chatbot/Chatbot';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          {/* Define routes for different components */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/appointments" element={<AppointmentForm />} />
          <Route path="/appointments/list" element={<AppointmentList />} /> 
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
