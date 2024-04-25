import React from 'react';
import {MapContainer,Marker,Popup,TileLayer} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'


 const LeafletMap = () => {


  return (
    <div className='sm:w-full'>
         <MapContainer center={[40.3784333,49.8472423]} zoom={16}>
   <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; '
      />
<Marker position={[40.3784333,49.8472423]} 
 icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} 
>
        <Popup>
         Fidan Hacıyeva 
         Vokal Musiqi Məktəbi
        </Popup>
      </Marker>
   </MapContainer>
    </div>

  )
}


export default LeafletMap;