import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Map.css";

import { selectLayer } from "../../../redux/reducers/layerReducer";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

import MapboxGLLayer from "../../presentational/MapBoxGLLayer/MapBoxGLLayer";

import BikeIcon from "../../Utils/Icons/BikeIcon";

import CityBikeLayer from "../../Utils/Layers/CityBikLayer/CityBikLayer.tsx";

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
    <div>
      <Marker position={position} icon={BikeIcon}>
        <Popup>You are here</Popup>
      </Marker>
    </div>
  );
}

function Map() {
  const layer = useSelector(selectLayer);
  let coords;
  if (localStorage.getItem("coords")) {
    coords = JSON.parse(localStorage.getItem("coords") || "null");
  } else {
    coords = { lat: 51.505, lng: -0.09 };
  }

  if (layer === "light") {
    return (
      <MapContainer center={coords} zoom={13} scrollWheelZoom={true} id="mymap">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
        <CityBikeLayer />
        {/**window.performance.now is used for increased precision and reducing the likelihood of a repeated id */}
      </MapContainer>
    );
  }
  if (layer === "dark") {
    return <MapboxGLLayer />;
  } else {
    return <div>ERROR!</div>;
  }
}

export default Map;
