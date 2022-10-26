import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ img, name, id}) => {

    return (
        <div>
            <div className="card">
                <img src={img} alt={name} style={{ width: 100 }} />
                <h1>{name}</h1>
                <Link to={`/detail/${id}`}>Ver detalle</Link>
            </div>
        </div>
    )
}

export default Item