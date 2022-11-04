import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import FinalizarCompra from '../FinzalizarCompra/FinzalizarCompra'
import { CartContext } from '../../context/CartContext.js'
import { NotificationContext } from '../../Notification/NotificationService'

const ItemDetail = ({ id, name, img, description, price, stock }) => {

    const { addItem, isInCart } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const handleonAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }

        addItem(productToAdd)
        setNotification('success', `Se añadio correctamente ${quantity} ${name}`)
    }

    return (
        <div>
            <div className="cardDetail">
                <img src={img} alt={name} style={{ width: 200 }} />
                <h1>{name}</h1>
                <h3>Precio: <strong>{price}</strong></h3>
                <p>{description}</p>
                <p>Stock: {stock}</p>
                {
                    stock === 0
                        ? <h2>No hay stock :c</h2>
                        : !isInCart(id)
                            ? <ItemCount onAdd={handleonAdd} stock={stock} />
                            : <FinalizarCompra />
                }
            </div>
        </div>
    )
}

export default ItemDetail