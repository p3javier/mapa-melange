import React, { useEffect, useState } from "react";
import { Marker, Popup } from "react-leaflet";

import BikeIcon from "../../Icons/BikeIcon";

import networksFinder from "./networkFinder";

import stations from "./stationsFinder";

interface INetwork {
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
}

interface IStation {
  empty_slots: number;
  extra: {
    installDate: string;
    installed: boolean;
    locked: boolean;
    name: string;
    removalDate: string;
    temperature: boolean;
    terminalName: string;
    uid: number;
  };
  free_bikes: number;
  id: string;
  latitude: number;
  longitude: number;
  name: string;
  timestamp: string;
}

//@ts-ignore
export default function CityBikLayerDetail(centerJSON) {
  const [networks, setNetworks] = useState<INetwork[]>([]);
  //const map = useMapEvent("moveend", () => {}); //change "click" to "moveend"
  const [stationsState, setStationsState] = useState<IStation[]>([]);

  useEffect(() => {
    const centerCoords = [centerJSON.lat, centerJSON.lng];
    //setCenter({ coords: centerCoords, loading: false });
    //if (!center.loading) {}
    console.log(centerCoords);
    networksFinder(centerCoords, [0.1, 0.2]).then((areaNetworks) => {
      //console.log("THIS IS THE RESPONSE", areaNetworks);
      //@ts-ignore
      setNetworks(areaNetworks);
    });

    console.log("NETWORKS", networks);
    const stationsList = networks.map((network: INetwork) =>
      stations(network.id)
    );
    //@ts-ignore
    setStationsState(stationsList);
  }, [centerJSON.lat, centerJSON.lng, networks]);

  return (
    <div>
      {stationsState.map((station) => {
        const location: { lat: number; lng: number } = {
          //@ts-ignore
          lat: station.latitude,
          //@ts-ignore
          lng: station.longitude,
        };
        return (
          <Marker position={location} icon={BikeIcon}>
            <Popup>{JSON.stringify(station)}</Popup>
          </Marker>
        );
      })}
    </div>
  );
}
