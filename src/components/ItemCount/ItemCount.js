import './ItemCount.css'
import { useState, useEffect } from 'react'

const ItemCount = ({onAdd}) => {

    const [count, setResult] = useState(1)
    const [stock, setStock] = useState(5)

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
                <p>    {count}    </p>
                <button onClick={sumar}>+</button>
            </div>
            <div>
                <button onClick={stock!=0 ? onAdd : null}>Agregar al carrito</button>
            </div>
            <p>Stock = </p><input value={stock} onChange={(e) => setStock(e.target.value)} />
        </div>
    )
}

export default ItemCount;