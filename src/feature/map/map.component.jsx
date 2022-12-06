import './map.css';
import {MapContainer, Marker, Popup, TileLayer, Tooltip, useMap} from "react-leaflet";
import {Fragment, useContext, useEffect, useMemo, useRef} from "react";
import {Markers} from "../../App";
import {LatLng} from "leaflet/src/geo";
import {IconDefault} from "leaflet/src/layer/marker/Icon.Default";
import iconMarkerImg from '../../markersIcons/marker.svg';
import {Box, Button, Rating, Typography} from "@mui/material";

function getLabelText(value) {
  return `${value}`;
}

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

const iconMarker = new IconDefault({
  iconUrl:       iconMarkerImg,
  iconRetinaUrl: '',
  shadowUrl:     '',
  iconSize:    [25, 41],
  iconAnchor:  [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [0, -28],
  shadowSize:  [41, 41]
});

const Map = ({activeMarkers}) => {
  const {mapCenter} = useContext(Markers);
  const mapRef = useRef();

  const renderMarkers = useMemo(() => (activeMarkers.map(({title, position, address, rating, description}) => (
    <Marker position={position} key={`marker_${title}`} icon={iconMarker}>
      <Popup direction="top">
        <div style={{width: '250px'}}>
          <img alt={''} src={'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png'} style={{width: '100%', height: '200px'}}/>
          <Box><Typography style={{fontSize: '24px'}}>{title}</Typography>
            <Rating
              name="half-rating-read"
              defaultValue={rating}
              precision={0.1}
              getLabelText={getLabelText}
              readOnly
            />
          </Box>
          <div style={{fontSize: '20px'}}>{description}</div>
          <div style={{fontSize: '14px', fontWeight: 'bold', marginTop: '10px'}}>Address: {address}</div>
        </div>
      </Popup>
    </Marker>
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