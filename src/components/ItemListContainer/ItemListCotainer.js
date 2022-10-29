import React, { useEffect, useState, useContext } from 'react';
import './ItemListContainer.css';
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { NotificacionContext } from '../../Notificacion/NotificacionService'

const ItemListContainer = ({ titulo }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    const { setNotificacion } = useContext(NotificacionContext)

    useEffect(() => {
        setLoading(true)

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            setNotificacion('error', error)
        }).finally(() => {
            setLoading(false)
        })

    }, [categoryId])

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>{titulo}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer