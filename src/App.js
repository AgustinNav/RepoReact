import React from 'react';
import logo from './logo.svg';
import './App.css';
import AvatarJsx from './components/AvatarJsx/AvatarJsx';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AvatarJsx id={1} color='red' nombre={'Agus'} />
      {/**  */}
    </div>
  );
}

export default App;
