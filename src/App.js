import React, { useState } from 'react';
import './App.css';

import AvatarJsx from './components/AvatarJsx/AvatarJsx';
import Navbar from './components/Navbar/Navbar';
import Boton from './components/Boton/Boton';
import ItemListContainer from './components/ItemListContainer/ItemListCotainer';
import ItemCount from './components/ItemCount/ItemCount';
import Effect from './components/Effect/Effect';

function App() {

  const [show, setShow] = useState(true);

  const handleonAdd = (count) => {
      console.log("Se añadio un item al carrito")
  }

  return (
    <div className="App">
      <Navbar>
        <Boton mrgL={50} titulo={'Tienda X'} color={'white'} bkcolor={'black'} />
        <Boton mrgL={"20vw"} titulo={'Producto 1'} color={'black'} bkcolor={'white'} />
        <Boton mrgL={50} titulo={'Producto 2'} color={'black'} bkcolor={'white'} />
        <Boton mrgL={50} titulo={'Producto 3'} color={'black'} bkcolor={'white'} />
        <Boton mrgL={50} titulo={'Producto 4'} color={'black'} bkcolor={'white'} />
      </Navbar>

      <ItemListContainer titulo={'Bienvenidos a Tienda X!'} />

      <ItemCount onAdd={handleonAdd} />
      {/**
      <button onClick={() => setShow(!show)}> Show / Hide </button>
      {show ? <Effect /> : null}
      */}
    </div>
  );
}

export default App;
