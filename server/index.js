const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
// ADD THIS LINE
const eventRoutes = require('./routes/eventRoutes'); 

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
// ADD THIS LINE
app.use('/api/events', eventRoutes); 

app.get('/', (req, res) => {
    res.send("Event Planner Server is Running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});