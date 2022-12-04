import 'leaflet/dist/leaflet.css';
import './menu.css';
import {IconButton, Typography} from "@mui/material";
import {useContext, useMemo} from "react";
import {Markers} from "../../App";
import {categories} from "../../categories";
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

  const initSettingsRender = useMemo(() => {
    let result = [];
    for (let key in initSettings) {
      result = [...result, <div style={{display: "flex", textTransform: 'capitalize', }}>{key}: <div style={{fontWeight: 'bold', marginLeft: '3px'}}>
        {initSettings[key] !== '' ? initSettings[key] : "doesn't matter"}
      </div></div>]
    }
    return <>{result.map((item) => item)}</>
  }, [initSettings]);

  return (
    <div className={'menu'}>
      <Typography variant="h5" gutterBottom>
        Initial settings <IconButton onClick={() => resetInitial()}><RestartAltIcon/></IconButton>
      </Typography>
      <div className={'menu-content emoji'} style={{flexDirection: 'column'}}>
        {initSettingsRender}
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