import { useState } from 'react'
import './MainForm.css'

const MainForm = ({ setPrice, setType, price, type, setSubsList, subsList, edit, setEdit, spent, amount }) => {

  const [error, setError] = useState(false)
  const [errorMoney, setErrorMoney] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (price === '' || price <= 0 || type === '') {
        setError(true);
        setTimeout(() => {
            setError(false);
        }, 2000);
        return; // Detenemos la ejecución si hay errores básicos
    }

    let availableAmount = amount - spent;

    if (edit !== "") {
        const previousSub = subsList.find(item => item.id === edit);
        
        if (previousSub) {
            availableAmount += previousSub.price;
        }
    }

    if (availableAmount < Number(price)) {
        setErrorMoney(true);
        setTimeout(() => {
            setErrorMoney(false);
        }, 2000);
        return;
    }

    if (edit !== "") {
        setEdit("");
        const newSubs = subsList.map(item => {
            if (item.id === edit) {
                return { ...item, type, price };
            }
            return item;
        });
        setSubsList(newSubs);
    } else {
        const data = {
            type,
            price,
            id: Date.now()
        };
        setSubsList([...subsList, data]);
    }

    setType("");
    setPrice("");
};

return (
  <div className='add-subscription'>
    <h3>Agregar Suscripciones</h3>
    <form onSubmit={handleSubmit}>
      <label> Servicio </label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">-- Elegir --</option>
        <option value="netflix">Netflix</option>
        <option value="disneyPlus">Disney Plus</option>
        <option value="hboMax">HBO Max</option>
        <option value="starPlus">Star Plus</option>
        <option value="primeVideo">Prime Video</option>
        <option value="spotify">Spotify</option>
        <option value="appletv">Apple tv</option>
      </select>
      <label> Cantidad </label>
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='$20' className='input-number' min={0} />
      {
        edit ? <button type="submit">Guardar</button> : <button type="submit">Agregar</button>
      }

    </form>
    {
      error && <span className='error'>Campos Invalidos</span>
    }
    {
      errorMoney && <span className="error">No tienes presupuesto</span>
    }
  </div>
)
}

export default MainForm