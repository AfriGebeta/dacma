import React, { useState, useRef, useEffect } from 'react';
import { Polygon,MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-draw';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet-draw/dist/leaflet.draw-src';

const mapStyle = {
 width: '100%',
 height: '800px',
};

const OpenStreetMap = () => {

 const [radius, setRadius] = useState(400);
 const [polygonCoords, setPolygonCoords] = useState([]);

 const CustomMapEvents = ({ handleClick }) => {
  useMapEvents({
    click: (e) => {
      handleClick(e);
    },
  });

  return null;
 };

 const handleClick = (e) => {
  const { lat, lng } = e.latlng;
 
  setPolygonCoords((prevCoords) => [...prevCoords, [lat, lng]]);
};




 return (
  <div style={mapStyle}>
    <MapContainer
      center={[9.01984,38.80175]}
      zoom={13}
      style={mapStyle}
    
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <CustomMapEvents handleClick={handleClick} />

      <Polygon positions={polygonCoords} color="blue" />
    </MapContainer>
  </div>
 );
};

export default OpenStreetMap;
