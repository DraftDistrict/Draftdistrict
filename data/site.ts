// ─────────────────────────────────────────────────────────────
// EDITABLE SITE CONTENT — replace placeholder values here.
// All pages read from this single file.
// ─────────────────────────────────────────────────────────────

import type { StaticImageData } from "next/image";
import karaokeNight from "@/public/events/karaoke-night.jpg";
import djStanDaMan from "@/public/events/dj-stan-da-man.jpg";
import smokingGiants from "@/public/events/smoking-giants.jpg";
import marrisBeckett from "@/public/events/marris-beckett.jpg";
import mojoUniverse from "@/public/events/mojo-universe.jpg";
import steveEwingBand from "@/public/events/steve-ewing-band.jpg";
import loneWonders from "@/public/events/lone-wonders.jpg";
import fryProject from "@/public/events/fry-project.jpg";

/** `rect` crops the source (x,y,w,h in original pixels) before resizing. */
const u = (id: string, w = 1600, rect?: string) =>
  `https://images.unsplash.com/${id}?${rect ? `rect=${rect}&` : ""}auto=format&fit=crop&w=${w}&q=80`;

// Paths starting with /menu/ are Pexels photos (free license) hosted in public/menu, so
// they load without depending on Pexels' servers.

export const img = {
  // venue & drinks
  crowdBar: u("photo-1671368913134-c211bc02487f", 1600, "0,230,2849,1842"), // cropped below the black ceiling
  neonTaps: u("photo-1759171053149-d5cce4261405"),
  boothTv: u("photo-1774978238266-238686d8de33"),
  gameRoom: u("photo-1788404881130-386f1723f711"),
  beerTaps: u("photo-1567696911980-2eed69a46042"),
  beerGlasses: u("photo-1600788886242-5c96aabe3757"),
  friendsMugs: u("photo-1513309914637-65c20a5962e1"),
  friendsCheers: u("photo-1575037614876-c38a4d44f5b8"),
  friendsTable: u("photo-1681641095463-b4d3693a0ee3"),
  martini: u("photo-1597075687490-8f673c6c17f6"),
  bartender: u("photo-1647776112336-72f4c30fafc1"),
  bartenderPour: u("photo-1623408859815-22534357b3db"),
  burgerSpread: u("photo-1644447381290-85358ae625cb"),
  // wings
  wingsGlaze: "/menu/wings-glaze.jpg",
  wingsPlate: u("photo-1608039755401-742074f0548d"),
  // appetizers
  appetizerPlatter: "/menu/appetizer-platter.jpg",
  tRav: "/menu/t-rav.jpg",
  jalapenoRavioli: u("photo-1715963098747-94a31f2cad6f"),
  potatoSkins: "/menu/potato-skins.jpg",
  breadedMushrooms: "/menu/breaded-mushrooms.jpg",
  cheeseCurds: u("photo-1747694934209-da49a5935899"),
  friedPickles: u("photo-1641428544289-7fe897a346ed"),
  macPoppers: u("photo-1772795598475-ac6071eb789b"),
  cashewChicken: u("photo-1633945488458-f8cc1f3a0144"),
  cajunShrimp: u("photo-1553557202-e8e60357f061"),
  jalapenoPoppers: "/menu/jalapeno-poppers.jpg",
  onionRings: u("photo-1639024471283-03518883512d"),
  miniTacos: "/menu/mini-tacos.jpg",
  chipsSalsa: u("photo-1634233822146-5cd9c24fdab0"),
  garlicCheeseBread: u("photo-1761344788266-5f6957aeea33"),
  nachos: "/menu/nachos.jpg",
  // wraps
  blackenedChickenWrap: "/menu/blackened-chicken-wrap.jpg",
  buffaloChickenWrap: "/menu/buffalo-chicken-wrap.jpg",
  chickenCaesarWrap: "/menu/chicken-caesar-wrap.jpg",
  // burgers
  draftDistrictBurger: u("photo-1766735126781-1b2527043bf0"),
  charbroiledCheeseburger: u("photo-1568901346375-23c9450c58cd"),
  singleSmash: u("photo-1678110707493-8d05425137ac"),
  doubleSmash: u("photo-1607013251379-e6eecfffe234"),
  tijuanaCrunch: "/menu/tijuana-crunch.jpg",
  baconCheeseburger: u("photo-1773394985083-48ebbd05de99"),
  mushroomSmash: u("photo-1683882330182-eb8f64d7231c"),
  friscoMelt: u("photo-1655279563187-a4010cc494f5"),
  sliders: "/menu/sliders.jpg",
  // pastas
  cajunChickenPenne: u("photo-1555949258-eb67b1ef0ceb"),
  vegCajunPenne: u("photo-1645193139415-e50fe46ac5d7"),
  // salads
  houseSalad: u("photo-1621634892819-80f7874c96dd"),
  chefSalad: "/menu/chef-salad.jpg",
  caesarSalad: u("photo-1746211108786-ca20c8f80ecd"),
  // tacos & quesadillas
  fishTaco: "/menu/fish-taco.jpg",
  srirachaChickenTaco: "/menu/sriracha-chicken-taco.jpg",
  beefTaco: "/menu/beef-taco.jpg",
  chickenQuesadilla: "/menu/chicken-quesadilla.jpg",
  cheeseQuesadilla: "/menu/cheese-quesadilla.jpg",
  baconCheeseQuesadilla: "/menu/bacon-cheese-quesadilla.jpg",
  // entrées, sides, desserts
  fishAndChips: u("photo-1579208030886-b937da0925dc"),
  smotheredChicken: "/menu/smothered-chicken.jpg",
  houseFries: u("photo-1630384060421-cb20d0e0649d"),
  sweetPotatoFries: u("photo-1745792714512-77cffdb16020"),
  brownieSundae: u("photo-1606884285898-277317a7bf12"),
  pretzelBites: u("photo-1576830674034-629cf99e5b62"),
  // sandwiches
  primeDip: "/menu/prime-dip.jpg",
  philadelphia: "/menu/philadelphia.jpg",
  draftDistrictChicken: u("photo-1778362561139-84fc85c97fe0"),
  cajunChickenSandwich: "/menu/cajun-chicken-sandwich.jpg",
  chickenBaconSandwich: "/menu/chicken-bacon-sandwich.jpg",
  crispyChickenSandwich: "/menu/crispy-chicken-sandwich.jpg",
  fishSandwich: "/menu/fish-sandwich.jpg",
  turkeyClub: u("photo-1553909489-cd47e0907980"),
  blt: u("photo-1722041220514-f6a26e286f2e"),
  // pizza
  pizza: u("photo-1544982503-9f984c14501a"),
  pizzaPull: u("photo-1651978595416-9956a5fb8f7a"),
  supremePizza: u("photo-1604382354936-07c5d9983bd3"),
  meatLoversPizza: u("photo-1628840042765-356cda07504e"),
  deluxePizza: u("photo-1705286324371-d6a6d9519dc2"),
  buffaloChickenPizza: "/menu/buffalo-chicken-pizza.jpg",
  hawaiianPizza: u("photo-1562835155-a7c2a225e97d"),
};

