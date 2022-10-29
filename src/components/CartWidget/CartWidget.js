import './CartWidget.css';
import img from './assets/carrito.png'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.js';

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return(
        <div className='CartWidget'>
            <img src={img} alt='Carrito'/>
            <p>{totalQuantity}</p>
        </div>
    )
}

export default CartWidget