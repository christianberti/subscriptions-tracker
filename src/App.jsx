import './App.css'
import Header from './components/Header'
import FormAddMoney from './components/FormAddMoney'
import { useState } from 'react'
import MainControl from './components/MainControl'

function App() {

  const [amount, setAmount] = useState(0)
  const [isValid, setIsValid] = useState(false)

  return (
    <div className='App'>
      <Header/>
      {
        isValid 
          ? <MainControl amount={amount} />
          : <FormAddMoney setAmount={setAmount} setIsValid={setIsValid} />
      }
      
    </div>
  )
}

export default App
