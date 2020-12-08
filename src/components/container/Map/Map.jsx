/* eslint-disable no-undef */
import React, { useState } from "react";
import "./Map.css";
/** 
import { TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";


//import MapboxGlLayer from "@mongodb-js/react-mapbox-gl-leaflet";

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      localStorage.setItem("coords", JSON.stringify(e.latlng));
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
*/
function Map() {
  /** let coords;
  if (localStorage.getItem("coords")) {
    coords = JSON.parse(localStorage.getItem("coords") || "null");
  } else {
    coords = { lat: 51.505, lng: -0.09 };
  }
  */
  return (
    <>
      <div id="map"></div>
    </>
  );
}

export default Map;
/** 
 *  <MapContainer center={coords} zoom={13} scrollWheelZoom={true} id="mymap">
<TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
*/