export const site = {
  name: "The Draft District",
  fullName: "The Draft District Sports Bar & Grill",
  tagline: "Good food. Good drinks. Good times.",
  slogan: "Game Day Every Day",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thedraftdistrict.com", // PLACEHOLDER domain
  phoneDisplay: "(314) 222-9876",
  phoneTel: "tel:+13142229876",
  address: {
    street: "12068 Dorsett Rd",
    city: "Maryland Heights",
    state: "MO",
    zip: "63043",
  },
  /** `dayNums` use JS getDay() numbering: 0 = Sunday … 6 = Saturday. */
  hours: [
    { days: "Monday – Tuesday", short: "Mon–Tue", time: "11 AM – 11 PM", dayNums: [1, 2] },
    { days: "Wednesday – Sunday", short: "Wed–Sun", time: "11 AM – 1 AM", dayNums: [3, 4, 5, 6, 0] },
  ],
  hoursSummary: "Mon–Tue 11 AM – 11 PM · Wed–Sun 11 AM – 1 AM",
  timeZone: "America/Chicago",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=12068+Dorsett+Rd,+Maryland+Heights,+MO+63043",
  mapEmbedUrl: "https://www.google.com/maps?q=12068+Dorsett+Rd,+Maryland+Heights,+MO+63043&output=embed",
  socials: { facebook: "#", instagram: "#", tiktok: "#" }, // PLACEHOLDER
  rating: { average: "4.8", count: "320+" }, // PLACEHOLDER until live reviews
};

/** Hours row for the restaurant's local day (St. Louis time), regardless of the visitor's time zone. */
export function hoursForDay(date = new Date()) {
  const weekday = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: site.timeZone }).format(date);
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(weekday);
  return site.hours.find((h) => h.dayNums.includes(day));
}

export const navLinks = [
  { to: "/menus", label: "Menus" },
  { to: "/delivery", label: "Delivery" },
  { to: "/events", label: "Events" },
  { to: "/jobs", label: "Jobs" },
  { to: "/contact", label: "Contact Us" },
];

