import './ItemDetailContainer.css';
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams, useNavigate } from 'react-router-dom';
import { getProduct } from '../../services/firestore/products';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {

        getProduct(productId)
            .then(product => {
                setProduct(product)
            })
            .catch(error => {
                console.log(error)
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
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}

export default ItemDetailContainer