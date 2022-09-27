import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
//import AvatarJsx from './components/AvatarJsx/AvatarJsx';
import Navbar from './components/Navbar/Navbar';
import Boton from './components/Boton/Boton';
import ItemListContainer from './components/ItemListContainer/ItemListCotainer';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar>
          <Boton mrgL={50} titulo={'Tienda X'} color={'white'} bkcolor={'black'} />
          <Boton mrgL={"20vw"} titulo={'Producto 1'} color={'black'} bkcolor={'white'} />
          <Boton mrgL={50} titulo={'Producto 2'} color={'black'} bkcolor={'white'} />
          <Boton mrgL={50} titulo={'Producto 3'} color={'black'} bkcolor={'white'} />
          <Boton mrgL={50} titulo={'Producto 4'} color={'black'} bkcolor={'white'} />
        </Navbar>

        <ItemListContainer titulo={'Bienvenidos a Tienda X!'}/>
        
      </ChakraProvider>


    </div>
  );
}

export default App;
