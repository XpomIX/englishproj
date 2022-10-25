import './map.css';
import {MapContainer, Marker, TileLayer} from "react-leaflet";
import {useContext, useMemo} from "react";
import {Markers} from "../../App";

const Map = () => {
  const {activeMarkers} = useContext(Markers);
  const renderMarkers = useMemo(() => (
    <>
      {activeMarkers.map(({title, position, icon}) => (
        <Marker position={position} icon={icon} key={`marker_${title}`}>
        </Marker>
      ))}
    </>
  ), [activeMarkers]);
  return (
    <MapContainer center={[57.1553, 65.5619]} zoom={12}>
      <TileLayer
        url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=tZYkrd4yVLXMz14miQWi"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      {renderMarkers}
    </MapContainer>
  );
}

export default Map;