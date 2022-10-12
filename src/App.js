import React from 'react';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Boton from './components/Boton/Boton';
import ItemListContainer from './components/ItemListContainer/ItemListCotainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {



  return (
    <div className="App">
      {/**<Navbar>
        <Boton mrgL={50} titulo={'Tienda X'} color={'white'} bkcolor={'black'} />
        <Boton mrgL={"20vw"} titulo={'Producto 1'} color={'black'} bkcolor={'white'} />
        <Boton mrgL={50} titulo={'Producto 2'} color={'black'} bkcolor={'white'} />
        <Boton mrgL={50} titulo={'Producto 3'} color={'black'} bkcolor={'white'} />
        <Boton mrgL={50} titulo={'Producto 4'} color={'black'} bkcolor={'white'} />
      </Navbar>

      <ItemListContainer titulo={'Listado de productos'} />
      <ItemDetailContainer id={1}/>
      */}

      <BrowserRouter>

        <Navbar>
          <Boton mrgL={50} titulo={'Tienda X'} color={'white'} bkcolor={'black'} href={'/'}/>
          <Boton mrgL={"20vw"} titulo={'Producto 1'} color={'black'} bkcolor={'white'} href={null}/>
          <Boton mrgL={50} titulo={'Producto 2'} color={'black'} bkcolor={'white'} href={null}/>
          <Boton mrgL={50} titulo={'Producto 3'} color={'black'} bkcolor={'white'} href={null}/>
          <Boton mrgL={50} titulo={'Producto 4'} color={'black'} bkcolor={'white'} href={null}/>
        </Navbar>

        <Routes>
          <Route path='/' element={<ItemListContainer titulo={'Listado de productos'} />}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
