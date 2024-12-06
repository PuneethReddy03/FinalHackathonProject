const express = require('express');
const { createAppointment, getAppointments } = require('../controllers/appointmentController');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createAppointment);  // Protect the route (middleware to check JWT)
router.get('/', protect, getAppointments);    // Protect the route

module.exports = router;
