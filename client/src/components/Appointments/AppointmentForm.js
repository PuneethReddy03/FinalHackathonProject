import React from 'react';
import './Appointments.css';
import axios from 'axios';

const AppointmentForm = () => {
  return (
    <div id="appointments" className="appointments-container">
      <h2>Book an Appointment</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="date" required />
        <textarea placeholder="Reason for Appointment"></textarea>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
