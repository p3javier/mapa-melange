import React, { useState } from "react";
import { Marker, Popup, useMapEvent, MapContainer } from "react-leaflet";

import BikeIcon from "../../Icons/BikeIcon";

import networksFinder from "./networkFinder";
/** 
async function losNetworks(coords: number[], aper: number[]) {
  return await networksFinder(coords, aper);
}
*/
function StationMarker() {
  //const [center, setCenter] = useState({ coords: [0, 0], loading: true });
  const map = useMapEvent("click", () => {});
  const centerJSON = map.getCenter();
  const centerCoords = [centerJSON.lat, centerJSON.lng];
  //setCenter({ coords: centerCoords, loading: false });
  //if (!center.loading) {}

  networksFinder(centerCoords, [0.1, 0.2]).then((areaNetworks) =>
    console.log("THIS IS THE RESPONSE", areaNetworks)
  );

  return <div></div>;
}

class CityBikLayerDetail extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      networks: [],
      loading: true,
    };
  }

  async componentDidMount() {}
  render() {
    return (
      <div>
        <MapContainer center={{ lat: 51.505, lng: -0.09 }} zoom={13}>
          <StationMarker />
        </MapContainer>
      </div>
    );
  }
}

export default CityBikLayerDetail;
