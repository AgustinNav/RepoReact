import './CartWidget.css';

const logo = "./assets/carrito.png"

const CartWidget = () => {
    return(
        <button><img src={logo} alt='Carrito' /></button>
    )
}

export default CartWidget