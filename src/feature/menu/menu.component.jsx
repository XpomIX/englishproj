import 'leaflet/dist/leaflet.css';
import './menu.css';
import {Box, Checkbox, FormControlLabel, Slider, Typography} from "@mui/material";
import useMenuItems from "./useMenuItems.hook";
import {useMemo} from "react";

const ageSelect = [
  {
    value: 0,
    label: '🎭'
  },
  {
    value: 1,
    label: '👼'
  },
  {
    value: 2,
    label: '👦'
  },
  {
    value: 3,
    label: '👵'
  },
]

const Menu = () => {
  const {categories, selected, onClickMenuItem} = useMenuItems();

  const menuItems = useMemo(() => (
    categories.map(({title, criteria}) => (
      <FormControlLabel control={<Checkbox checked={selected.has(criteria)} onChange={() => onClickMenuItem(criteria)}/>} label={title} />
    ))
  ), [categories, selected, onClickMenuItem]);

  return (
    <div className={'menu'}>
      <Typography variant="h5" gutterBottom>
        Choose your criteria
      </Typography>
      {/*<Box sx={{ width: '100%' }}>*/}
      {/*  <Typography gutterBottom>Choose age</Typography>*/}
      {/*  <Slider*/}
      {/*    track={false}*/}
      {/*    defaultValue={0}*/}
      {/*    step={1}*/}
      {/*    max={3}*/}
      {/*    marks={ageSelect}*/}
      {/*  />*/}
      {/*</Box>*/}
      {menuItems}
    </div>
  )
}

export default Menu;