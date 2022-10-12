import './Item.css'

const Item = ({ img, name, id}) => {

    

    return (
        <div>
            <div className="card">
                <img src={img} alt={name} style={{ width: 100 }} />
                <h1>{name}</h1>
                <a href={`/detail/${id}`}>Ver detalle</a>
            </div>
        </div>
    )
}

export default Item