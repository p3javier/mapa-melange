import networks from "../../../../data/networks.json";
/**
async function networks() {
  const url = "http://api.citybik.es/v2/networks";
  const response = await axios.get(url).catch((error) => console.log(error));

  //@ts-ignore
  const data = await response.data;
  return data.networks;
}
*/
export default async function networksFinder(
  center: Array<number>,
  aperture: Array<number>
) {
  const networksJSON = await networks.networks;
  const latBoundary = [center[0] - aperture[0], center[0] + aperture[0]];
  const lngBoundary = [center[1] - aperture[1], center[1] + aperture[1]];

  //@ts-ignore
  const networksInTheArea = await networksJSON.filter(
    (network: {
      id: string;
      location: { latitude: number; longitude: number };
    }) => {
      let latitude = network.location.latitude;
      let longitude = network.location.longitude;
      if (latBoundary[0] <= latitude && latitude <= latBoundary[1]) {
        if (lngBoundary[0] <= longitude && longitude <= lngBoundary[1]) {
          return network.id;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    []
  );
  return networksInTheArea;
}
