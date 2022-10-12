import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { NavLink } from 'react-router-dom'

const ItemDetail = ({product, onAdd}) => {

    return (
        <div>
            <div className="cardDetail">
                <img src={product.img} alt={product.name} style={{ width: 200 }} />
                <h1>{product.name}</h1>
                <h3>Precio: <strong>{product.price}</strong></h3>
                <p>{product.description}</p>
                <ItemCount stock={product.stock} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemDetail