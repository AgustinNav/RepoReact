import { useEffect, useState } from "react"

const Effect = () => {

    const [title , setTitle] = useState('Primer titulo')
    
    useEffect(() => {
        console.log('Post renderizado')

        return () => {
            console.log('Antes de desmontarse')
        }

    }, [])

    useEffect(() => {

        console.log('Despues de cambiar el titulo')

    }, [title])

    console.log('Renderizando...')

    return(
        <div>
            <h1>Effect</h1>
            <h2>{title}</h2>
            <button onClick={() => setTitle('Titulo Cambiado')}> Cambiar titulo</button>
        </div>
    )
}

export default Effect 