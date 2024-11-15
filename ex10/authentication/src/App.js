import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Logout from './Logout';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Monitor authentication state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    // Clean up the listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div>
        <h1>Firebase Authentication</h1>
        {/* Navigation Links */}
        <nav>
          {!user ? (
            <>
              <Link to="/signup">Sign Up</Link> |{" "}
              <Link to="/login">Log In</Link>
            </>
          ) : (
            <Link to="/logout">Log Out</Link>
          )}
        </nav>
        {/* Routes */}
        <Routes>
          {!user ? (
            <>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </>
          ) : (
            <Route path="/logout" element={<Logout />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
