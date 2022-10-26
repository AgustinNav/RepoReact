import { Link } from "react-router-dom";
import './FinalizarCompra.css'

const FinzalizarCompra = () => {
    return (
        <div className="FinalizarCompra">
            <Link className="Link" to='/cart'>Ir al carrito</Link>
            <Link className="Link" to='/'>Seguir comprando</Link>
        </div>
    );
}

export default FinzalizarCompra