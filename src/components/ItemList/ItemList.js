import Item from "../Item/Item"
import './ItemList.css'
import { memo } from "react" // Evita re-renderizados

const ItemList = ({ products, onAdd }) => {
    //Listar
    //mpa trasnformando 

    return(
        <div className='ItemList'>
            {products.map(prod => <Item key={prod.id} {...prod} onAdd={onAdd}/>)}
        </div>
    )
}

// export default memo(ItemList)
export default ItemList