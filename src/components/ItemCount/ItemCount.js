import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({onAdd, stock}) => {

    const [count, setResult] = useState(1)

    const sumar = () => {
        if (count < stock) {
            setResult(count + 1)
        }
    }
    const restar = () => {
        if (count > 1) {
            setResult(count - 1)
        }
    }

    return (
        <div>
            <div>
                <button onClick={restar}>-</button>
                {count}
                <button onClick={sumar}>+</button>
            </div>
            <div>
                <button onClick={stock != 0 ? onAdd : null}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;