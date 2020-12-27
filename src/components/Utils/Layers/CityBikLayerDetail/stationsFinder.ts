export async function stations(id: string) {
  const url = `http://api.citybik.es/v2/networks/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.network.stations;
}
