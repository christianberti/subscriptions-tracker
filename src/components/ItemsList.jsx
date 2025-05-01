import CardItem from './CardItem'
import './ItemList.css'

const ItemsList = ({ subsList, eliminarItem, editItem}) => {

  return (
    <>
      {
        subsList.length > 0 &&
        <div className='item-list'>
          <h2>Mis suscripciones</h2>
          {subsList.map((item) => ( 
            <CardItem key={item.id} item={item} eliminarItem={eliminarItem} editItem={editItem}/>
          ))
          }
        </div>

      }
    </>
  )
}

export default ItemsList