import { useState, createContext } from 'react';

export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    console.log('cart:', cart)

    const addItem = (productToAdd) => {

        if (!isInCart(productToAdd)) {
            setCart([...cart, productToAdd])
            setTotalQuantity(totalQuantity + productToAdd.quantity)
            setTotalPrice(totalPrice + (productToAdd.price * productToAdd.quantity))
        } else {
            console.log("Ya se encuentra en el carrito. Para cambiar la cantidad, elimine el producto y vuelva a agregarlo")
        }
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