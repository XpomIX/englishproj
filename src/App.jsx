import Map from "./feature/map/map.component";
import Menu from "./feature/menu/menu.component";
import React, {useCallback, useMemo, useState} from 'react';
import './App.css';
import ActivitiesList from "./feature/activitiesList/activitiesList.component";
import {markers} from "./markers";
import SelectAgePage from "./feature/initialSelectPages/selectAgePage.component";
import SelectActivityPage from "./feature/initialSelectPages/selectActivityPage.component";
import SelectGenderPage from "./feature/initialSelectPages/selectGenderPage.component";

export const Markers = React.createContext({
  hoverMarkerId: '',
  updateHoverMarkerId: () => {},
  selected: new Set(),
  onChangeCategory: () => {}
});

const App = () => {
  const [hoverMarkerId, setHoverMarkerId] = useState('');
  const [selected, setSelected] = useState(new Set());

  const [gender, setGender] = useState(undefined);
  const [age, setAge] = useState(undefined);
  const [activity, setActivity] = useState(undefined);

  const updateHoverMarkerId = useCallback((id) => {setHoverMarkerId(id)}, []);
  const onChangeCategory = useCallback((category) => {
    let newSelected = new Set(selected);
    if (newSelected.has(category)) {
      newSelected.delete(category);
    } else {
      newSelected.add(category);
    }
    setSelected(newSelected)
  }, [selected, setSelected])

  const activeMarkers = useMemo(() => {
    const selectedWithOtherParams = new Set([...selected, ...[age, gender, activity].filter((item) => item !== '')]);

    return markers.filter(({criteria}) => {
      let everyThingFound = true;
      selectedWithOtherParams.forEach((value) => {
        if (criteria.indexOf(value) === -1) {
          everyThingFound = false;
        }
      });
      return everyThingFound
    })
  }, [selected, activity, age, gender])

  const resetInitialSettings = useCallback(() => {
    setGender(undefined);
    setActivity(undefined);
    setAge(undefined);
  }, [])

  if(gender === undefined) {
    return (
      <SelectGenderPage selectGender={setGender}/>
    )
  }
  if(age === undefined) {
    return (
      <SelectAgePage selectAge={setAge} gender={gender}/>
    )
  }
  if(activity === undefined) {
    return (
      <SelectActivityPage selectActivity={setActivity}/>
    )
  }

  return (
    <Markers.Provider value={{hoverMarkerId, updateHoverMarkerId, selected, onChangeCategory}}>
      <div className={'App'}>
        <Menu resetInitial={resetInitialSettings} initSettings={{age, gender, activity}}/>
        <ActivitiesList activeMarkers={activeMarkers}/>
        <Map activeMarkers={activeMarkers}/>
      </div>
    </Markers.Provider>
  );
}

export default App;
