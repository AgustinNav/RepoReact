import './CartItem.css'
import { useContext } from 'react';
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, name, price, quantity}) => {

    const { removeItem } = useContext(CartContext)

    return (
        <div>
            <div className="CartItem">
                <h1>{name}</h1>
                <h2>${price}</h2>
                <h2>${price*quantity}</h2>
                <button onClick={() => {removeItem(id)}}>Borrar elemento</button>
            </div>
        </div>
    )
}

export default CartItem