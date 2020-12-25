import React, { useEffect, useState } from "react";
import { Marker, Popup, useMapEvent } from "react-leaflet";

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

export default function CityBikLayerDetail() {
  const [networks, setNetworks] = useState<INetwork[]>([]);
  //const map = useMapEvent("moveend", () => {}); //change "click" to "moveend"
  const [stationsState, setStationsState] = useState<IStation[]>([]);
  const map = useMapEvent("moveend", (cosa) => {
    //setCenter({ coords: centerCoords, loading: false });
    //if (!center.loading) {}

    const centerJSON = map.getCenter();

    const centerCoords = [centerJSON.lat, centerJSON.lng];
    console.log("THE COORDS", centerCoords);
    networksFinder(centerCoords, [0.1, 0.2]).then((areaNetworks) => {
      console.log("THIS IS THE RESPONSE", JSON.stringify(areaNetworks));
      //@ts-ignore
      setNetworks(areaNetworks);
    });

    const stationsList = networks.map<IStation>((network) =>
      //@ts-ignore
      stations(network.id)
    );

    setStationsState(stationsList);
  });
  /** 
  useEffect(() => {
    //setCenter({ coords: centerCoords, loading: false });
    //if (!center.loading) {}
    const centerCoords = [51.505, -0.09];
    console.log("THE COORDS", centerCoords);
    networksFinder(centerCoords, [0.1, 0.2]).then((areaNetworks) => {
      console.log("THIS IS THE RESPONSE", areaNetworks);
      //@ts-ignore
      setNetworks(areaNetworks);
    });

    console.log("NETWORKS", networks);
    const stationsList = networks.map<IStation>((network) =>
      //@ts-ignore
      stations(network.id)
    );

    setStationsState(stationsList);
  }, [networks]);
  */
  return (
    <div>
      <Marker position={{ lat: 51.505, lng: -0.09 }}></Marker>
    </div>
  );
}

/**
 * {stationsState.map((station) => {
        const location: { lat: number; lng: number } = {
          lat: station.latitude,

          lng: station.longitude,
        };
        return (
          <Marker position={location} icon={BikeIcon}>
            <Popup>{JSON.stringify(station)}</Popup>
          </Marker>
        );
      })}
 */
