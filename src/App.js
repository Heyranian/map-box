import "./App.css";
// import "mapbox-gl/dist/mapbox-gl.css";
import Map from "react-map-gl";

// import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
// mapboxgl.accessToken =
//   "pk.eyJ1IjoiYW1pcmhzb2JoaSIsImEiOiJjazJxbzdsbjgwaDh3M2Rtdzk5YmVtZmx6In0.lBJgYJaNTzyTF3pb5MC4Lw";
// const map = new mapboxgl.Map({
//   container: "map", // container ID
//   style: "mapbox://styles/mapbox/streets-v12", // style URL
//   center: [-74.5, 40], // starting position [lng, lat]
//   zoom: 5, // starting zoom
// });

function App() {
  return (
    <div className="App">
      <Map
        initialViewState={{
          longitude: 52.41,
          latitude: 32.7575,
          zoom: 4.5,
        }}
        center={[52.41, 32.7575]}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1IjoiYW1pcmhzb2JoaSIsImEiOiJjazJxbzdsbjgwaDh3M2Rtdzk5YmVtZmx6In0.lBJgYJaNTzyTF3pb5MC4Lw"
      />
    </div>
  );
}

export default App;
