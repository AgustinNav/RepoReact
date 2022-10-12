import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ titulo }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>{titulo}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer