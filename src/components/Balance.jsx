import { useEffect, useState } from 'react'
import './Balance.css'

const Balance = ( {amount, subsList, spent, setSpent} ) => {

  const updateBalance = () => {
    const spent = subsList.reduce((total, item) => Number(item.price) + total, 0);
    setSpent(spent);
}

  useEffect(() => {
    updateBalance()
  }, [subsList])

  return (
    <div className='balance'>

      <p>Presupuesto: ${amount}</p>
      <p>Gastado: ${spent}</p>
      <p>Disponible: ${amount - spent}</p>

    </div>
  )
}

export default Balance