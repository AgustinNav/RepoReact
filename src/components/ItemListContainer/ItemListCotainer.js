import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ titulo }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const handleonAdd = () => {
        console.log("Se añadio un item al carrito")
    }

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
            <ItemList products={products} onAdd={handleonAdd}/>
        </div>
    )
}

export default ItemListContainer