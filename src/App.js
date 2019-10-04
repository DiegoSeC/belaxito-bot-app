import React from 'react';
import logo from './assets/Icon_512x512@3x.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the World <code>Belaxito</code>.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          work in progress 
        </a>
      </header>
    </div>
  );
}

export default App;
