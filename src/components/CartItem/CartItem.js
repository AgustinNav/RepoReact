import './CartItem.css'
import { useContext } from 'react';
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, name, price, quantity, removeItem }) => {

    return (
        <div>
            <div className="CartItem">
                <h1>{name}</h1>
                <h2>Precio: ${price}</h2>
                <div>
                    <h2>Cantidad: {quantity}</h2>
                </div>
                <h2>Subtotal: ${price * quantity}</h2>
                <button onClick={() => { removeItem(id) }}>Borrar elemento</button>
            </div>
        </div>
    )
}

export default CartItem