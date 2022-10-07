import ItemCount from '../ItemCount/ItemCount'
import './Item.css'

const Item = ({ img, name, category, price, stock, onAdd}) => {

    

    return (
        <div>
            <div className="card">
                <img src={img} alt={name} style={{ width: 100 }} />
                <h1>{name}</h1>
                <h3>{category}</h3>
                <p>{price}</p>
                <p>Unidades disponibles: <strong>{stock}</strong></p>
            </div>
            <ItemCount onAdd={onAdd} stock={stock}/>
        </div>

    )
}

export default Item