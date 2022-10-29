import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartList from "../CartList/CartList";

const CartListContainer = () => {

    const { cart, totalPrice, clearCart } = useContext(CartContext)

    return(
        <div className="CartListContainer">
            <button onClick={clearCart()}>Vaciar carrito</button>
            <h1>Tu carrito:</h1>
            <CartList cart={cart}/>
            <h2>Precio total: {totalPrice}</h2>
        </div>
    )
}

export default CartListContainer