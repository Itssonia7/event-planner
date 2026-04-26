import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'user' });
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/register', formData);
            alert("Registration Successful! Please Login.");
            navigate('/');
        } catch (err) {
            alert("Registration failed");
        }
    };

    return (
        <div className="nm-container">
            <div className="nm-card">
                <h2 className="text-center mb-4">Create Account</h2>
                <form onSubmit={handleRegister}>
                    <input type="text" className="nm-input" placeholder="Full Name" onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                    <input type="email" className="nm-input" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                    <input type="password" className="nm-input" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} required />
                    <select className="nm-input" onChange={(e) => setFormData({...formData, role: e.target.value})}>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                    <button type="submit" className="nm-button">REGISTER</button>
                </form>
                <p className="mt-3 text-center" style={{fontSize: '0.9rem'}}>
                    Already have an account? <span style={{color: '#007bff', cursor: 'pointer'}} onClick={() => navigate('/')}>Login</span>
                </p>
            </div>
        </div>
    );
};

export default Register;