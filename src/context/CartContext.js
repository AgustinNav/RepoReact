import { useState, createContext, useContext, useEffect } from 'react';
import { NotificacionContext } from '../Notificacion/NotificacionService';

export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const { setNotificacion } = useContext(NotificacionContext)

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd)) {
            setCart([...cart, productToAdd])
        } else {
            setNotificacion('error',"Ya se encuentra en el carrito. Para cambiar la cantidad, elimine el producto y vuelva a agregarlo")
        }
    }

    useEffect(() => {
        updateTotalQuantity()
        updateTotalPrice()
    },[cart] )

    const updateTotalQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count += prod.quantity
        })

        setTotalQuantity(count)
    }

    const updateTotalPrice = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })
        
        setTotalPrice(total)
    }

    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutProduct)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ clearCart, cart, addItem, removeItem, totalQuantity, isInCart, totalPrice }}>
            { children }
        </CartContext.Provider >
    )

}

export default CartProvider;