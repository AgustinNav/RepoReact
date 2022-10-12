import React, { useEffect, useState } from 'react';
import './ItemDetailContainer.css';
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({ }) => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()

    const handleonAdd = () => {
        console.log("Se añadio un item al carrito")
    }

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className='ItemDetailContainer'>
            <h1>Detalles: </h1>
            <ItemDetail product={product} onAdd={handleonAdd}/>
        </div>
    )
}

export default ItemDetailContainer