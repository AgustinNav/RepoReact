import './Boton.css';

const Boton = ({ titulo, color }) => {
    return (
        <button className='button' style={{ backgroundColor: color }}>{titulo}</button>
    );
}

export default Boton