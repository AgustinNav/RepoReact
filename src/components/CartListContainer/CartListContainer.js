import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartList from "../CartList/CartList";
import './CartListContainer.css'

const CartListContainer = () => {

    return(
        <div className="CartListContainer">
            <h1>Tu carrito:</h1>
            <CartList />
        </div>
    )
}

export default CartListContainer