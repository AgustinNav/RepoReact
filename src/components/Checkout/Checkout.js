import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { NotificacionContext } from "../../Notificacion/NotificacionService"
import { addDoc, collection, getDocs, query, where, documentId, docs, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase"
import './Checkout.css'
import { useNavigate } from "react-router-dom"

import Form from "../Form/Form"

const Checkout = () => {

    const { cart, totalPrice, clearCart } = useContext(CartContext)
    const { setNotificacion } = useContext(NotificacionContext)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [mail, setMail] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const createOrder = async () => {

        setLoading(true)

        try {

            const objOrder = {
                buyer: {
                    name,
                    phone,
                    mail
                },
                items: cart,
                totalPrice
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)
            const productosRef = collection(db, 'productos')

            const productosAddedFromFirestore = await getDocs(query(productosRef, where(documentId(), 'in', ids)))

            const { docs } = productosAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productoAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productoAddedToCart?.quantity

                if (stockDb >= prodQuantity) {

                    batch.update(doc.ref, { stock: stockDb - prodQuantity })

                } else {

                    outOfStock.push({ id: doc.id, ...dataDoc })

                }
            })

            if (outOfStock.length === 0) {

                await batch.commit()

                const ordersRef = collection(db, 'orders')

                const orderAdded = await addDoc(ordersRef, objOrder)

                setLoading(false)
                setNotificacion('success', `Orden generada! El id de su orden es ${orderAdded.id}`)
                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 1500)

            } else {
                setNotificacion('error', 'Hay productos sin stock en su compra!')
            }

        } catch (error) {
            setNotificacion('error', error)
        }

    }

    if (loading) {
        return (
            <div>
                <h1>Procesando orden . . .</h1>
                <h2>Por favor espere.</h2>
            </div>
        )
    }

    return (
        <div className="Checkout">
            <h1>Formulario de compra</h1>

            <Form setName={setName} setPhone={setPhone} setMail={setMail}/>

            {cart.length != 0 ? <button onClick={() => createOrder()}>Generar orden</button> : <h1>Su carrito esta vacio, no hay nada que comprar</h1>}

        </div>
    )
}

export default Checkout