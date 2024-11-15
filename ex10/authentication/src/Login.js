import React, { useState } from 'react';
import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous message
    try {
        await signInWithEmailAndPassword(auth, email, password);
        setMessage("Login successful!");
        navigate('/logout'); // Redirect to the Logout page after login
    } catch (error) {
        console.error("Error code:", error.code); // Log the exact error code for debugging
        
        // Custom error messages based on specific Firebase error codes
        if (error.code === 'auth/user-not-found') {
            setMessage("Please sign up the email."); // Unregistered email
        } else if (error.code === 'auth/wrong-password') {
            setMessage("Incorrect password. Please try again."); // Incorrect password
        } else if (error.code === 'auth/invalid-email') {
            setMessage("The email address is badly formatted."); // Invalid email format
        } else if (error.code === 'auth/invalid-credential') {
            setMessage("The provided credential is invalid. Please try again.");
        } else {
            setMessage("Error: " + error.message); // Default error message for other cases
        }
    }
};


  return (
    <form onSubmit={handleLogin}>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
        required
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
        required
      />
      <button type="submit">Log In</button>
      {message && <div className="message">{message}</div>}
    </form>
  );
};

export default Login;
