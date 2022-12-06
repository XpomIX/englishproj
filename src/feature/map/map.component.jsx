import './map.css';
import {MapContainer, Marker, TileLayer, useMap} from "react-leaflet";
import {useCallback, useContext, useEffect, useMemo, useRef} from "react";
import {Markers} from "../../App";
import {LatLng} from "leaflet/src/geo";

const MyComponent = ({mapCenter}) => {
  const map = useMap();

  useEffect(() => {
    if (mapCenter.length !== 0) {
      map.flyTo(new LatLng(mapCenter[0], mapCenter[1]), 18, {
        duration: 1
      });
    }
  }, [mapCenter])
  return null
}

const Map = ({activeMarkers}) => {
  const {mapCenter} = useContext(Markers);
  const mapRef = useRef();

  const renderMarkers = useMemo(() => (activeMarkers.map(({title, position}) => (
    <Marker position={position} key={`marker_${title}`}></Marker>
  ))), [activeMarkers]);

  return (
    <MapContainer center={[57.1553, 65.5619]} zoom={12} ref={mapRef}>
      <MyComponent mapCenter={mapCenter}/>
      <TileLayer
        url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=tZYkrd4yVLXMz14miQWi"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      {renderMarkers}
    </MapContainer>
  );
}

export default Map;