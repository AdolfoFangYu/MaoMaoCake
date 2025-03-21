import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/SignInPage.css';

const SignInPage = ({ setIsLoggedIn }) => {  // Make sure you are destructuring `setIsLoggedIn` as a prop here
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('authToken', data.token); 
        localStorage.setItem('email', email);
        setIsLoggedIn(true); 
        navigate('/');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error signing in');
    }
  };

  return (
    <div className="signin-page">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="signin-form">
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
        <button type="submit" className="signin-btn">Sign In</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup" className="signin-link">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignInPage;
