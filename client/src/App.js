import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import EventList from './EventList';
import './App.css';

const Dashboard = () => {
  const nmCardStyle = {
    background: '#e0e5ec',
    padding: '40px',
    borderRadius: '30px',
    boxShadow: '9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff',
    marginBottom: '30px',
    border: 'none'
  };

  const nmButtonStyle = {
    background: '#e0e5ec',
    border: 'none',
    padding: '12px 25px',
    borderRadius: '12px',
    boxShadow: '6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff',
    fontWeight: 'bold',
    color: '#444'
  };

  return (
    <div style={{ backgroundColor: '#e0e5ec', minHeight: '100vh', padding: '50px' }}>
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h1 className="fw-bold" style={{ color: '#31344b' }}>Event Planner</h1>
        <button style={nmButtonStyle} onClick={() => { localStorage.clear(); window.location.href = '/'; }}>
          Logout
        </button>
      </div>
      <div style={nmCardStyle}>
        <h4 className="fw-bold">Welcome to the Portal</h4>
        <p className="text-muted">Browse events and register to receive an email notification.</p>
      </div>
      <div className="mt-5">
        <h3 className="mb-4">Upcoming Events</h3>
        <EventList /> 
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App; // THIS IS THE LINE THAT WAS MISSING