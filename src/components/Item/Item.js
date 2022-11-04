import './Item.css'
import { useNavigate } from 'react-router-dom'

const Item = ({ img, name, id}) => {

    const navigate = useNavigate()

    return (
        <div>
            <div className="card">
                <img src={img} alt={name} style={{ width: 100 }} />
                <h1>{name}</h1>
                <button onClick={() => {navigate(`/detail/${id}`)}}>Ver detalles</button>
            </div>
        </div>
    )
}

export default Item