export const tickerItems = [
  "GAME DAY EVERY DAY",
  "CATCH EVERY GAME ON OUR BIG SCREENS",
  "GATEWAY CITY JUMBO WINGS · 11 HOUSE SAUCES",
  "WE PROUDLY SUPPORT ST. LOUIS SPORTS",
  "GOOD FOOD · GOOD DRINKS · GOOD TIMES",
  "THANK YOU FOR SUPPORTING LOCAL!",
];

export const promoItems = [
  "GAME DAY EVERY DAY",
  "GATEWAY CITY JUMBO WINGS",
  "ST. LOUIS T-RAV",
  "THANK YOU FOR SUPPORTING LOCAL",
];

// ── MENU ──────────────────────────────────────────────────────

export type MenuTag = "POPULAR" | "NEW";

export interface MenuItem {
  name: string;
  desc: string;
  /** Single price, e.g. "$10.99" or an add-on like "+$1.99". */
  price?: string;
  /** Size/option pricing, shown instead of `price`. */
  prices?: { label: string; price: string }[];
  /** Choices that belong to this one item, e.g. wing sauces. */
  choices?: { label: string; options: string[] };
  /** Extra search terms — nicknames guests use that aren't in the name or description. */
  keywords?: string[];
  tags?: MenuTag[];
  image?: string;
  imageAlt?: string;
}

/** House info shown above a category — plain text or a set of chips (sauces, toppings…). */
export interface MenuNote {
  label: string;
  text?: string;
  chips?: string[];
  /** Span the full row (long chip lists). */
  wide?: boolean;
}

