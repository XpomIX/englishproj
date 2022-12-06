import './map.css';
import {MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent, useMapEvents} from "react-leaflet";
import {useCallback, useContext, useEffect, useMemo, useRef} from "react";
import {Markers} from "../../App";
import {LatLng} from "leaflet/src/geo";
import {IconDefault} from "leaflet/src/layer/marker/Icon.Default";
import iconMarkerImg from '../../markersIcons/marker.svg';
import iconChosenMarkerImg from '../../markersIcons/markerChosen.svg';
import {Box, Rating, Typography} from "@mui/material";
import {Handler} from "leaflet/src/core";


const MyComponent = ({mapCenter, changeMapCenter}) => {
  const map = useMap();
  const mapEvents = useMapEvents({
    movestart: () => {
      changeMapCenter()
    }
  })

  useEffect(() => {
    if (mapCenter.length !== 0) {
      const position = map.getCenter()
      map.flyTo(new LatLng(mapCenter[0], mapCenter[1]), 17, {
        duration: 1,
        noMoveStart: true
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
})

const iconChosenMarker = new IconDefault({
  iconUrl:       iconChosenMarkerImg,
  iconRetinaUrl: '',
  shadowUrl:     '',
  iconSize:    [25, 41],
  iconAnchor:  [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [0, -28],
  shadowSize:  [41, 41]
});

const Map = ({activeMarkers}) => {
  const {mapCenter, setMapCenter} = useContext(Markers);
  const mapRef = useRef();

  const changeMapCenter = useCallback((center = []) => {setMapCenter(center)}, [])

  const renderMarkers = useMemo(() => (activeMarkers.map(({title, position, address, rating, description}) => (
    <Marker
      position={position}
      key={`marker_${title}`}
      icon={mapCenter.length === 2 ? mapCenter[0] === position[0] && mapCenter[1] === position[1] ? iconChosenMarker : iconMarker : iconMarker}
    >
      <Popup direction="top">
        <div style={{width: '250px'}}>
          <img alt={''} src={'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png'} style={{width: '100%', height: '200px'}}/>
          <Box><Typography style={{fontSize: '24px'}}>{title}</Typography>
            <Box
              sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Rating
                name="half-rating-read"
                defaultValue={rating}
                precision={0.1}
                readOnly
              />
              <Box sx={{ ml: 2, fontSize: '16px' }}>{rating}</Box>
            </Box>
          </Box>
          <div style={{fontSize: '20px'}}>{description}</div>
          <div style={{fontSize: '14px', fontWeight: 'bold', marginTop: '10px'}}>Address: {address}</div>
        </div>
      </Popup>
    </Marker>
  ))), [activeMarkers, mapCenter]);

  return (
    <MapContainer
      center={[57.1553, 65.5619]}
      zoom={12}
      ref={mapRef}
    >
      <MyComponent mapCenter={mapCenter} changeMapCenter={changeMapCenter}/>
      <TileLayer
        url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=tZYkrd4yVLXMz14miQWi"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      {renderMarkers}
    </MapContainer>
  );
}

export default Map;