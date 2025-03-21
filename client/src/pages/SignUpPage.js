import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/SignUpPage.css';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Sign Up Successful');
        navigate('/signin');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error signing up');
    }
  };

  return (
    <div className="signup-page">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit" className="signup-btn">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/signin" className="signup-link">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUpPage;