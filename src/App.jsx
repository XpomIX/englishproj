import Map from "./feature/map/map.component";
import Menu from "./feature/menu/menu.component";
import React, {useCallback, useState} from 'react';
import './App.css';

export const Markers = React.createContext({activeMarkers: [], updateMarkers: () => {}});

const App = () => {
  const [activeMarkers, setActiveMarkers] = useState([]);
  const updateMarkers = useCallback((newMarkers) => {setActiveMarkers(newMarkers)}, []);
  return (
    <Markers.Provider value={{activeMarkers, updateMarkers}}>
      <div className={'App'}>
        <Menu/>
        <Map/>
      </div>
    </Markers.Provider>
  );
}

export default App;
