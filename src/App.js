import React from 'react';
import logo from './assets/Icon_512x512@3x.png';
import './App.css';

// import components here
import Button from './components/TestButton';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Welcome to the World <code>Belaxito</code>.
        </p>
        <Button />
      </header>
    </div>
  );
}

export default App;
