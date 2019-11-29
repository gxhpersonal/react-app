import React from 'react';
import logo from './logo.jpg';
import './css/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="http://www.guoxh.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          welcome to my person station
        </a>
      </header>
    </div>
  );
}

export default App;
