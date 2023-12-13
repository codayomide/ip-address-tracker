import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LocationMarker from "./LocationMarker";

const Map = ({ data }) => {
  return (
    <section className="h-[60%] sm:h-[70%]">
      <MapContainer center={[34.04915, -118.09462]} zoom={5}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarker data={data} />

        <ZoomControl position="bottomleft" />
      </MapContainer>
    </section>
  );
};

export default Map;
