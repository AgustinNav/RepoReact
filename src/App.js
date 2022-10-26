import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListCotainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProvider from './context/CartContext.js'

function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path='/' element={<ItemListContainer titulo={'Listado de productos:'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer titulo={'Listado por categoria:'} />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/contacto' element={<h1>Contacto</h1>} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>

        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
