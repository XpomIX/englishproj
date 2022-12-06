import { v4 as uuidv4 } from 'uuid';
import {options} from './feature/initialSelectPages/options';

export const markers = [
  {
    title: `Ramen "Izakaya"`,
    description: `A good place to have a snack alone or with friends, an extensive menu, excellent cuisine, fast service, polite staff`,
    position: [57.15739,65.52601],
    rating: 4.7,
    criteria: [options.age.kids.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.company.friends.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,],
    address: `Russia, Tyumen city, Turgeneva street, 19`
  },
  {
    title: `Prokofiev Coffee Shop`,
    description: `A large selection of coffee and tea, for a sweet tooth paradise-waffles with your favorite flavors, very interesting and delicious combinations.`,
    position: [57.15772,65.53095],
    rating: 4.3,
    criteria: [options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,],
    address: `Russia, Tyumen city, Respubliki street, 26`
  },
  {
    title: `Coffee shop "Garden Coffee"`,
    description: `A pleasant place in the very center of Tyumen. Stylish interior, friendly atmosphere, friendly staff, delicious and cozy`,
    position: [57.16111,65.52063],
    rating: 4.7,
    criteria: [options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,],
    address: `Russia, Tyumen city, Lenina street, 4`
  },
  {
    title: `Bar "Malina Bar"`,
    description: `The best place to get together with friends. Pleasant atmosphere, affordable prices, excellent menu. Always fast and high-quality service staff and excellent cuisine and bar.`,
    position: [57.15348,65.53491],
    rating: 4.3,
    criteria: [options.age.students.title,options.age.middleAge.title,options.category.company.title,options.company.friends.title,options.where.inside.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Pervomayskaya street, domovladenie 18`
  },
  {
    title: `Fast food restaurant "Burger King"`,
    description: `Good burgers , however , as well as the rest of the kitchen . The establishment is clean, there is a public transport stop nearby. There is a small parking lot`,
    position: [57.15331,65.53628],
    rating: 4.3,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Lenina street, 61`
  },
  {
    title: `Fast food restaurant "Burger King"`,
    description: `Good burgers , however , as well as the rest of the kitchen . The establishment is clean, there is a public transport stop nearby. There is a small parking lot`,
    position: [57.13802,65.57027],
    rating: 4.3,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Respubliki street, 155a`
  },
  {
    title: `Fast food restaurant "Burger King"`,
    description: `Good burgers , however , as well as the rest of the kitchen . The establishment is clean, there is a public transport stop nearby. There is a small parking lot`,
    position: [57.14674,65.54525],
    rating: 4.3,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Gertsena street, 103`
  },
  {
    title: `Fast food restaurant "Burger King"`,
    description: `Good burgers , however , as well as the rest of the kitchen . The establishment is clean, there is a public transport stop nearby. There is a small parking lot`,
    position: [57.1349,65.49393],
    rating: 4.3,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Moskovsky trakt street, 118`
  },
  {
    title: `Fast food restaurant "Burger King"`,
    description: `Good burgers , however , as well as the rest of the kitchen . The establishment is clean, there is a public transport stop nearby. There is a small parking lot`,
    position: [57.14873,65.56025],
    rating: 4.3,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Maksima Gorkogo street, 70`
  },
  {
    title: `Fast food restaurant "KFC"`,
    description: `Very cozy. I really like the design of the cafe, it's nice to sit. The quality of the dishes, as everywhere else, is good. The staff is polite, the waiting time is standard`,
    position: [57.1526,65.53658],
    rating: 4.3,
    image: 'https://okfc.ru/address/restaurant_foto/19.jpg',
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Lenina street, 52`
  },
  {
    title: `Fast food restaurant "KFC"`,
    description: `Very cozy. I really like the design of the cafe, it's nice to sit. The quality of the dishes, as everywhere else, is good. The staff is polite, the waiting time is standard`,
    position: [57.1419,65.56136],
    rating: 4.3,
    image: 'https://okfc.ru/address/restaurant_foto/19.jpg',
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Respubliki street, 94 k 1`
  },
  {
    title: `Fast food restaurant "KFC"`,
    description: `Very cozy. I really like the design of the cafe, it's nice to sit. The quality of the dishes, as everywhere else, is good. The staff is polite, the waiting time is standard`,
    position: [57.1349,65.49393],
    rating: 4.3,
    image: 'https://okfc.ru/address/restaurant_foto/19.jpg',
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Moskovsky trakt street, 118`
  },
  {
    title: `Fast food restaurant "Delicious - and period"`,
    description: `It's a good place. You can have a cheap and high-quality snack, the assortment is standard for this network.`,
    position: [57.15205,65.53752],
    rating: 4.1,
    image: 'https://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/1061621/AJzcnEIhDs2ja5jJKpS9w.jpg',
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Lenina street, 54`
  },
  {
    title: `Fast food restaurant "Delicious - and period"`,
    description: `It's a good place. You can have a cheap and high-quality snack, the assortment is standard for this network.`,
    position: [57.14688,65.54918],
    rating: 4.1,
    image: 'https://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/1061621/AJzcnEIhDs2ja5jJKpS9w.jpg',
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Morisa Toreza street, 4`
  },
  {
    title: `Borsch`,
    description: `A good budget dining room. If there is a bonus card, then lunch or dinner turns out to be very budget. The menu is very diverse.`,
    position: [57.13911,65.57196],
    rating: 4.6,
    image: 'https://i7.otzovik.com/2020/01/01/9247164/img/1578786_21503918.jpeg',
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Melnikayte street, 101`
  },
  {
    title: `Borsch`,
    description: `A good budget dining room. If there is a bonus card, then lunch or dinner turns out to be very budget. The menu is very diverse.`,
    position: [57.15441,65.53428],
    rating: 4.6,
    image: 'https://i7.otzovik.com/2020/01/01/9247164/img/1578786_21503918.jpeg',
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Lenina street, 46`
  },
  {
    title: `Park of Culture and Recreation "Tsvetnoy Boulevard"`,
    description: `A wonderful space for family leisure. There are only children's, and joint, and adult carousels. The prices, personally, seemed acceptable to me. The staff is friendly for the most part.`,
    position: [57.15109,65.53755],
    rating: 4.7,
    image: 'https://gorod-t.info/upload/resize_cache/iblock/8ce/900_900_1/2003_1.jpg',
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.withPets.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.couples.title,options.where.outside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Gertsena street, 83v`
  },
  {
    title: `Bar "Saddle"`,
    description: `Good service, attentive staff who are able to answer all questions and advise a dish or drink. Very high quality and delicious`,
    position: [57.15136,65.53898],
    rating: 4.7,
    criteria: [options.age.students.title,options.age.middleAge.title,options.category.company.title,options.company.friends.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Lenina street, 68/101`
  },
  {
    title: `Puppet Theater`,
    description: `Everything is fine: building, decoration, staff, hall, stage, effects, script, acting, light, sound, dolls`,
    position: [57.15734,65.53061],
    rating: 4.5,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.alone.title,options.company.friends.title,options.company.couples.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Kirova street, 36`
  },
  {
    title: `Recreation center "Pioneer"`,
    description: `A beautiful building with a beautiful history. Life is boiling. Constantly master classes, concerts, rehearsals of collectives. Now there are platforms for any entertainment and hobbies.`,
    position: [57.15531 ,65.53071],
    rating: 5,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.alone.title,options.company.friends.title,options.company.couples.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Chelyuskintsev street, 46/36`
  },
  {
    title: `Literary and Local History Center (museum)`,
    description: `A wonderful museum. This is an ideal place for children and adults, for adults who in their hearts remain as adventurous as they were many years ago.`,
    position: [57.15452,65.53609],
    rating: 4.3,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.alone.title,options.company.friends.title,options.company.couples.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Pervomayskaya street, 14`
  },
  {
    title: `Masharov House (museum)`,
    description: `Very spacious room, new, modern building. The exposition is interesting, the halls are conveniently located. You can book a tour, you can see for yourself. There are programs for children`,
    position: [57.15801,65.52649],
    rating: 4.4,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.alone.title,options.company.friends.title,options.company.couples.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Lenina street, 24`
  },
  {
    title: `Tyumen Philharmonic Society`,
    description: `Located in the city center, a beautiful, academic publication. A very good philharmonic orchestra. There are many interesting programs in the repertoire of the Philharmonic. There are large and small halls`,
    position: [57.15603,65.53358],
    rating: 5,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.alone.title,options.company.friends.title,options.company.couples.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Respubliki street, 34`
  },
  {
    title: `Restaurant "Georgian Nani"`,
    description: `A great place to relax with both a large company and a family, cool staff, excellent menu, cook quickly, you can personally observe the process of frying dishes on the grill.`,
    position: [57.15017,65.52795],
    rating: 4.8,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Pervomayskaya street, domovladenie 48`
  },
  {
    title: `Restaurant "Kishmish"`,
    description: `This place is very well suited for lovers of oriental cuisine, pleasant and polite staff who will not leave you indifferent, meat is cooked at a high level compared to other establishments, the best khinkali in the city is only here.`,
    position: [57.14439,65.5464],
    rating: 4.8,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Malygina street, 6/1`
  },
  {
    title: `Cafe "15/86"`,
    description: `A delicious high-level cafe in the heart of the city with stunning views of the embankment. They cook perfectly, salads, snacks, grilled meat or fish, everything is very tasty and of high quality. The staff is polite. There is live music in the evenings.`,
    position: [57.16061,65.53015],
    rating: 4.9,
    image: 'https://t-l.ru/i/ncr1058/939/314939/tn_314939_2ce0bd26562a63d.jpg',
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Volodarskogo street, 3`
  },
  {
    title: `Bar "Mr. Hookah�`,
    description: `A great place in the city center. Delicious varied menu and excellent hookah! The staff is attentive.`,
    position: [57.15818,65.53366],
    rating: 4.6,
    criteria: [options.age.students.title,options.age.middleAge.title,options.category.company.title,options.company.friends.title,options.where.inside.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Volodarskogo street, 14`
  },
  {
    title: `Cafe "Buuzi"`,
    description: `Excellent cuisine. Simple dishes of national cuisine of high quality. They cook soundly, like at home. Cafe hostesses have not reduced the quality of products for many years, do not depart from time-tested recipes`,
    position: [57.15733,65.53624],
    rating: 4.5,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Volodarskogo street, 25`
  },
  {
    title: `Cafe "Bashi"`,
    description: `A very cozy place, affordable prices, polite staff met and suggested the menu. Pleasant atmosphere, modern place, fast food delivery.`,
    position: [57.15479,65.54109],
    rating: 4.6,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Volodarskogo street, 43/36`
  },
  {
    title: `Bar "Mojito"`,
    description: `A great place to relax with a group of friends. Music, sound, hookah, service, atmosphere � everything is on top.`,
    position: [57.15668,65.52979],
    rating: 4.2,
    criteria: [options.age.students.title,options.age.middleAge.title,options.category.company.title,options.company.friends.title,options.where.inside.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Lenina street, 33/40`
  },
  {
    title: `Night club "Badger"`,
    description: `A wonderful institution, few of these can distinguish themselves with such a pleasant atmosphere and confident service.`,
    position: [57.15944,65.5254],
    rating: 4.6,
    criteria: [options.age.students.title,options.age.middleAge.title,options.category.company.title,options.company.friends.title,options.where.inside.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Krasina street, 7a`
  },
  {
    title: `Pizzeria "How we love"`,
    description: `A nice and pleasant place. The atmosphere is certainly not Italian, but it is warm and cozy to be inside. The food is delicious, but not cheap.`,
    position: [57.16046,65.52543],
    rating: 4.6,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Respubliki street, 10`
  },
  {
    title: `Restaurant "Uzbek"`,
    description: `Beautiful decoration inside, pleasant atmosphere. The menu is quite diverse. The dishes are beautiful, the products are fresh. Kebabs are super. Baking - the highest score`,
    position: [57.16076,65.52387],
    rating: 4.5,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Perekopskaya street, 4a`
  },
  {
    title: `Karaoke club "Chaliapin"`,
    description: `The atmosphere is cozy, the service is excellent, and most importantly, it will be interesting for fans to listen, since not amateurs come to sing in this institution. Dance music is played periodically, so you won't be bored.`,
    position: [57.15687 ,65.53034],
    rating: 4.6,
    criteria: [options.age.students.title,options.age.middleAge.title,options.category.company.title,options.company.friends.title,options.company.couples.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Kirova street, 40/33`
  },
  {
    title: `Bar/karaoke club "Hands up!"`,
    description: `A great bar, had fun, sang a lot of karaoke and danced. The place is best suited for a large company.`,
    position: [65.53071,65.53285],
    rating: 4.6,
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/21/50/3a/dc/caption.jpg',
    criteria: [options.age.students.title,options.age.middleAge.title,options.category.company.title,options.company.friends.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Tyumen`
  },
  {
    title: `Cafe "Van`,
    description: `A truly atmospheric institution, where both the high-quality work of the kitchen and the professionalism of the staff in the hall can be traced. Convenient location on the main street in the city center. The food is delicious and satisfying.`,
    position: [57.15608,65.53414],
    rating: 4.3,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Respubliki street, 36`
  },
  {
    title: `Gogh" Restaurant "Vacation"`,
    description: `Everything is always at the highest level. The kitchen is excellent, the service is excellent. The atmosphere is comfortable and aesthetic to the smallest detail. The cost is not small, of course, but in general it is justified.`,
    position: [57.15662,65.53421],
    rating: 4.7,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Respubliki street, 25`
  },
  {
    title: `Bar "Republic"`,
    description: `A good selection of craft beer. A cozy atmosphere that helps to relax. Delicious dishes and affordable prices. Nimble and friendly waiters. Great live music!`,
    position: [57.15648,65.53417],
    rating: 4.5,
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/1c/83/93/ef/80.jpg',
    criteria: [options.age.students.title,options.age.middleAge.title,options.category.company.title,options.company.friends.title,options.where.inside.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Respubliki street, 25`
  },
  {
    title: `Fast food restaurant "Black Star Burger"`,
    description: `Themed, cute and spacious establishment, polite staff. Big and juicy burgers, original ice cream.`,
    position: [57.15429,65.53375],
    rating: 4.5,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Lenina street, 46`
  },
  {
    title: `Fast food restaurant "Duner on coals"`,
    description: `A rather inconspicuous place from the street, but a must-visit! Branded Damier is just perfect! Crispy bun, interesting sauce, and everything is super juicy`,
    position: [57.15454,65.52969],
    rating: 4.2,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Chelyuskintsev street, 50`
  },
  {
    title: `Bar "Rusty GRANDFATHER"`,
    description: `An atmospheric place! Friendly staff, attentive to the guests of the institution. The interior is thought out to the smallest detail, very cozy, despite its brutality snacks and main menu dishes are delicious, interesting serving.`,
    position: [57.15572,65.542],
    rating: 4.4,
    criteria: [options.age.students.title,options.age.middleAge.title,options.category.company.title,options.company.friends.title,options.where.inside.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Khokhryakova street, 47 k 1`
  },
  {
    title: `Fast food restaurant "Papa Jones"`,
    description: `Delicious pizza, interesting cheese sticks in the form of a round pizza. Delicious Caesar salad. The cafe has a playground for children. The hall is tidy, clean`,
    position: [57.15262,65.5464],
    rating: 4.8,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Ordzhonikidze street, 50a`
  },
  {
    title: `Cafe "Coffee Brut"`,
    description: `Great place! Cozy, modern. Polite staff. The food is delicious!`,
    position: [57.15491,65.54673],
    rating: 4.3,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Sovetskaya street, 55/4`
  },
  {
    title: `Restaurant "Grill House"`,
    description: `Great place. You can have a delicious dinner. Meat dishes are very tasty. Live music in the evening. Fast service. Attentive staff.`,
    position: [57.15848,65.54539],
    rating: 4.9,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Komsomolskaya street, 18`
  },
  {
    title: `DK "Neftyanik"`,
    description: `Probably the best concert hall in the city. The purest sound. And the stage is huge and aesthetically beautiful`,
    position: [57.16033,65.54374],
    rating: 4.4,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.alone.title,options.company.friends.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Osipenko street, 1`
  },
  {
    title: `Shipping Company office`,
    description: `Cool place! Good menu, reasonable prices, good service, nice waiters. The entourage corresponds to the name, stylish, cozy. There is a children's menu. They often arrange concerts`,
    position: [57.16114,65.54702],
    rating: 5,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.company.friends.title,options.company.colleagues.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, 25 Oktyabrya street, 27`
  },
  {
    title: `Restaurant "Balkan Grill"`,
    description: `Very tasty place. The portions are very good and delicious! The friendly waiter will always prompt and bring everything on time. Business lunch is delicious and satisfying.`,
    position: [57.15295,65.56886],
    rating: 5,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, 50 let Oktyabrya street, 3 k 1`
  },
  {
    title: `Restaurant "Katso"`,
    description: `A very themed place. Colorful atmosphere, interior, kitchen. The food is delicious, homemade wines too. In addition to national cuisine, there are also European dishes.`,
    position: [57.14019,65.56611],
    rating: 4.5,
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/17/94/7b/caption.jpg',
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Respubliki street, 143`
  },
  {
    title: `Restaurant "Easy check"`,
    description: `A very interesting institution: a complex system of payment for admission by the hour, but at the same time very low cost of dishes. The quality is pretty good - the seafood is very fresh, the salmon is delicious. There is a children's room, you can watch directly from the hall on TV screens.`,
    position: [57.14688,65.55324],
    rating: 5,
    criteria: [options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Respubliki street, 81`
  },
  {
    title: `Tyumen Drama Theater`,
    description: `A wonderful place! A beautiful building both outside and inside. Comfortable auditorium. You can buy tickets to the back rows without fear. Excellent acoustics. There are changing rooms on the ground floor`,
    position: [57.14452,65.55985],
    rating: 4.5,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.alone.title,options.company.friends.title,options.company.couples.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Respubliki street, 129`
  },
  {
    title: `Bar "Granny's Bar"`,
    description: `Very friendly and positive staff, original interior. The food is delicious, the cocktails are probably the best in the city, the fiery performances are just super.`,
    position: [57.14081,65.57028],
    rating: 5,
    criteria: [options.age.students.title,options.age.middleAge.title,options.category.company.title,options.company.friends.title,options.where.inside.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Melnikayte street, 98`
  },
  {
    title: `Restaurant "Maksimych"`,
    description: `Spacious, clean, stylish in its own way, always friendly service. The menu is varied. Some famous dishes are made "in their own way", but they are made better than the "original" recipes. Tastier than the herring that Maksimych offers, have you ever tried`,
    position: [57.1436,65.58413],
    rating: 4.4,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, 50 let Oktyabrya street, 52`
  },
  {
    title: `Tyumen Fair`,
    description: `Great place! Amazing organization of events, everything is always smart and well planned. This is how the management of the company and the entire staff of the exhibition work smoothly and efficiently`,
    position: [57.13518,65.58769],
    rating: 4.1,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Sevastopolskaya street, 12`
  },
  {
    title: `Theater "Cosmos"`,
    description: `Great place and great atmosphere. Every holiday is a new and interesting photo zone`,
    position: [57.13434,65.57756],
    rating: 4.3,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.couples.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Respubliki street, 165a`
  },
  {
    title: `Cafe/bar "Olga"`,
    description: `The absence of a dress code and face control, a democratic atmosphere, prompt and accurate security work, which is important, friendly staff`,
    position: [57.12412 ,65.60256],
    rating: 3.5,
    criteria: [options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.company.friends.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Respubliki street, 207`
  },
  {
    title: `Golden Sunset Nightclub`,
    description: `A good hall, diverse music, the atmosphere is not annoying, the menu is not bad. The prices are reasonable`,
    position: [57.11727,65.59247],
    rating: 4.1,
    criteria: [options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.company.friends.title,options.where.inside.title,options.when.evening.title,],
    address: `Russia, Tyumen city, 30 let Pobedy street, 95`
  },
  {
    title: `Youth theater "Engagement"`,
    description: `The theater is hidden in the courtyard of houses. From the stop you need to walk on foot. There is parking for cars. There is a pleasant atmosphere inside the theater. Clear. There is a cafeteria with a narrow assortment. They are met and escorted by theater workers`,
    position: [57.1111,65.59139],
    rating: 4.6,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.couples.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Olimpiyskaya street, 8a`
  },
  {
    title: `Dining room "Like at home"`,
    description: `I really liked the place: the interior, the food, and the atmosphere, the staff is very friendly. Really like at home, where you are always welcome and welcome.`,
    position: [57.11734,65.57935],
    rating: 4.9,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.couples.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Permyakova street, 35 str 1`
  },
  {
    title: `Bar "Shashlykoff"`,
    description: `Delicious meat. Cozy atmosphere. Good menu. Adequate prices. Sometimes loud music, but not critical. Cool waiters, friendly, neat!`,
    position: [57.11497,65.57338],
    rating: 4.7,
    criteria: [options.age.students.title,options.age.middleAge.title,options.category.company.title,options.company.friends.title,options.where.inside.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Permyakova street, 62 str 1`
  },
  {
    title: `Cafe "Bukhara"`,
    description: `Excellent cafe � good atmosphere, recently renovated, excellent children's playground, there is a separate cute children's menu. It is better to book a table in advance by phone, as the place is popular.`,
    position: [57.10784,65.58376],
    rating: 4.3,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Shirotnaya street, 106a`
  },
  {
    title: `Restaurant "Omar Khayyam"`,
    description: `Excellent cafe, stylish, with a twist, the choice of dishes is good, delicious, there is a summer veranda. The staff is attentive, friendly, prices are reasonable.`,
    position: [57.10287,65.57335],
    image: 'https://img01.rl0.ru/afisha/c568x324i/www.afisha.ru/uploads/images/6/15/6151f939928249d798b6ce2c38ca7b02.jpg',
    rating: 4.4,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Mikhaila Speranskogo street, 17`
  },
  {
    title: `Bar "Ermolaev"`,
    description: `Not a bad place. It's cozy to sit and chat with friends over a mug of delicious beer. Business lunches at a very affordable price. The staff is responsive.`,
    position: [57.09807,65.58653],
    rating: 4.8,
    criteria: [options.age.students.title,options.age.middleAge.title,options.category.company.title,options.company.friends.title,options.where.inside.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Montazhnikov street, 61`
  },
  {
    title: `Bar "Ermolaev"`,
    description: `Not a bad place. It's cozy to sit and chat with friends over a mug of delicious beer. Business lunches at a very affordable price. The staff is responsive.`,
    position: [57.17134,65.55643],
    rating: 4.8,
    criteria: [options.age.students.title,options.age.middleAge.title,options.category.company.title,options.company.friends.title,options.where.inside.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Gazovikov street, 63`
  },
  {
    title: `Cafe "Crimea"`,
    description: `A very decent cafe, the prices are normal, delicious...maintenance and service is ok`,
    position: [57.09518,65.60024],
    rating: 4.4,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Narodnaya street, 50`
  },
  {
    title: `Restaurant "Noodle wok & pasta"`,
    description: `A very nice place! Delicious dishes, pleasant interior, friendly staff!`,
    position: [57.11884,65.50815],
    rating: 4.7,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, proezd 6-y Gubernsky street, 1`
  },
  {
    title: `Restaurant "Maxim"`,
    description: `A wonderful country restaurant with a warm atmosphere. Everything is very tasty, attentive service. Very cozy atmosphere.`,
    position: [57.11691,65.47149],
    rating: 5,
    image: 'https://maxim-rest.ru/upload/iblock/cc4/cc49282628be913cf962fcbb94601fd2.jpg',
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, oblast Tyumenskaya city`
  },
  {
    title: `Pivozavod Bar`,
    description: `A great place to sit well with the company. The menu assortment is quite diverse. The situation is excellent, clean. The waiters are friendly.`,
    position: [57.13768,65.48563],
    rating: 4.7,
    criteria: [options.age.students.title,options.age.middleAge.title,options.category.company.title,options.company.friends.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, territoriya tsn Trud i otdykh street, 94`
  },
  {
    title: `Cinema`,
    description: `A great place to enjoy spending time watching a movie on the big screen. Clean, comfortable halls, conveniently located chairs, delicious popcorn.`,
    position: [57.1349,65.49393],
    rating: 5,
    image: 'https://s.afisha.ru/ms/CuTkKonIsFPmlJ6sT1uaTeFceSDTwZRnzeEfpzZESRA.jpg',
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.alone.title,options.company.friends.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Moskovsky trakt street, 118`
  },
  {
    title: `Cinema`,
    description: `A great place to enjoy spending time watching a movie on the big screen. Clean, comfortable halls, conveniently located chairs, delicious popcorn.`,
    position: [57.14873,65.56025],
    rating: 5,
    image: 'https://s.afisha.ru/ms/CuTkKonIsFPmlJ6sT1uaTeFceSDTwZRnzeEfpzZESRA.jpg',
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.alone.title,options.company.friends.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Maksima Gorkogo street, 70`
  },
  {
    title: `Cafe "Absheron"`,
    description: `Cozy atmosphere. Friendly staff. Attentive service. A large selection of dishes. What a delicious tea, fragrant jam!`,
    position: [57.15601,65.47082],
    rating: 4.4,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Avtoremontnaya street, 8 str 19`
  },
  {
    title: `Cafe "Staraya Gagra"`,
    description: `Always fresh and delicious food. Democratic prices. Home environment, no fuss! A great place for friendly meetings`,
    position: [57.15448,65.43011],
    rating: 4.3,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Mikhaila Yatsenko street, 23`
  },
  {
    title: `Tavern "Parnas"`,
    description: `Very nice place. Delicious food, good service, pleasant atmosphere. You can visit as a family, or gather a sincere company.`,
    position: [57.1714,65.55571],
    rating: 4.5,
    criteria: [options.age.students.title,options.age.middleAge.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Gazovikov street, 61`
  },
  {
    title: `Cafe "Stara Praha"`,
    description: `Good atmosphere. Comfortably. The waitresses are polite and tactful. The beer tastes good, and the chicken carcass with baked potatoes is beyond praise.`,
    position: [57.17088,65.56537],
    rating: 4.9,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Yu.-R.G.Ervye street, 30`
  },
  {
    title: `Samarkand Halal Cafe`,
    description: `A great cafe for those who just want to have a quiet lunch or dinner. They cook very tasty, the portions are huge, inexpensive`,
    position: [57.1815,65.55639],
    rating: 4.5,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, proezd Solnechny street, 3`
  },
  {
    title: `Cafe "Niagara"`,
    description: `Very cozy and comfortable cafe. They are always accepted with a smile. Very tasty food! The prices are reasonable, the service is good`,
    position: [57.182,65.57234],
    rating: 4,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Ratsionalizatorov street, 19`
  },
  {
    title: `Bar/night club "Florida"`,
    description: `Cool cafe, decent renovation, attentive staff, delicious food, modern music and no headache in the morning after cocktails!`,
    position: [57.16523,65.59945],
    rating: 3.8,
    criteria: [options.age.students.title,options.age.middleAge.title,options.category.company.title,options.company.friends.title,options.where.inside.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Melnikayte street, 10`
  },
  {
    title: `Bath/sauna "Rasputin baths"`,
    description: `A great place for a pleasant passing time. A good roomy steam room, cozy in the house, great for both family visits and men's company`,
    position: [57.19814,65.59637],
    rating: 4.8,
    criteria: [options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.company.title,options.company.friends.title,options.company.couples.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Veteranov truda street, 60/1`
  },
  {
    title: `Bar "Mug"`,
    description: `A great place, with its own special atmosphere. Delicious foam and good cuisine are supported by the kindness and responsiveness of the staff. The prices are reasonable. A great option for an evening with friends.`,
    position: [57.11565 ,65.55673],
    rating: 4.7,
    criteria: [options.age.students.title,options.age.middleAge.title,options.category.company.title,options.company.friends.title,options.where.inside.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Nikolaya Zelinskogo street, 5 k 1`
  },
  {
    title: `Restaurant "Peacock"`,
    description: `Peacock is the embodiment of oriental flavor. Lagman, pilaf, salads are masterpieces of culinary art.`,
    position: [57.11351,65.56068],
    rating: 4.4,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.colleagues.title,options.company.couples.title,options.where.inside.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Nikolaya Zelinskogo street, 17`
  },
  {
    title: `School Park`,
    description: `Nice park. Decent people, with children, family. There are no drinkers and smokers, i.e. without bad habits. Very fun, clean and culturally`,
    position: [57.1375,65.50332],
    rating: 4.2,
    criteria: [options.age.kids.title,options.age.middleAge.title,options.category.withChildren.title,options.category.withPets.title,options.company.friends.title,options.where.outside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, trakt Moskovsky street, 104`
  },
  {
    title: `Aviators Square`,
    description: `Nice, cozy square with a playground`,
    position: [57.14306,65.49846],
    rating: 3.4,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.withPets.title,options.category.alone.title,options.company.friends.title,options.company.couples.title,options.where.outside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Novaya street, 21`
  },
  {
    title: `Lev Rovnin Square`,
    description: `A beautiful place. You can work out on simulators, ride cars, eat a burger, lie on sun beds, repent on a swing.`,
    position: [57.11172,65.55318],
    rating: 4.3,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.withPets.title,options.category.alone.title,options.company.friends.title,options.company.couples.title,options.where.outside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Nikolaya Fedorova street, 28`
  },
  {
    title: `Square of Deputies`,
    description: `A good square for walking. There is a small church and a playground.`,
    position: [57.11159,65.58465],
    rating: 4,
    criteria: [options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withPets.title,options.category.alone.title,options.company.friends.title,options.company.couples.title,options.where.outside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city`
  },
  {
    title: `Nikolsky Square`,
    description: `A great place to run. There is a swing. Clean and cozy.`,
    position: [57.09387,65.61704],
    rating: 4.3,
    criteria: [options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withPets.title,options.category.alone.title,options.company.friends.title,options.company.couples.title,options.where.outside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Rodnikovaya street, 9a`
  },
  {
    title: `Boulevard named after. Anatoly Kosukhin`,
    description: `A chic boulevard, gives a sense of spaciousness, there is a fountain, benches, a lot of green spaces.`,
    position: [57.09705,65.63585],
    rating: 4.1,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.withPets.title,options.category.alone.title,options.company.friends.title,options.company.couples.title,options.where.outside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Borovskaya street, 5`
  },
  {
    title: `Square of Home front workers`,
    description: `A small square. There is a fountain. Basically, you can just take a walk.`,
    position: [57.11275,65.60013],
    rating: 4.1,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.withPets.title,options.category.alone.title,options.company.friends.title,options.company.couples.title,options.where.outside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Olimpiyskaya street, 36`
  },
  {
    title: `Komsomolsky Square`,
    description: `A good place for walking.Excellent slide and skating rink (free)`,
    position: [57.13824,65.52426],
    rating: 4.3,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.withPets.title,options.category.alone.title,options.company.friends.title,options.company.couples.title,options.where.outside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city`
  },
  {
    title: `Zatyumensky Ecopark`,
    description: `There are a lot of different playgrounds: sports, children's, educational. People of absolutely all ages can actively relax. There are many places along the park where you can have a snack, drink coffee, rent bicycles, scooters and ride children on horses!`,
    position: [57.16315,65.46517],
    rating: 4.9,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.withPets.title,options.category.alone.title,options.company.friends.title,options.company.couples.title,options.where.outside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city`
  },
  {
    title: `Zarechny Park`,
    description: `It's good to go with children, there is a playground, there are sun beds so that you can relax in the sun. Beautiful view. There are electric scooters nearby, you can take a ride.`,
    position: [57.1769,65.54232],
    rating: 4.2,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.withPets.title,options.category.alone.title,options.company.friends.title,options.company.couples.title,options.where.outside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city`
  },
  {
    title: `Russian-Korean Friendship Park`,
    description: `The central sculpture of the dragon is simply a masterpiece! An interesting place for a photo.  In 2020, apple trees are planted around the square, in a couple of years, when they grow up, there will be a gorgeous place with landscaping. The area around is developing, residential and public buildings are being built.`,
    position: [57.16762,65.5898],
    rating: 4.1,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.withPets.title,options.category.alone.title,options.company.friends.title,options.company.couples.title,options.where.outside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city`
  },
  {
    title: `Gilevskaya grove`,
    description: `A large cozy park, both for walking and jogging, and for relaxing with children. Barbecue areas, river, lake. You can ride a boat, electric scooters, motorcycles and rickshaws. Volleyball and football grounds are attached.`,
    position: [57.1265,65.63106],
    rating: 5,
    image: 'https://gorod-t.info/upload/resize_cache/iblock/bea/900_900_1/3001.jpg',
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.withPets.title,options.category.company.title,options.category.alone.title,options.company.friends.title,options.company.couples.title,options.where.outside.title,options.when.morning.title,options.when.afternoon.title,],
    address: `Russia, Tyumen city`
  },
  {
    title: `Gagarin Park`,
    description: `A great place to run, in a beautiful forest you forget that you are in the city. It is noteworthy that the forest is divided into a pine forest and a birch grove. Lots of paths for walking, jogging`,
    position: [57.17346,65.61726],
    rating: 4.7,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.withPets.title,options.category.alone.title,options.company.friends.title,options.company.couples.title,options.where.outside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city`
  },
  {
    title: `Friendship Garden`,
    description: `A good park, there are benches, dog walking, the house has a Playground, you can walk with children, in the evenings in the warm season there are a lot of young people and not only. In general, a good park.`,
    position: [57.18044,65.58934],
    rating: 4.2,
    criteria: [options.age.kids.title,options.age.elderly.title,options.age.students.title,options.age.middleAge.title,options.category.withChildren.title,options.category.withPets.title,options.category.alone.title,options.company.friends.title,options.company.couples.title,options.where.outside.title,options.when.morning.title,options.when.afternoon.title,options.when.evening.title,],
    address: `Russia, Tyumen city, Veteranov truda street, 1/1`
  }
].map((item) => ({...item, id: uuidv4()}));