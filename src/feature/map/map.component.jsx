import './map.css';
import {MapContainer, Marker, TileLayer} from "react-leaflet";
import {useContext, useMemo} from "react";
import {Markers} from "../../App";
import {IconDefault} from "leaflet/src/layer/marker/Icon.Default";

const greenIcon = new IconDefault({
  iconUrl: 'https://img.icons8.com/glyph-neue/344/user-location.png',
  shadowUrl: 'https://img.icons8.com/glyph-neue/344/user-location.png'
})

const Map = () => {
  const {activeMarkers} = useContext(Markers);
  const renderMarkers = useMemo(() => (
    <>
      {activeMarkers.map((item) => (
        <Marker position={item.position} icon={greenIcon} key={`marker_${item.title}`}>
        </Marker>
      ))}
    </>
  ), [activeMarkers]);
  return (
    <MapContainer center={[57.1553, 65.5619]} zoom={12}>
      <TileLayer
        url="https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}@2x.jpg?key=tZYkrd4yVLXMz14miQWi"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {renderMarkers}
    </MapContainer>
  );
}

export default Map;