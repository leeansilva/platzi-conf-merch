import React,{ useRef } from 'react';
import '../styles/components/Information.css';
import { Link, useNavigate } from 'react-router-dom';
import { UseDataContext } from '../context/AppContext';

const Information = () => {
  const context = UseDataContext()
  const {state, addToBuyer } = context
  const navigate = useNavigate()

  //asi se usa useRef
  const form = useRef(null)

  const { cart } = state

  const handleSubmit = ( ) =>{
    const formData = new FormData(form.current)
    const buyer = {
      'name':formData.get('name'),
      'email':formData.get('email'),
      'adress':formData.get('addres'),
      'apto':formData.get('apto'),
      'city':formData.get('city'),
      'country':formData.get('country'),
      'state':formData.get('state'),
      'cp':formData.get('cp'),
      'phone':formData.get('phone'),
    }
    addToBuyer(buyer);
    navigate('/checkout/payment');

  }
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="addres" />
            <input type="text" placeholder="apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back"><Link to="/checkout">Regresar</Link></div>
          <div className="Information-next">
              <button type='button' onClick={handleSubmit}>Pagar</button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item)=>(
            <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;