import { Icon } from "leaflet";
import { useEffect, useState } from "react";
import { Marker, useMap } from "react-leaflet";

const LocationMarker = ({ data }) => {
  const [position, setPosition] = useState(null);

  const map = useMap();

  const markerIcon = new Icon({
    iconUrl: "src/assets/images/icon-arrow.svg",
    iconSize: [38, 38],
  });

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  }, []);

  return data === null ? null : (
    <Marker position={position} icon={markerIcon}>
    </Marker>
  );
}

export default LocationMarker;