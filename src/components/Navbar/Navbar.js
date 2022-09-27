import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget.js'

const Navbar = ({children}) => {
    return (
        <nav>
            {children}
        </nav>
    );
}

export default Navbar;