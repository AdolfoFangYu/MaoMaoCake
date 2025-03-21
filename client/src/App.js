import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ItemsPage from './pages/ItemsPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in (token exists in localStorage)
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('authToken'); 
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>MaoMao Cake</h2>
      </div>
      <button className="back-home-btn" onClick={() => navigate('/')}>🏠 Home</button>
      <div className="navbar-right">
        {!isLoggedIn ? (
          <>
            <Link to="/signin" className="nav-link">Sign In</Link>
            <Link to="/signup" className="nav-link">Sign Up</Link>
          </>
        ) : (
          <>
            <Link to="/profile" className="nav-link">Profile</Link>
            <button className="nav-link" onClick={handleSignOut}>Sign Out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default App;
