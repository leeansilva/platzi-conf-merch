import React from 'react';
import Product from './Product';
import '../styles/components/Products.css';
import { UseDataContext } from '../context/AppContext'

const Products = () => {
  const context = UseDataContext()
  const { products }  = context.state
  const { addToCart } = context



  //return implicito medio rari, pero es para no pasar la funcion dentro del onclick del boton.
  const handleAddToCart = product => ()=> {
    addToCart(product)
  }

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
        ))}
      </div>
    </div>
  );
}

export default Products;