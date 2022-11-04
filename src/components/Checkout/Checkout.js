import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { NotificationContext } from "../../Notification/NotificationService"
import './Checkout.css'
import { useNavigate } from "react-router-dom"

import { createOrder } from '../../services/firestore/order';


import Form from "../Form/Form"

const Checkout = () => {

    const { cart, totalPrice, clearCart } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [mail, setMail] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const objOrder = {
        buyer: {
            name,
            phone,
            mail
        },
        items: cart,
        totalPrice
    }

    const newOrder = () => {

        createOrder(objOrder, cart)
            .then((orderId) => {
                setLoading(false)
                setNotification('success', `Orden generada! El id de su orden es ${orderId}`)
                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 1500)
            })
            .catch(error => {
                setNotification('error', error)
            })

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

            {/*Se me presentaron inconveneintes a la hora de unificar el boton de generar orden con el Form ya que no se como se utiliza el onClick en un intup submit*/}

            <Form setName={setName} setPhone={setPhone} setMail={setMail} newOrder={newOrder} />
            {
                cart.length !== 0
                    ? <button onClick={() => newOrder()}>Generar orden</button>
                    : <h1>Su carrito esta vacio, no hay nada que comprar</h1>
            }

        </div>
    )
}

export default Checkout