import React from 'react'
import '../styles/components/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="Header">
          <h1 className="Header-title">
            <Link to="/">PlatziConf Merch </Link>
          </h1>
          <div className="Header-checkout">
            <Link to="/checkout">
            <i className="fas fa-basket-shopping"></i>
            </Link>
          </div>
        </div>
      );
}

export default Header