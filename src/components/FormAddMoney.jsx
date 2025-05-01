import { useState } from 'react'
import './FormAddMoney.css'

const FormAddMoney = ( { setAmount, setIsValid } ) => {

  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if(input === ''){
      setError(true)
      setTimeout(() => {
        setError(false)
      }, "2000")
    } else {
      setAmount(input)
      setIsValid(true)
    }

    setInput('')
  }

  return (
    <div className='form-container'>
      <h3>Presupuesto inicial:</h3>
      <form onSubmit={handleSubmit} className='form'>
        <input 
          className='input-form' 
          type="number" 
          name="costo" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder='$300' 
          min={0} />
        <button 
          className='input-button' 
          type="submit"> Agregar </button>
        
        {
        error && <span className='error'>Debe ingresar un presupuesto</span>
        }
      </form>

      
    </div>
  )
}

export default FormAddMoney