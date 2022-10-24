import 'leaflet/dist/leaflet.css';
import './menu.css';
import {Typography} from "@mui/material";
import useMenuItems from "./useMenuItems.hook";
import {useMemo} from "react";

const Menu = () => {
  const {categories, selected, onClickMenuItem} = useMenuItems();

  const menuItems = useMemo(() => (
    categories.map((item) => (
      <Typography
        style={{textDecoration: selected.has(item.title) ? 'line-through' : 'none', cursor: 'pointer'}}
        onClick={() => onClickMenuItem(item.title)}
        key={item.title}
      >
        {item.title}
      </Typography>
    ))
  ), [categories, selected, onClickMenuItem]);

  return (
    <div className={'menu'}>
      {menuItems}
    </div>
  )
}

export default Menu;