export interface MenuCategory {
  id: string;
  label: string;
  notes?: MenuNote[];
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    id: "wings",
    label: "Wings",
    items: [
      { name: "Gateway City Jumbo Wings", keywords: ["chicken wings", "boneless"], desc: "Crispy traditional or boneless wings, freshly fried to order and finished in your choice of sauce, or served naked with the sauce on the side.", prices: [{ label: "8 PC · 1 sauce", price: "$14.99" }, { label: "16 PC · 2 sauces", price: "$27.99" }], choices: { label: "Sauces", options: ["Draft District Special Blend", "Boom Boom", "Buffalo", "Sriracha Lime", "Honey BBQ", "Hot Honey", "Garlic Parmesan", "Lemon Pepper", "Mango Habanero", "Chipotle Barbeque", "Dry Rub"] }, tags: ["POPULAR"], image: img.wingsGlaze, imageAlt: "Sauced jumbo chicken wings with celery and carrots" },
    ],
  },
  {
    id: "appetizers",
    label: "Appetizers",
    items: [
      { name: "Platter", desc: "Mix of any three appetizers.", price: "$14.99", image: img.appetizerPlatter, imageAlt: "Platter of assorted fried appetizers with dipping sauces" },
      { name: "T-RAV", keywords: ["trav", "toasted ravioli"], desc: "A St. Louis favorite, fried to golden perfection, dusted with Parmesan, and served with warm marinara for dipping.", price: "$10.99", tags: ["POPULAR"], image: img.tRav, imageAlt: "Crispy toasted ravioli" },
      { name: "Jalapeño Ravioli", desc: "Golden-fried ravioli filled with a bold, spicy cheese blend, served with warm marinara for the perfect kick.", price: "$10.99", image: img.jalapenoRavioli, imageAlt: "Golden fried ravioli with marinara for dipping" },
      { name: "Potato Skins", desc: "Loaded with crispy bacon, melted cheddar, and served with cool sour cream on the side.", price: "$11.99", image: img.potatoSkins, imageAlt: "Loaded potato skins with melted cheese and scallions" },
      { name: "Breaded Mushrooms", desc: "White button mushrooms, breaded and deep-fried until golden, served with ranch or creamy house-made horsey sauce.", price: "$10.99", image: img.breadedMushrooms, imageAlt: "Crispy fried mushrooms with dipping sauce" },
      { name: "Cheese Curds", desc: "Golden, crispy fried cheese coated in a light garlic breading and served with smooth marinara.", price: "$10.99", image: img.cheeseCurds, imageAlt: "Fried cheese curds with dipping sauce" },
      { name: "Southern Fried Pickles", desc: "Fried to a crisp, golden finish and served with a bold cayenne sauce.", price: "$10.99", image: img.friedPickles, imageAlt: "Breaded fried pickle spears with dipping sauce" },
      { name: "Macaroni and Cheese Poppers", desc: "Creamy macaroni and cheese coated with bread crumbs, fried until golden and crispy.", price: "$10.99", image: img.macPoppers, imageAlt: "Golden fried mac and cheese bites with dipping sauce" },
      { name: "Cashew Chicken", desc: "Bite-sized chicken pieces coated in a flour-and-egg mixture, fried until golden and crispy.", price: "$10.99", image: img.cashewChicken, imageAlt: "Plate of crispy fried chicken bites" },
      { name: "Cajun Shrimp", desc: "Crispy, golden-fried shrimp tossed in a bold blend of authentic Cajun spices.", price: "$12.99", image: img.cajunShrimp, imageAlt: "Basket of golden fried shrimp" },
      { name: "Fried Jalapeño Poppers", desc: "Crispy fried jalapeño poppers filled with smooth, melty cheese and served with house-made cayenne sauce.", price: "$9.99", image: img.jalapenoPoppers, imageAlt: "Fried jalapeño poppers with dipping sauces" },
      { name: "Onion Rings", desc: "Thick-cut, beer-battered onion rings fried crisp and served with house-made cayenne sauce.", prices: [{ label: "Side", price: "$8.99" }, { label: "Full", price: "$10.99" }], image: img.onionRings, imageAlt: "Pile of beer-battered onion rings" },
      { name: "Mini Tacos", desc: "Crispy deep-fried chicken tacos served with salsa and sour cream. Add queso or beer cheese +$0.99.", price: "$9.99", image: img.miniTacos, imageAlt: "Crispy rolled mini tacos with salsa" },
      { name: "Warm Tortilla Chips", desc: "Served with salsa or smooth queso.", prices: [{ label: "Salsa", price: "$7.99" }, { label: "Queso", price: "$8.99" }], image: img.chipsSalsa, imageAlt: "Tortilla chips with salsa" },
      { name: "Garlic Cheese Bread", desc: "Two slices of warm garlic bread topped with melted cheese and served with marinara.", price: "$5.99", image: img.garlicCheeseBread, imageAlt: "Toasted garlic bread with melted cheese and herbs" },
      { name: "Millwoods Macho Nachos", keywords: ["nachos"], desc: "Crispy tortilla chips loaded with your choice of chicken or seasoned ground beef, cheddar, lettuce, pico de gallo and sour cream. Served with salsa.", price: "$15.99", tags: ["POPULAR"], image: img.nachos, imageAlt: "Loaded nachos with seasoned beef, jalapeños and sour cream" },
    ],
  },
  {
    id: "wraps",
    label: "Wraps",
    notes: [
      { label: "Served with", text: "Your choice of side" },
      { label: "Premium sides", text: "+$3.99" },
    ],
    items: [
      { name: "Blackened Grilled Chicken Wrap", desc: "Blended lettuce with grilled chicken, tomatoes, onions, sweet peppers, bacon, cheddar cheese and ranch.", price: "$12.99", image: img.blackenedChickenWrap, imageAlt: "Grilled chicken wrap sliced in half" },
      { name: "Buffalo Chicken Wrap", desc: "Crispy fried chicken tossed in buffalo sauce with blended lettuce, tomatoes, onions, sweet peppers, bacon, cheddar cheese and ranch.", price: "$12.99", image: img.buffaloChickenWrap, imageAlt: "Chicken wrap served with fries" },
      { name: "Chicken Caesar Wrap", desc: "Crisp romaine hearts with seasoned chicken, ripe tomatoes, sweet red onions, Parmesan cheese and creamy Caesar dressing.", price: "$12.99", image: img.chickenCaesarWrap, imageAlt: "Chicken Caesar wrap with romaine and croutons" },
    ],
  },
  {
    id: "burgers",
    label: "Burgers",
    notes: [
      { label: "Served with", text: "Lettuce, tomato, pickle, onion and your choice of side" },
      { label: "Cheese", text: "American, Swiss, Provolone, Pepper Jack or soft cheddar" },
      { label: "Extras", text: "Premium sides +$3.99 · Add bacon or fried egg +$1.99" },
    ],
    items: [
      { name: "Draft District Burger", desc: "1/2 lb ground beef, pepper jack, bacon, barbeque chipotle and onion ring.", price: "$15.99", tags: ["POPULAR"], image: img.draftDistrictBurger, imageAlt: "Tall bacon cheeseburger topped with an onion ring" },
      { name: "Charbroiled Cheeseburger", desc: "A Draft District classic — a charbroiled burger topped with your choice of cheese.", price: "$14.99", image: img.charbroiledCheeseburger, imageAlt: "Charbroiled cheeseburger with lettuce and tomato" },
      { name: "Single Smash Burger", desc: "A single 1/4 lb smashed patty with your choice of toppings and cheese.", price: "$10.99", image: img.singleSmash, imageAlt: "Single smash cheeseburger" },
      { name: "Double Smash Burger", desc: "Two juicy smashed patties with your choice of toppings and cheese.", price: "$13.99", image: img.doubleSmash, imageAlt: "Double smash cheeseburger with pickles" },
      { name: "Tijuana Crunch", desc: "Topped with pico de gallo, cheddar cheese, crispy fried jalapeños and mexi-ranch.", price: "$14.99", image: img.tijuanaCrunch, imageAlt: "Cheeseburger topped with jalapeños, served with fries" },
      { name: "Bacon Cheeseburger", desc: "Bacon and cheddar cheese.", price: "$15.99", image: img.baconCheeseburger, imageAlt: "Bacon cheeseburger held in two hands" },
      { name: "Mushroom Smash", desc: "Sautéed mushrooms, caramelized onions and your choice of cheese, stacked on a toasted bun.", price: "$14.99", image: img.mushroomSmash, imageAlt: "Cheeseburger topped with sautéed mushrooms" },
      { name: "Frisco Melt", desc: "Two smashed patties on toasted sourdough with American cheese, Swiss cheese and Thousand Island dressing.", price: "$13.99", image: img.friscoMelt, imageAlt: "Patty melt on toasted bread with melted cheese" },
      { name: "Slider", keywords: ["sliders", "mini burger"], desc: "Choice of beef or chicken slider with cheese, sauce and toppings, plus a regular side.", price: "$3.99", image: img.sliders, imageAlt: "Three slider burgers on a wooden board" },
    ],
  },
  {
    id: "pastas",
    label: "Pastas",
    items: [
      { name: "Cajun Kick Chicken Penne", desc: "Penne tossed in creamy parmesan queso and butter, seasoned with Cajun spices and loaded with grilled chicken, broccoli, onions, green peppers and jalapeños.", price: "$13.99", image: img.cajunChickenPenne, imageAlt: "Creamy penne pasta in a bowl" },
      { name: "Veg Cajun Penne", desc: "Penne tossed in creamy parmesan queso and butter, seasoned with Cajun spices and loaded with fresh broccoli, onions and green peppers. Mushrooms or jalapeños +$0.99.", price: "$12.99", image: img.vegCajunPenne, imageAlt: "Penne pasta with broccoli" },
    ],
  },
  {
    id: "salads",
    label: "Salads",
    notes: [
      { label: "Dressings", chips: ["Ranch", "Blue Cheese", "Thousand Island", "Honey Mustard", "Caesar", "Balsamic", "Italian"] },
      { label: "Add chicken", text: "Grilled or fried +$3.99" },
    ],
    items: [
      { name: "House Salad", desc: "Lettuce blend with diced tomatoes, croutons, onions and shredded cheese.", price: "$9.99", image: img.houseSalad, imageAlt: "Fresh house salad in a white bowl" },
      { name: "Chef Salad", desc: "Lettuce blend with ham, turkey, bacon, red onion, egg, shredded cheese and croutons.", price: "$12.99", image: img.chefSalad, imageAlt: "Chef salad with ham, egg and cheese" },
      { name: "Caesar Salad", desc: "Crispy romaine, Parmesan and croutons tossed in creamy Caesar dressing.", price: "$9.99", image: img.caesarSalad, imageAlt: "Caesar salad with croutons" },
    ],
  },
  {
    id: "pizza",
    label: "Pizza",
    notes: [
      { label: "Sauce", chips: ["Italian Marinara", "BBQ", "Chipotle Ranch"] },
      { label: "Cheese", chips: ["Blended", "Mozzarella"] },
      { label: "Extras", text: "Additional toppings +$0.99. Specialty pizzas are priced on top of the one-topping pizza." },
      { label: "Toppings", wide: true, chips: ["Italian Sausage", "Pepperoni", "Bacon", "Hamburger", "Ham", "Onions", "Green Peppers", "Mushrooms", "Black Olives", "Jalapeños", "Diced Tomatoes"] },
    ],
    items: [
      { name: "One Topping Pizza", keywords: ["pepperoni pizza", "cheese pizza", "build your own"], desc: "Pick your sauce, cheese and one topping.", prices: [{ label: "9″", price: "$9.00" }, { label: "12″", price: "$12.00" }, { label: "14″", price: "$15.00" }], tags: ["POPULAR"], image: img.pizza, imageAlt: "Pepperoni pizza" },
      { name: "Supreme Pizza", desc: "Sausage, onions and green peppers.", price: "+$1.99", image: img.supremePizza, imageAlt: "Supreme pizza with sausage and vegetables" },
      { name: "Meat Lovers Pizza", desc: "Sausage, bacon, pepperoni, ham, jalapeños and diced tomatoes.", price: "+$2.99", image: img.meatLoversPizza, imageAlt: "Meat lovers pizza with pepperoni and ham" },
      { name: "Deluxe Pizza", desc: "Sausage, ham, bacon, pepperoni, hamburger, mushrooms, green peppers, onions and olives.", price: "+$4.99", image: img.deluxePizza, imageAlt: "Fully loaded deluxe pizza" },
      { name: "Buffalo Chicken Pizza", desc: "Chicken, onions and green peppers.", price: "+$1.99", image: img.buffaloChickenPizza, imageAlt: "Buffalo chicken pizza" },
      { name: "Hawaiian Pizza", desc: "Ham and pineapple.", price: "+$1.99", image: img.hawaiianPizza, imageAlt: "Hawaiian pizza with ham and pineapple" },
    ],
  },
  {
    id: "entrees",
    label: "Entrées",
    items: [
      { name: "Fish & Chips", desc: "Three flaky, hand-breaded cod fillets fried crisp and golden, served with fries, coleslaw and tartar sauce.", price: "$16.99", image: img.fishAndChips, imageAlt: "Fried fish and chips" },
      { name: "Smothered Chicken", desc: "Marinated, hand-cut chicken breast topped with sautéed onions, peppers and melted provolone, served on a bed of dirty pasta with steamed broccoli.", price: "$15.99", image: img.smotheredChicken, imageAlt: "Chicken breast smothered in melted cheese" },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    items: [
      { name: "Regular Sides", keywords: ["fries", "french fries", "tots"], desc: "Fries, tater tots, chips, cole slaw, green beans, or mashed potatoes and gravy.", price: "$4.99", image: img.houseFries, imageAlt: "Basket of crispy fries" },
      { name: "Premium Sides", keywords: ["mac and cheese", "salad"], desc: "Side house salad, side Caesar salad, onion rings, sweet potato fries, pub mac n cheese or steamed broccoli. Add sour cream +$0.99.", price: "$5.99", image: img.sweetPotatoFries, imageAlt: "Sweet potato fries with a dipping sauce" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Brownie Sundae", keywords: ["ice cream", "dessert"], desc: "A warm, rich chocolate brownie topped with creamy vanilla ice cream, drizzled with chocolate sauce and finished with whipped cream.", price: "$8.99", image: img.brownieSundae, imageAlt: "Chocolate brownie topped with vanilla ice cream" },
      { name: "Cinnamon Pretzel Bites", desc: "Warm, soft pretzel bites tossed in cinnamon sugar, served with a side of cream cheese icing.", price: "$8.99", image: img.pretzelBites, imageAlt: "Soft pretzel bites with a dipping sauce" },
    ],
  },
  {
    id: "tacos",
    label: "Tacos",
    notes: [
      { label: "Served with", text: "Flour tortillas with your choice of fries or chips" },
      { label: "Premium side", text: "+$3.99" },
    ],
    items: [
      { name: "Fish Taco", desc: "Tacos with breaded cod, fresh pico de gallo, a Mexican-inspired slaw and a topping of sour cream.", price: "$12.99", image: img.fishTaco, imageAlt: "Fish tacos with slaw and sauce" },
      { name: "Sriracha Lime Chicken Taco", desc: "Tacos loaded with blackened chicken, our Sriracha-Lime sauce, pico de gallo, lettuce and sour cream.", price: "$12.99", image: img.srirachaChickenTaco, imageAlt: "Chicken tacos with salsa and sour cream" },
      { name: "Beef Taco", desc: "Tacos loaded with seasoned ground beef, topped with lettuce, shredded cheese, sour cream and pico de gallo.", price: "$13.99", image: img.beefTaco, imageAlt: "Beef tacos topped with cheese and salsa" },
    ],
  },
  {
    id: "quesadillas",
    label: "Quesadillas",
    items: [
      { name: "Chicken Quesadilla", desc: "A large warm flour tortilla stuffed with cheddar cheese, chicken, bacon and pico de gallo, served with sour cream and salsa.", price: "$13.99", image: img.chickenQuesadilla, imageAlt: "Chicken quesadilla cut into wedges" },
      { name: "Cheese Quesadilla", desc: "A large warm flour tortilla stuffed with cheddar cheese, served with sour cream and salsa.", price: "$11.99", image: img.cheeseQuesadilla, imageAlt: "Cheese quesadilla with salsa" },
      { name: "Bacon & Cheese Quesadilla", desc: "A large warm flour tortilla stuffed with cheddar cheese, bacon and pico de gallo, served with sour cream and salsa.", price: "$12.99", image: img.baconCheeseQuesadilla, imageAlt: "Quesadilla wedges with salsa and sour cream" },
    ],
  },
  {
    id: "sandwiches",
    label: "Sandwiches",
    notes: [
      { label: "Served with", text: "Your choice of side" },
      { label: "Premium sides", text: "+$3.99" },
    ],
    items: [
      { name: "Prime Dip", keywords: ["french dip", "roast beef", "prime rib"], desc: "The mother of all French dips — slow-roasted prime rib, thinly sliced and stacked on a fresh hoagie roll with Provolone, served with real au jus.", price: "$16.99", tags: ["POPULAR"], image: img.primeDip, imageAlt: "Beef sandwich on a hoagie roll" },
      { name: "The Philadelphia", keywords: ["philly", "cheesesteak", "cheese steak"], desc: "Tender prime rib, thinly sliced and topped with sautéed onions, sweet peppers and melted provolone on a toasted hoagie.", price: "$16.99", image: img.philadelphia, imageAlt: "Philly cheesesteak with melted cheese, onions and peppers" },
      { name: "Draft District Chicken Sandwich", desc: "8 oz fried chicken, marinara, Provolone cheese, lettuce, onion, tomato and pickles.", price: "$13.99", image: img.draftDistrictChicken, imageAlt: "Chicken sandwich with melted cheese and sauce" },
      { name: "Cajun Chicken Sandwich", desc: "5 oz grilled Cajun chicken, Pepper Jack cheese, lettuce, onion, tomato and pickles.", price: "$13.99", image: img.cajunChickenSandwich, imageAlt: "Grilled chicken sandwich with lettuce and tomato" },
      { name: "Chicken Bacon Sandwich", desc: "Marinated chicken layered with crispy bacon, melted provolone, and fresh lettuce, tomato, onion and pickles.", price: "$13.99", image: img.chickenBaconSandwich, imageAlt: "Chicken sandwich with bacon" },
      { name: "Chicken Sandwich", desc: "Crispy breaded chicken layered with lettuce, tomato and onion on a toasted bun.", price: "$12.99", image: img.crispyChickenSandwich, imageAlt: "Crispy fried chicken sandwich" },
      { name: "Fish Sandwich", desc: "Fried cod topped with American cheese, lettuce, tomato, onion, pickles and tartar sauce.", price: "$12.99", image: img.fishSandwich, imageAlt: "Crispy fish sandwich with fries" },
      { name: "Turkey Club", desc: "Piled high turkey with bacon, Swiss, American, lettuce, tomato, onion and mayonnaise on toasted sourdough.", price: "$13.99", image: img.turkeyClub, imageAlt: "Triple-decker club sandwich" },
      { name: "BLT", desc: "Crispy bacon layered with fresh lettuce, tomato and mayonnaise on toasted sourdough.", price: "$11.99", image: img.blt, imageAlt: "Bacon, lettuce and tomato sandwich" },
    ],
  },
];

export const menuItemCount = menu.reduce((n, c) => n + c.items.length, 0);

// ── EVENTS ────────────────────────────────────────────────────

export type EventType = "SPORTS" | "LIVE MUSIC" | "TRIVIA" | "SPECIALS";

export type EventItem = {
  id: string;
  month: string;
  day: string;
  weekday: string;
  type: EventType;
  name: string;
  /** Omit when the flyer gives no start time. */
  time?: string;
  desc: string;
  imageAlt: string;
  featured?: boolean;
} & (
  | { image: string; poster?: false }
  /**
   * Event flyer, shown in a 2:3 frame that it fills (trimming a little off flyers of another shape).
   * `posterPosition` picks which part stays (CSS object-position). A flyer much wider than 2:3 would
   * lose edge text — extend its canvas to 2:3 instead (see public/events/dj-stan-da-man.jpg) and set
   * `posterAspect` to the flyer's real shape. On phones flyers show at that real shape (default: the file's).
   */
  | { image: StaticImageData; poster: true; posterPosition?: string; posterAspect?: string }
);

export const events: EventItem[] = [
  { id: "lm-karaoke", month: "EVERY", day: "THU", weekday: "Every Thursday", type: "LIVE MUSIC", name: "Karaoke Night", time: "7:30 PM – 10:30 PM", desc: "Sing, eat, drink, have fun. Great music, drink specials and good vibes — all are welcome.", image: karaokeNight, imageAlt: "Karaoke Night poster — every Thursday, 7:30 to 10:30 PM", poster: true },
  { id: "lm-dj-stan", month: "EVERY", day: "FRI", weekday: "Friday Night", type: "LIVE MUSIC", name: "DJ Stan Da Man", time: "8:30 PM – Close", desc: "$3 draft beers & wells (10 to 1) and $4 Fireball & Rumple Minze. Show the post to the bartender for a free check-in shot.", image: djStanDaMan, imageAlt: "DJ Stan Da Man Friday Night poster with drink specials", poster: true, posterAspect: "1122 / 1402", posterPosition: "50% 14.2%" },
  { id: "lm-smoking-giants", month: "OCT", day: "17", weekday: "Saturday", type: "LIVE MUSIC", name: "The Smoking Giants", desc: "Live music at The Draft District.", image: smokingGiants, imageAlt: "The Smoking Giants poster — Saturday, October 17", poster: true, featured: true },
  { id: "lm-marris-beckett", month: "NOV", day: "07", weekday: "Saturday", type: "LIVE MUSIC", name: "Marris Beckett", desc: "Rock. Energy. Good times. Great music, cold drinks, good people — don't miss it!", image: marrisBeckett, imageAlt: "Marris Beckett live music poster — Saturday, November 7", poster: true },
  { id: "lm-mojo-universe", month: "NOV", day: "21", weekday: "Saturday", type: "LIVE MUSIC", name: "Mojo Universe", desc: "Live music on Saturday, Nov 21 — and back again Saturday, Dec 26.", image: mojoUniverse, imageAlt: "Mojo Universe live music poster — Saturdays, November 21 and December 26", poster: true },
  { id: "lm-steve-ewing", month: "NOV", day: "28", weekday: "Saturday", type: "LIVE MUSIC", name: "Steve Ewing Band", desc: "Saturday night live with the Steve Ewing Band.", image: steveEwingBand, imageAlt: "Steve Ewing Band poster — Saturday, November 28", poster: true },
  { id: "lm-lone-wonders", month: "JAN", day: "02", weekday: "Friday", type: "LIVE MUSIC", name: "Lone Wonders", desc: "Kick off 2027 with live music from Lone Wonders on Friday, Jan 2.", image: loneWonders, imageAlt: "Lone Wonders poster — Friday, January 2, 2027", poster: true },
  { id: "lm-fry-project", month: "JAN", day: "09", weekday: "Saturday", type: "LIVE MUSIC", name: "Fry Project", desc: "Live music on Saturday, Jan 9, 2027 — and back again Saturday, Feb 6.", image: fryProject, imageAlt: "Fry Project live music poster — Saturdays, January 9 and February 6, 2027", poster: true, posterPosition: "50% 29%" },
];

// ── REVIEWS (placeholder demo content — replace with live reviews) ──

export const reviews = [
  { name: "Marcus T.", text: "Gateway City wings in the Boom Boom sauce, a cold beer and the Cardinals on every screen. We're here every game day.", stars: 5 },
  { name: "Dana R.", text: "Called in a big takeout order for our fantasy draft and it was ready in 20 minutes, hot and correct. The Draft District Burger is unreal.", stars: 5 },
  { name: "Priya K.", text: "Great energy without being a nightclub. Screens everywhere you look, and the T-RAV and Prime Dip are dangerous.", stars: 4 },
];

// ── JOBS ──────────────────────────────────────────────────────

export const positions = [
  { title: "Server", type: "Full-time / Part-time", desc: "Own a section, know the menu cold, and bring the game-day energy to every table." },
  { title: "Bartender", type: "Full-time", desc: "Fast hands, clean pours, and composure when the whole bar orders at halftime." },
  { title: "Line Cook", type: "Full-time", desc: "Work the grill and fryers on the busiest nights of the week. Consistency is everything." },
  { title: "Host", type: "Part-time", desc: "The first face guests see. Run the door, the waitlist, and set the tone." },
  { title: "Dishwasher", type: "Part-time", desc: "The engine room of the kitchen. Nights and weekends, steady hours." },
];

export const benefits = [
  { title: "Flexible Scheduling", desc: "School, second jobs, family — we build the schedule around real life." },
  { title: "Team Environment", desc: "A tight crew that has each other's backs when the rush hits." },
  { title: "Employee Meals", desc: "Shift meals and staff discounts on the whole menu." },
  { title: "Growth Opportunities", desc: "Leads and managers are promoted from within first." },
];

// ── DELIVERY CONFIG ───────────────────────────────────────────

export const deliveryInfo = [
  { label: "Delivery Area", value: "Within ~5 miles of the restaurant — confirm your address when you call." },
  { label: "Minimum Order", value: "$15 minimum for delivery orders." },
  { label: "Delivery Fee", value: "$2.99 flat fee per delivery." },
  { label: "Estimated Time", value: "30–45 minutes, depending on the rush." },
  { label: "Delivery Hours", value: "Daily during kitchen hours, until 10 PM." },
];

export const locations = [
  {
    name: "The Draft District — Maryland Heights",
    address: `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`,
    hours: site.hoursSummary,
    phone: site.phoneDisplay,
    phoneTel: site.phoneTel,
  },
];
