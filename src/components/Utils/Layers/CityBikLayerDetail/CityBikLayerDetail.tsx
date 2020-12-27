import React, { useEffect, useState } from "react";
import { Marker, Popup, useMapEvent } from "react-leaflet";

import BikeIcon from "../../Icons/BikeIcon";

import { networksFinder } from "./networkFinder";

import { stations } from "./stationsFinder";

type INetwork = {
  company: string;
  href: string;
  id: string;
  location: {
    city: string;
    country: string;
    latitude: number;
    longitude: number;
  };
  name: string;
};

interface IStation {
  empty_slots: number;
  extra: {
    bike_uids?: string[];
    number?: string;
    slots: number;
    installDate?: string;
    installed?: boolean;
    locked?: boolean;
    name?: string;
    removalDate?: string;
    temperature?: boolean;
    terminalName?: string;
    uid: string | number;
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

  const map = useMapEvent("moveend", () => {
    //setCenter({ coords: centerCoords, loading: false });
    //if (!center.loading) {}
    setStationsState([
      {
        empty_slots: 15,
        extra: {
          bike_uids: ["651364"],
          number: "15001",
          slots: 16,
          uid: "12497516",
        },
        free_bikes: 1,
        id: "0fd1fed1de13b29139831ad2fb664b69",
        latitude: 51.108004,
        longitude: 17.039528,
        name: "Plac Dominika\u0144ski (Galeria Dominika\u0144ska)",
        timestamp: "2020-12-26T23:29:01.357000Z",
      },
    ]);
    console.log("STATIONS STATE SHOULD BE EMPTY", stationsState);
    const centerJSON = map.getCenter();

    const centerCoords = [centerJSON.lat, centerJSON.lng];
    console.log("THE COORDS", centerCoords);
    networksFinder(centerCoords, [0.1, 0.2]).then((areaNetworks) => {
      //Investigate why importing function in typescript add additional arguments
      const areaNetworksString = JSON.stringify(areaNetworks);
      const areaNetworksObj = JSON.parse(areaNetworksString);
      setNetworks(areaNetworksObj);
    });

    networks.forEach((network) => {
      stations(network.id).then((stationsB) => {
        const theStations = stationsB;
        setStationsState((current) => current.concat(theStations));
      });
    });
    console.log("STATE NETWORKS", networks);
    console.log("STATE STATIONS", stationsState);
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
  let stationMarkers = stationsState.map((station: IStation) => {
    const location: { lat: number; lng: number } = {
      lat: station.latitude,

      lng: station.longitude,
    };
    return (
      <Marker position={location} icon={BikeIcon}>
        <Popup>{JSON.stringify(station)}</Popup>
      </Marker>
    );
  });

  return stationMarkers;
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
