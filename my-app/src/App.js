import React from 'react';
import './App.css';
import UserProfile from './components/UserProfile';

const App = () => {
  const user = {
    name: 'DINESHKUMAR',
    email: 'veldineshkumar67@gmail.com',
    bio: 'Software developer with a passion for open source.',
    avatarUrl: '../dk.jpg'
  };

  return (
    <div className="App">
      <UserProfile 
        name={user.name} 
        email={user.email} 
        bio={user.bio} 
        avatarUrl={user.avatarUrl} 
      />
    </div>
  );
};

export default App;
