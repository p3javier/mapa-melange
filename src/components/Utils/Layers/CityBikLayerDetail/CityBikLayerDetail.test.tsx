import { networksFinder } from "./networkFinder";

import { stations } from "./stationsFinder";

const sampleCoords = [51.109474, 17.033918];

const sampleResponse = [
  {
    company: ["Nextbike GmbH"],
    href: "/v2/networks/wrm-wroclaw",
    id: "wrm-wroclaw",
    location: {
      city: "Wrocław",
      country: "PL",
      latitude: 51.1097,
      longitude: 17.0485,
    },
    name: "WRM",
  },
  {
    company: ["Nextbike GmbH"],
    href: "/v2/networks/wrm-orlen-wroclaw",
    id: "wrm-orlen-wroclaw",
    location: {
      city: "Wrocław",
      country: "PL",
      latitude: 51.1097,
      longitude: 17.0485,
    },
    name: "WRM - Orlen",
  },
];

describe("CityBikeLayer tests", () => {
  it("networkFinder function is giving the correct response", async () => {
    const networks = await networksFinder(sampleCoords, [0.1, 0.2]).then(
      (areaNetworks) => areaNetworks
    );
    expect(networks).toEqual(sampleResponse);
  });
  it("stationsFinder function is returning the correct stations", async () => {
    const sampleNetworkId = "wrm-wroclaw";
    const stationsResponse = await stations(sampleNetworkId).then(
      (returnedStations) => returnedStations
    );
    console.log("STATIONS", stationsResponse);
  });
});
