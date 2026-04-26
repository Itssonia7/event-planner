const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');

// Display event details for all users [cite: 38]
router.get('/', eventController.getAllEvents);

// Event registration functionality [cite: 39]
router.post('/register', verifyToken, eventController.registerForEvent);

// Admin only: create events [cite: 38]
router.post('/create', verifyToken, isAdmin, eventController.createEvent);

module.exports = router;