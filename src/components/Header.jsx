import React from 'react'
import '../styles/components/Header.css'
import { Link } from 'react-router-dom'
import { UseDataContext } from '../context/AppContext'

const Header = () => {
  const context = UseDataContext()
  const { cart }  = context.state
 

 
    return (
        <div className="Header">
          <h1 className="Header-title">
            <Link to="/">PlatziConf Merch </Link>
          </h1>
          <div className="Header-checkout">
            <Link to="/checkout">
            <i className="fas fa-basket-shopping"></i>
            </Link>
            {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
          </div>
        </div>
      );
}

export default Header