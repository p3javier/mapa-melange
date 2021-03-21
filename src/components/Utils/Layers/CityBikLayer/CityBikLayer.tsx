import React from "react";
import { Marker, Popup } from "react-leaflet";

import BikeIcon from "../../../../assets/Icons/BikeIcon";

class CityBikLayer extends React.Component<
  {},
  {
    networks: {
      company: string[];
      href: string;
      id: string;
      location: {
        city: string;
        country: string;
        latitude: number;
        longitude: number;
      };
      name: string;
    }[];
    loading: boolean;
  }
> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      networks: [],
      loading: true,
    };
  }
  async componentDidMount() {
    const url = "http://api.citybik.es/v2/networks";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ networks: data.networks, loading: false });
  }
  render() {
    const loading = this.state.loading;
    const networksStations = this.state.networks;

    if (!loading) {
      return (
        <div id={window.performance.now().toString()}>
          {networksStations.map((network) => {
            const location = {
              lat: network.location.latitude,
              lng: network.location.longitude,
            };
            return (
              <Marker position={location} icon={BikeIcon}>
                <Popup>{JSON.stringify(network)}</Popup>
              </Marker>
            );
          })}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default CityBikLayer;
