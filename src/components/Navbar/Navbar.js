import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget.js'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='NavBar'>
            <NavLink to={'/'} className='Opcion-home'>
                <h1>Tienda X</h1>
            </NavLink>

            <div className='Categorias'>
                <NavLink to={'/category/Celular'} className={({ isActive }) => isActive ? 'OpcionActiva' : 'Opcion'}>Celulares</NavLink>
                <NavLink to={'/category/Reloj'} className={({ isActive }) => isActive ? 'OpcionActiva' : 'Opcion'}>Relojes</NavLink>
                <NavLink to={'/category/Notebook'} className={({ isActive }) => isActive ? 'OpcionActiva' : 'Opcion'}>Notebooks</NavLink>
                <NavLink to={'/contacto'} className={({ isActive }) => isActive ? 'OpcionActiva' : 'Opcion'}>Contactanos</NavLink>
            </div>

            <CartWidget/>
        </nav>
    );
}

export default Navbar;