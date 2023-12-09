import { MapContainer, Marker, TileLayer, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const Map = ({ data }) => {
  const markerIcon = new Icon({
    iconUrl: "src/assets/images/icon-arrow.svg",
    iconSize: [38, 38],
  });

  return (
    <section className="h-[60%] sm:h-[70%]">
      <MapContainer center={[34.04915, -118.09462]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {data && (
          <Marker
            position={[data.location.lat, data.location.lng]}
            icon={markerIcon}
          ></Marker>
        )}

        <ZoomControl position="bottomleft" />
      </MapContainer>
    </section>
  );
};

export default Map;
