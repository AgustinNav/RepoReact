import React, { useEffect, useState } from 'react';
import './ItemDetailContainer.css';
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()

    useEffect(() => {
        getProductById(productId).then(product => {
            setProduct(product)
        }).finally(() => {
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
        </div>
    )
}

export default ItemDetailContainer