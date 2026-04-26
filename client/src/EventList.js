import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/events');
            setEvents(res.data);
        } catch (err) {
            console.error("Error fetching events:", err);
        }
    };

    const handleRegister = async (eventId) => {
        const token = localStorage.getItem('token');
        try {
            const res = await axios.post('http://localhost:5000/api/events/register', 
                { eventId }, 
                { headers: { Authorization: `Bearer ${token}` } }
            );
            alert(res.data.message);
            // Log the Ethereal preview link to the console for the 100% check
            if (res.data.preview) {
                console.log("Email Sent! View it here:", res.data.preview);
            }
        } catch (err) {
            alert("Registration failed. Are you logged in?");
        }
    };

    return (
        <div className="row mt-4">
            {events.length > 0 ? events.map(event => (
                <div key={event.id} className="col-md-6 col-lg-4 mb-4">
                    <div className="nm-card h-100">
                        <h4 className="fw-bold">{event.event_name}</h4>
                        <p className="text-muted small">{new Date(event.date).toDateString()} | {event.location}</p>
                        <p>{event.description}</p>
                        <button 
                            className="nm-button w-100 mt-auto" 
                            onClick={() => handleRegister(event.id)}
                        >
                            Register Now
                        </button>
                    </div>
                </div>
            )) : <p className="text-center">No events found. Ask an Admin to create one!</p>}
        </div>
    );
};

export default EventList;