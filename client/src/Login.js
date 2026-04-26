import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('role', res.data.role);
            alert(`Welcome back, ${res.data.name}!`);
            window.location.href = '/dashboard'; 
        } catch (err) {
            alert("Login failed: " + err.response.data.message);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="nm-card" style={{ width: '400px' }}>
                <h3 className="text-center mb-4">Event Planner Login</h3>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <input 
                            type="email" 
                            className="nm-input" 
                            placeholder="Email" 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            type="password" 
                            className="nm-input" 
                            placeholder="Password" 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit" className="nm-button w-100 mt-3">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;