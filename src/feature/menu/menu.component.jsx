import 'leaflet/dist/leaflet.css';
import './menu.css';
import {IconButton, Typography} from "@mui/material";
import {useContext, useMemo} from "react";
import {Markers} from "../../App";
import {categories} from "../../categories";
import {activityOptions, ageIconsOptions, genderOptions} from "../initialSelectPages/options";
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const Menu = ({resetInitial, initSettings}) => {
  const {selected, onChangeCategory} = useContext(Markers);

  const menuItems = useMemo(() => (
    categories.map(({title, criteria}) => (
      <div
        onClick={() => onChangeCategory(criteria)}
        style={{
          background: selected.has(criteria) ? '#966BD6' : 'rgba(150,107,214,0.49)',
          color: selected.has(criteria) ? 'white' : 'black'
        }}
        className={'menu-content-item'}
        key={`menuItem_${criteria}`}
      >
        {title}
      </div>
    ))
  ), [selected, onChangeCategory]);

  const gender = useMemo(() => {
    if (initSettings.gender === '') {return `Doesn't matter`}
    return (initSettings.gender === 'man' ? genderOptions.man : genderOptions.woman)
  }, [initSettings])
  const age = useMemo(() => {
    const {age, gender} = initSettings;
    if (age === '') {return `Doesn't matter`}
    if (age === 'child') {return ageIconsOptions[0].man}
    if (age === 'middle-age') {return gender === 'man' ? ageIconsOptions[1].man : ageIconsOptions[1].woman}
    if (age === 'old') {return gender === 'man' ? ageIconsOptions[2].man : ageIconsOptions[2].woman}
  }, [initSettings])
  const activity = useMemo(() => {
    if (initSettings.activity === '') {return `Doesn't matter`}
    return (initSettings.activity === 'food' ? activityOptions.food : activityOptions.entertainment)
  }, [initSettings])

  return (
    <div className={'menu'}>
      <Typography variant="h5" gutterBottom>
        Initial settings <IconButton onClick={() => resetInitial()}><RestartAltIcon/></IconButton>
      </Typography>
      <div className={'menu-content emoji'} style={{flexDirection: 'column'}}>
        <div style={{display: "flex"}}>Gender: <div style={{fontWeight: 'bold', marginLeft: '3px'}}>{gender}</div></div>
        <div style={{display: "flex"}}>Age: <div style={{fontWeight: 'bold', marginLeft: '3px'}}>{age}</div></div>
        <div style={{display: "flex"}}>Activity: <div style={{fontWeight: 'bold', marginLeft: '3px'}}>{activity}</div></div>
      </div>
      <div style={{width: '100%', marginTop: '25px'}}></div>
      <Typography variant="h5" gutterBottom>
        Choose your criteria
      </Typography>
      <div className={'menu-content'}>
        {menuItems}
      </div>
    </div>
  )
}

export default Menu;