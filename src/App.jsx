import Map from "./feature/map/map.component";
import Menu from "./feature/menu/menu.component";
import React, {useCallback, useMemo, useState} from 'react';
import './App.css';
import ActivitiesList from "./feature/activitiesList/activitiesList.component";
import {markers} from "./markers";
import SelectAgePage from "./feature/initialSelectPages/selectAgePage.component";
import SelectActivityPage from "./feature/initialSelectPages/selectActivityPage.component";
import SelectWhenPage from "./feature/initialSelectPages/selectWhenPage.component";
import SelectCategoryPage from "./feature/initialSelectPages/selectCategoryPage.component";
import SelectWherePage from "./feature/initialSelectPages/selectWherePage.component";
import SelectCompanyPage from "./feature/initialSelectPages/selectCompanyPage.component";

export const Markers = React.createContext({
  hoverMarkerId: '',
  updateHoverMarkerId: () => {},
  selected: new Set(),
  onChangeCategory: () => {},
  setMapCenter: ([]) => {},
  mapCenter: []
});

const App = () => {
  const [hoverMarkerId, setHoverMarkerId] = useState('');
  const [selected, setSelected] = useState(new Set());

  const [age, setAge] = useState(undefined);
  const [category, setCategory] = useState(undefined);
  const [company, setCompany] = useState(undefined);
  const [when, setWhen] = useState(undefined);
  const [where, setWhere] = useState(undefined);
  const [isChoiceOpen, setIsChoiceOpen] = useState(true);
  const [activity, setActivity] = useState(undefined);

  const [mapCenter, setMapCenter] = useState([]);

  const changeMapCenter = (center) => {
    setMapCenter(center);
  }

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
    const newCategory = category === 'company' ? '' : category;
    const selectedWithOtherParams = new Set([...selected, ...[age, newCategory, activity, when, where, company ?? ''].filter((item) => item !== '')]);

    return markers.filter(({criteria}) => {
      let everyThingFound = true;
      selectedWithOtherParams.forEach((value) => {
        if (criteria.indexOf(value) === -1) {
          everyThingFound = false;
        }
      });
      return everyThingFound
    })
  }, [selected, age, when, activity, where, category, company])

  const resetInitialSettings = useCallback(() => {
    setIsChoiceOpen(true);
    setCategory(undefined);
    setActivity(undefined);
    setCompany(undefined);
    setWhen(undefined);
    setWhere(undefined);
    setAge(undefined);
  }, [])

  return (
    <Markers.Provider value={{hoverMarkerId, updateHoverMarkerId, selected, onChangeCategory, setMapCenter: changeMapCenter, mapCenter}}>
      {age === undefined ? <SelectAgePage selectAge={setAge}/> :
      when === undefined ? <SelectWhenPage selectWhen={setWhen}/> :
      where === undefined ? <SelectWherePage selectWhere={setWhere}/> :
      category === undefined ? <SelectCategoryPage selectCategory={setCategory}/> :
      category === 'company' && company === undefined ? <SelectCompanyPage selectCompany={setCompany}/> :
      isChoiceOpen ? <SelectActivityPage selectActivity={setActivity} setIsChoiceOpen={(open) => {setIsChoiceOpen(open)}}/> : ''}
      <div className={'App'}>
        <Menu changeMapCenter={changeMapCenter} resetInitial={resetInitialSettings} activeMarkers={activeMarkers} initSettings={{age, company: company ?? '', when, where, category, activity}}/>
        <ActivitiesList activeMarkers={activeMarkers}/>
        <Map activeMarkers={activeMarkers}/>
        <div style={{width: '350px', height: '30px', position: 'absolute', right: 0, bottom: 0, zIndex: 9999, background: 'white'}}></div>
      </div>
    </Markers.Provider>
  );
}

export default App;
