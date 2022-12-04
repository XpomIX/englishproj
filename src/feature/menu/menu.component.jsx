import 'leaflet/dist/leaflet.css';
import './menu.css';
import {Chip, IconButton, Typography} from "@mui/material";
import {useContext, useMemo} from "react";
import {Markers} from "../../App";
import {categories} from "../../categories";
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const Menu = ({resetInitial, initSettings}) => {
  const {selected, onChangeCategory} = useContext(Markers);

  const menuItems = useMemo(() => (
    categories.map(({title, criteria}) => (
      <Chip
        onClick={() => onChangeCategory(criteria)}
        key={`menuItem_${criteria}`}
        label={title}
        color={selected.has(criteria) ? 'secondary' : 'default'}
        sx={{margin: '3px', fontSize: '16px'}}
      />
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