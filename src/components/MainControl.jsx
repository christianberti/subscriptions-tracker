import './MainControl.css'
import Balance from './Balance'
import MainForm from './MainForm'
import { use, useState } from 'react'
import ItemsList from './ItemsList'

const MainControl = ({ amount }) => {

  const [subsList, setSubsList] = useState([])

  const [type, setType] = useState('')
  const [price, setPrice] = useState('')
  const [edit, setEdit] = useState('')
  const [spent, setSpent] = useState(0)

  const eliminarItem = (id) => {
    const filtrar = subsList.filter((item) => id !== item.id)
    setSubsList(filtrar)
  }

  const editItem = (id) => {
    setEdit(id)
    subsList.map((item) => {
      if(item.id === id) {
        setType(item.type)
        setPrice(item.price)
      }
    })
  }

  return (
    <>
      <div className='main-control'>
        <Balance 
          amount={amount} 
          subsList={subsList} 
          spent={spent} 
          setSpent={setSpent} />
        <MainForm
          setPrice={setPrice}
          setType={setType}
          price={price}
          type={type}
          subsList={subsList}
          setSubsList={setSubsList}
          edit={edit}
          setEdit={setEdit}
          spent={spent}
          amount={amount} />
      </div>
      {subsList && <ItemsList subsList={subsList} eliminarItem={eliminarItem} editItem={editItem}/>}
    </>
  )
}

export default MainControl