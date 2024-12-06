import React, { useEffect, useState } from 'react';
import './Appointments.css';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments from the backend (replace with actual API endpoint)
    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://localhost:5000/appointments'); // Example endpoint
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="appointments-list-container">
      <h2>Your Appointments</h2>
      <div className="appointments-list">
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <div key={appointment._id} className="appointment-item">
              <p><strong>Client:</strong> {appointment.clientName}</p>
              <p><strong>Date:</strong> {appointment.date}</p>
              <p><strong>Reason:</strong> {appointment.reason}</p>
              <button className="view-details-btn">View Details</button>
            </div>
          ))
        ) : (
          <p>No appointments found.</p>
        )}
      </div>
    </div>
  );
};

export default AppointmentList;
