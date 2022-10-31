import CartItem from "../CartItem/CartItem"
import { CartContext } from '../../context/CartContext.js';
import { useContext } from "react"
import { Link } from "react-router-dom";

const CartList = () => {
    //Listar
    //mpa trasnformando 

    const { cart, removeItem, totalPrice } = useContext(CartContext)

    if(totalPrice == 0)
    {
        return(
            <div>
                <h2>Su carrito esta vacio</h2>
                <Link to='/'>Mira nuestros productos aqui</Link>
            </div>
        )
    }

    return(
        <div className='CartList'>
            {cart.map(prod => <CartItem key={prod.id} {...prod} removeItem={removeItem}/>)}
            <h2>Total: ${totalPrice}</h2>
        </div>
    )
}

// export default memo(ItemList)
export default CartList