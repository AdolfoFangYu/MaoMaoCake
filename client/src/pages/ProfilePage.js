import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Get the email from localStorage
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail); // Set the email in state if it exists
    }
  }, []);

  return (
    <div className="profile-page">
      <h2>Profile Page</h2>
      <div className="profile-info">
        <p><strong>Email:</strong> {email}</p>
        {/* Do not display password for security reasons */}
      </div>
    </div>
  );
};

export default ProfilePage;