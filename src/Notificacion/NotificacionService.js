import { useState, createContext } from "react";

export const NotificacionContext = createContext()

const Notificaciones = ({ mensaje, severidad }) => {
    const notificacionesStyles = {
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
        <div style={notificacionesStyles}>
            {mensaje}
        </div>
    )
}

export const NotificacionProvider = ({ children }) => {
    const [mensaje, setMensaje] = useState('')
    const [severidad, setSeveridad] = useState('success')

    const setNotificacion = (severidad, mensaje) => {
        setMensaje(mensaje)
        setSeveridad(severidad)

        setTimeout(() => {
            setMensaje('')
        }, 4000)
    }

    return (
        <NotificacionContext.Provider value={{ setNotificacion }}>
            <Notificaciones severidad={severidad} mensaje={mensaje} />
            {children}
        </NotificacionContext.Provider>
    )
}

