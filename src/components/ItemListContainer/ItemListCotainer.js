import React, { useEffect, useState, useContext } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { NotificacionContext } from '../../Notificacion/NotificacionService'
import { getDocs, collection, query, where} from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemListContainer = ({ titulo }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    const { setNotificacion } = useContext(NotificacionContext)

    useEffect(() => {
        setLoading(true)

        const collectionRef =  categoryId 
        ? query(collection(db, 'productos'), where('category', '==', categoryId )) 
        : collection(db, 'productos')

        getDocs(collectionRef).then(response => {
            console.log(response)
            const productosAdaptados = response.docs.map(doc => {
                const data = doc.data()
                console.log(data)

                return { id: doc.id, ...data}
            })

            console.log(productosAdaptados)
            setProducts(productosAdaptados)

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