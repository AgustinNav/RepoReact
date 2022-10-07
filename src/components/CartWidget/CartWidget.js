import './CartWidget.css';
import img from './assets/carrito.png'

const CartWidget = () => {
    return(
        <button className='CartWidget'><img src={img} alt='Carrito' /></button>
    )
}

export default CartWidget