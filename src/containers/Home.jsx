import React from 'react'
import Map from '../components/Map'
import Products from '../components/Products'
import initialState from '../initialState'

import '../styles/Map/leaflet.css'


const Home = () => {

    
  return (
    <>
    
    <Products products={initialState.products}/>
    <Map></Map>
    </>
  )
}

export default Home