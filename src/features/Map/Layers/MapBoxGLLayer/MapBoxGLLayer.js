import React from "react";

import * as L from "leaflet";

import "mapbox-gl-leaflet";

class MapBoxGLLayer extends React.Component {
  componentDidMount() {
    var map = L.map("map").setView([51.10775, 17.02386], 13);
    // eslint-disable-next-line no-unused-vars
    var gl = L.mapboxGL({
      attribution:
        '\u003ca href="https://www.maptiler.com/copyright/" target="_blank"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href="https://www.openstreetmap.org/copyright" target="_blank"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
      style:
        "https://api.maptiler.com/maps/dd449ba3-984a-40cb-919e-b79dea0f8afb/style.json?key=xbTwXYC2n1rQa1564G4k",
    }).addTo(map);
  }
  render() {
    return <div id="map"></div>;
  }
}

export default MapBoxGLLayer;
