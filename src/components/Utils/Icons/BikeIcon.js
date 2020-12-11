import L from "leaflet";

const svg = `data:image/svg+xml;utf8,
<svg 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    version="1.1" 
    id="Layer_1" 
    x="0px" 
    y="0px" 
    viewBox="0 0 30 30" 
    fill="rgb(25, 255, 87)"
    height="10px" 
    width="10px">
<g>
<path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"/>
</g>
</svg>`;

//for some reason the coordinates of the SVG can't be stored outside string literal as a variable

const BikeIcon = new L.Icon({
  iconUrl: svg,
  iconRetinaUrl: svg,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(25, 25),
}); //IS IMPORTANT NOT TO DEFINE THE className ATTRIBUTE AS leaflet-div-icon, OTHERWISE YOU'LL GET AN ANNOYING WHITE BACKGROUND

export default BikeIcon;
