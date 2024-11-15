import React from 'react';
import { auth } from './firebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error(error);
      alert("Error: " + error.message);
    }
  };

  return (
    <button onClick={handleLogout}>Log Out</button>
  );
};

export default Logout;
