import React from 'react';
import logo from './logo.svg';
import './App.css';
import AvatarJsx from './components/AvatarJsx/AvatarJsx';
import Navbar from './components/Navbar/Navbar';
import Boton from './components/Boton/Boton';

function App() {
  return (
    <div className="App">
      <Navbar>
        <AvatarJsx id={1} color='red' nombre={'Agus'} />
        <Boton titulo={'Home'} />
      </Navbar>
    </div>
  );
}

export default App;
