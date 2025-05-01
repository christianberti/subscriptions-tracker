import './CardItem.css'

const CardItem = ({ item, eliminarItem, editItem }) => {

  const urlImage = `./images/${item.type}.png`

  const handleDelete = (e, id) => {
    e.preventDefault()
    const answer = window.confirm(`¿Desea borrar ${item.type} de sus suscripciones?`)
    if(answer){
      eliminarItem(id)
    }
  }

  const handleEdit = (e, id) => {
    e.preventDefault()
    editItem(id)
  }

  return (
    <div key={item.id} className='single-item'>
      <img src={urlImage} alt={item.type} />
      <span>
        ${item.price}
      </span>
      <button className='delete' onClick={(e) => handleDelete(e, item.id)}>Borrar</button>
      <button className='edit' onClick={(e) => handleEdit(e, item.id)}>Editar</button>
    </div>
  )
}

export default CardItem