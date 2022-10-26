import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import FinalizarCompra from '../FinzalizarCompra/FinzalizarCompra'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext.js'

const ItemDetail = ({ id, name, img, description, price, stock}) => {
    const [count, setCount] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleonAdd = (quantity) => {
        setCount(quantity)
        const productToAdd = {
            id, name, price, quantity
        }
        addItem(productToAdd)
    }

    return (
        <div>
            <div className="cardDetail">
                <img src={img} alt={name} style={{ width: 200 }} />
                <h1>{name}</h1>
                <h3>Precio: <strong>{price}</strong></h3>
                <p>{description}</p>
                <p>Stock: {stock}</p>
                {count === 0 ? <ItemCount onAdd={handleonAdd} stock={stock}/> : <FinalizarCompra/>}
            </div>
        </div>
    )
}

export default ItemDetail