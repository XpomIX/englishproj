import {patrickIcon, restaurantIcon} from "./markersIcons/markerIcons";
import { v4 as uuidv4 } from 'uuid';

export const markers = [
  {
    title: 'Borsch',
    address: 'st. Kirova, 37, Tyumen',
    images: ['https://avatars.mds.yandex.net/get-altay/4432502/2a0000017c1d48542e52ecc0cbee96439e54/XXXL',
      'https://avatars.mds.yandex.net/get-altay/5584259/2a0000017d9496e30e67829010f1284bc558/XXXL',
      'https://avatars.mds.yandex.net/get-altay/4802381/2a0000017b9e720b8956264c436d83958036/XXXL'
    ],
    criteria: ['restaurant', 'fast-food', 'middle-age', 'old', 'food', 'man', 'woman'],
    description: 'Borsch is the most popular restaurant with a low price and nice design.',
    position: [57.15630607268969, 65.53048437301588],
    icon: restaurantIcon
  },
  {
    title: 'FEI',
    address: 'st. Lenina, 16, Tyumen',
    images: ['https://avatars.mds.yandex.net/get-altay/4432502/2a0000017c1d48542e52ecc0cbee96439e54/XXXL',
      'https://avatars.mds.yandex.net/get-altay/5584259/2a0000017d9496e30e67829010f1284bc558/XXXL',
      'https://avatars.mds.yandex.net/get-altay/4802381/2a0000017b9e720b8956264c436d83958036/XXXL'
    ],
    criteria: ['patric', 'live-music'],
    description: 'Borsch is the most popular restaurant with a low price and nice design.',
    position: [57.15881776421832,65.52485545136237],
    icon: patrickIcon
  },
].map((item) => ({...item, id: uuidv4()}));