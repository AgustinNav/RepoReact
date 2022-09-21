import React from 'react';
import logo from './logo.svg';
import './App.css';
import AvatarJsx from './components/AvatarJsx/AvatarJsx';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bienvenida kekita, te amo!</p>
        {React.createElement(AvatarJsx)}
        {React.createElement('h1', {}, 'Sin JSX')}
      </header>
    </div>
  );
}

export default App;
