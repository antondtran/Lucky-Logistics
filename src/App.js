import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; // Import the Navbar component

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Use the Navbar component */}
      <header className="App-header">
        <h1>Welcome to Lucky Logistics</h1>
        <p>This is a simple React application.</p>
      </header>
    </div>
  );
}

export default App;
