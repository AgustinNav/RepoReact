import CartItem from "../CartItem/CartItem"

const CartList = ({cart}) => {
    //Listar
    //mpa trasnformando 

    return(
        <div className='CartList'>
            {cart.map(prod => <CartItem key={prod.id} {...prod}/>)}
        </div>
    )
}

// export default memo(ItemList)
export default CartList