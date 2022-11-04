import './Form.css'

const Form = ({ setName, setPhone, setMail }) => {
    return (
        <div className="form">

            <h1>Formulario de compra</h1>

            <label>
                <p style={{ display: 'inline' }}>Nombre: </p>
                <input type="text" onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
                <p style={{ display: 'inline' }}>Telefono: </p>
                <input type="tel" onChange={(e) => setPhone(e.target.value)} required />
            </label>
            <label>
                <p style={{ display: 'inline' }}>E-mail: </p>
                <input type="email" onChange={(e) => setMail(e.target.value)} required />
            </label>

        </div>
    )
}

export default Form