import {IconDefault} from "leaflet/src/layer/marker/Icon.Default";
import restaurant from './restaurant.png';

export const restaurantIcon = new IconDefault({
  iconUrl: restaurant,
  shadowUrl: restaurant,
  shadowSize: [0,0],
  iconSize: [38, 40]
})

export const patrickIcon = new IconDefault({
  iconUrl: 'https://img.icons8.com/glyph-neue/344/user-location.png',
  shadowUrl: 'https://img.icons8.com/glyph-neue/344/user-location.png',
  iconSize: [38, 40],
  shadowSize: [0, 0],
})