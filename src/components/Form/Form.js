import './Form.css'

const Form = ({setName, setPhone, setMail}) => {
    return(
        <div className="form">
                <label>
                    <p style={{ display: 'inline' }}>Nombre: </p>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    <p style={{ display: 'inline' }}>Telefono: </p>
                    <input type="text" onChange={(e) => setPhone(e.target.value)} />
                </label>
                <label>
                    <p style={{ display: 'inline' }}>E-mail: </p>
                    <input type="text" onChange={(e) => setMail(e.target.value)} />
                </label>
            </div>
    )
}

export default Form