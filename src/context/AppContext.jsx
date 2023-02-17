import React, { createContext, useState } from "react";
import initialState from "../initialState";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  
  const addToCart = payload => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  }

  const removeFromCart = payload => {
    setState({
      ...state,
      cart: state.cart.filter(items => items.id !== payload.id),
    });
  };

  const addToBuyer = payload => {
    setState({
      ...state,
      buyer: [...state.buyer, payload]
    })
  }

  const addNewOrder = payload => {
    setState({
      ...state,
      orders: [...state.orders, payload]
    })
  }



  const context = { addToCart, removeFromCart, state, addToBuyer, addNewOrder}


  return (
    <AppContext.Provider value={context}>{children}</AppContext.Provider>
  );
};

function UseDataContext() {
  const context = React.useContext(AppContext);
  return context;
}

export { AppProvider, UseDataContext }
