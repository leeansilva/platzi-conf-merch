import React from 'react'
import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet'
import '../styles/Map/leaflet.css'
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from "react";

const Map = () => {
    const [state, setState] = useState({});
    
    useEffect(() => {
        const geolocation = navigator.geolocation;//acedemos a la api, mediante el objeto navigator.

        const posicion = (pos)=>{
            //console.log(pos) //pedimos que nos muestre posicion en conosole.
            setState({longitude :pos.coords.longitude,
                      latitude: pos.coords.latitude})
        }
        const err = (e)=> console.log(e);//si hay un error que lo muestre.

        const options = { //estas son opciones que tenemos como parametro a getCurrentPosition
            maximumAge: 0,
            timeout: 6000,
            enableHightAccuracy: true
        }
        geolocation.getCurrentPosition(posicion,err,options)//accedemos a getCurrent y le damos los parametros.
        
    }, [])

  if(state.latitude) {
    return(
        <div>
            <MapContainer center={[`${state.latitude}`,`${state.longitude}`]} zoom={13} scrollWheelZoom={false} className="map">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[`${state.latitude}`,`${state.longitude}`]} >
                <Popup>
                Tu estás aquí. <br />
                </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
  }
}

export default Map