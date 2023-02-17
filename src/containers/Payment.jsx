import React from 'react';
import '../styles/components/Payment.css';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { UseDataContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Payments =()=>{
  const navigate = useNavigate()
  const context = UseDataContext()
  const {state, addNewOrder } = context
  const { cart, buyer } = state
  
  const paypalOtions = {
    clientId: 'ASpYXgSI1jkX92vdJQPOQnsWTCyh2qk7EdtsTWRegWjcnVRX2Dqhtnv68NSuqPSRKP-JphZkKj5LnXGZ',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handleSumTotal = ()=>{
    const reducer = (acumulator,currentValue) => acumulator + currentValue.price
    const sum = cart.reduce(reducer,0)
    return sum
  }

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder);
      navigate('/checkout/success');
    }
  }


  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>
                $
                {' '}
                {item.price}
              </span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalScriptProvider options={{ "client-id": "test" }} >
              <PayPalButtons 
              paypalOptions={paypalOtions}
              buttonStyles={buttonStyles}
              amount={handleSumTotal()}
              onClick={() => console.log('Start Payment')}
              onApprove={data => handlePaymentSuccess(data)}
              onError={error => console.log(error)}
              onCancel={data => console.log(data)}  
              style={{ layout: "horizontal" }} />
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
  );
};

export default Payments;