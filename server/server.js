const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const app = express();

dotenv.config();
connectDB();

app.use(cors());  // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json());  // To parse JSON data

app.use('/api/auth', authRoutes);  // Authentication routes
app.use('/api/appointments', appointmentRoutes);  // Appointment routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
