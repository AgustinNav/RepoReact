import React, { useEffect, useState } from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()

    const navigate = useNavigate()

    useEffect(() => {

        const docRef = doc(db, 'productos', productId)

        getDoc(docRef).then(response => {
            console.log(response)

            const data = response.data()

            const productoAdaptado = {id: response.id, ...data}
            setProduct(productoAdaptado)
            setLoading(false)
        })

    }, [productId])

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className='ItemDetailContainer'>
            <h1>Detalles: </h1>
            <ItemDetail {...product} />
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}

export default ItemDetailContainer