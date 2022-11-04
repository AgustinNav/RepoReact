import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase"

export const createOrder = (objOrder, cart) => {
    return new Promise(async (resolve, reject) => {

        const batch = writeBatch(db)

        const outOfStock = []

        const ids = cart.map(prod => prod.id)
        const productsRef = collection(db, 'products')

        const productsOnDb = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

        const { docs } = productsOnDb

        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.stock

            const productOnCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productOnCart?.quantity

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

            resolve(orderAdded.id)

        } else {
            reject('Hay productos sin stock en su compra!')
        }

    })
}