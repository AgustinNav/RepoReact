import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({ onAdd, stock }) => {

    const [quantity, setQuantity] = useState(1)

    const sumar = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const restar = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className='ItemCount'>
            <div>
                <button className='button1' onClick={restar}>-</button>
                <input onChange={(e) => {
                    if (e.target.value <= stock)
                    {
                        setQuantity(parseInt(e.target.value))
                    } 
                }
                } value={quantity} />
                <button className='button1' onClick={sumar}>+</button>
            </div>
            <div>
                <button onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;