import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getProducts } from '../../services/firestore/products';

const ItemListContainer = ({ title }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        getProducts(categoryId)
            .then(products => {
                setProducts(products)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>{title}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer