import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget.js'

const Navbar = ({children}) => {
    return (
        <nav>
            {children}
            <CartWidget/>
        </nav>
    );
}

export default Navbar;