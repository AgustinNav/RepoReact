import React from 'react';
import logo from './logo.svg';
import './App.css';
import AvatarJsx from './components/AvatarJsx/AvatarJsx';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AvatarJsx id={1} color='red' component={<h1>Agus</h1>} />
      <AvatarJsx id={2} color='blue' component={<h1>Kekita</h1>} />
      <AvatarJsx id={3} color='green' component={<h1>Te amo</h1>} />
    </div>
  );
}

export default App;
