import './Boton.css';

const Boton = ({ titulo, color , bkcolor, mrgL, href}) => {
    return (
        <button className='button' tyle={{ backgroundColor: bkcolor, color: color, marginLeft: mrgL}}><a href={href}>{titulo}</a></button>
    );
}

export default Boton