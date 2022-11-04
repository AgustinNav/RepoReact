import { useState, createContext } from "react";

export const NotificationContext = createContext()

const Notificationes = ({ mensaje, severidad }) => {
    const NotificationesStyles = {
        position: 'absolute',
        top: 100,
        right: 10,
        width: 'auto',
        height: 'auto',
        backgroundColor: severidad === 'success' ? 'green' : 'red',
        color: 'white',
        padding: '10px 20px 10px 20px'
    }

    if (mensaje === '') return

    return (
        <div style={NotificationesStyles}>
            {mensaje}
        </div>
    )
}

export const NotificationProvider = ({ children }) => {
    const [mensaje, setMensaje] = useState('')
    const [severidad, setSeveridad] = useState('success')

    const setNotification = (severidad, mensaje) => {
        setMensaje(mensaje)
        setSeveridad(severidad)

        setTimeout(() => {
            setMensaje('')
        }, 4000)
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notificationes severidad={severidad} mensaje={mensaje} />
            {children}
        </NotificationContext.Provider>
    )
}

