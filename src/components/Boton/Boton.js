import './Boton.css';

const Boton = ({ titulo, color , bkcolor, mrgL}) => {
    return (
        <button className='button' style={{ backgroundColor: bkcolor, color: color, marginLeft: mrgL}}>{titulo}</button>
    );
}

export default Boton