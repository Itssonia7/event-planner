const db = require('../config/db');
const nodemailer = require('nodemailer');

// Setup the Email Transporter (using your Ethereal credentials)
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Admin only: Create a new event
exports.createEvent = async (req, res) => {
    const { event_name, description, date, location } = req.body;
    try {
        await db.execute(
            'INSERT INTO events (event_name, description, date, location, created_by) VALUES (?, ?, ?, ?, ?)',
            [event_name, description, date, location, req.userId]
        );
        res.status(201).json({ message: "Event created successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get All Events (Accessible by everyone)
exports.getAllEvents = async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM events');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// User registration for an event + Email Notification logic
exports.registerForEvent = async (req, res) => {
    const { eventId } = req.body;
    const userId = req.userId;

    try {
        // 1. Save registration in the Database
        await db.execute(
            'INSERT INTO registrations (user_id, event_id) VALUES (?, ?)',
            [userId, eventId]
        );

        // 2. Fetch User and Event details for the confirmation email
        const [user] = await db.execute('SELECT email, name FROM users WHERE id = ?', [userId]);
        const [event] = await db.execute('SELECT event_name FROM events WHERE id = ?', [eventId]);

        // 3. Construct and Send the Email
        const mailOptions = {
            from: '"Event Planner" <noreply@eventplanner.com>',
            to: user[0].email,
            subject: `Registration Confirmed: ${event[0].event_name}`,
            text: `Hi ${user[0].name}, you have successfully registered for ${event[0].event_name}!`
        };

        const info = await transporter.sendMail(mailOptions);
        
        // Return success with a preview link for Ethereal
        res.status(200).json({ 
            message: "Registered successfully! Email notification triggered.", 
            preview: nodemailer.getTestMessageUrl(info) 
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};