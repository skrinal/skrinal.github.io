import React from 'react'
import NavBar from './components/NavBar';
import './App.css'

const App: React.FC = () => {

  return (
    <div>
      <NavBar />
      <div style={{ padding: '20px' }}>
        <h1>Welcome to my website</h1>
        <p>Language: </p>

      </div>
    </div>
  );
};

export default App

