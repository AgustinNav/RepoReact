import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({ products, onAdd }) => {
    //Listar
    //mpa trasnformando 

    return(
        <div className='ItemList'>
            {products.map(prod => <Item key={prod.id} {...prod} onAdd={onAdd}/>)}
        </div>
    )
}

export default ItemList