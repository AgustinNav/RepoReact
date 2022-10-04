import './Counter.css'
import { useState } from 'react'

const Counter = () => {

    const [result, setResult] = useState(0)
    const [valor1, setValor1] = useState(0)
    const [valor2, setValor2] = useState(0)

    const sumar = () => {
        setResult(parseInt(valor1) + parseInt(valor2))
    }
    const restar = () => {
        setResult(parseInt(valor1) - parseInt(valor2))
    }

    return (
        <div>
            <h1>{valor1}</h1>
            <h1>{valor2}</h1>
            <h2>Resultado: {result}</h2>
            <input value={valor1} onChange={(e) => setValor1(e.target.value)} />
            <input value={valor2} onChange={(e) => setValor2(e.target.value)}/>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
        </div>
    )
}

export default Counter;