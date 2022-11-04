import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListCotainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartListContainer from './components/CartListContainer/CartListContainer'
import Checkout from './components/Checkout/Checkout';

import CartProvider from './context/CartContext.js'
import { NotificationProvider } from './Notification/NotificationService'

function App() {

  return (
    <div className="App">
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>

            <Navbar />

            <Routes>
              <Route path='/' element={<ItemListContainer title={'Listado de productos:'} />} />
              <Route path='/category/:categoryId' element={<ItemListContainer title={'Listado por categoria:'} />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<CartListContainer />} />
              <Route path='/contacto' element={<h1>Contacto</h1>} />
              <Route path='/checkout' element={<Checkout />}/>
              <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            </Routes>

          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
