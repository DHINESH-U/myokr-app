// src/pages/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      const user = res.data.user;

      // ✅ Save login flag in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(user));

      // ✅ Redirect to dashboard
      navigate('/dashboard');
    } catch (err) {
      setMsg(err.response?.data?.msg || 'Invalid credentials');
    }
  };

  return (
    <div className='form-card'>
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '500px' }}>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            required
            onChange={handleChange}
          />
        </div>
        {/* <button type="submit" className="btn btn-success w-100">Login</button> */}
        {msg && <p className="mt-3 text-center text-danger">{msg}</p>}
        <button type="submit" className="btn btn-success w-100">Login</button>
{msg && <p className="mt-3 text-center text-danger">{msg}</p>}

{/* ✅ Register Redirect Link */}
<p className="mt-3 text-center">
  New user? <a href="/" className="text-decoration-none text-primary">Register here</a>
</p>

      </form>
    </div>
    </div>
  );
};

export default Login;
