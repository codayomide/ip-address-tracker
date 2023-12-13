import { Icon } from "leaflet";
import { useEffect, useMemo } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

const LocationMarker = ({ data }) => {
  const markerIcon = new Icon({
    iconUrl: "./assets/images/icon-location.svg",
    iconSize: [38, 38],
  });

  const position = useMemo(() => {
    return data == null
      ? [34.04915, -118.09462]
      : [data.location.lat, data.location.lng];
  }, [data]);
  const map = useMap();

  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
    });
  }, [map, position]);

  return (
    <>
      <Marker icon={markerIcon} position={position}>
        <Popup>This is the location of the IP Address or Domain</Popup>
      </Marker>
    </>
  );
};

export default LocationMarker;
