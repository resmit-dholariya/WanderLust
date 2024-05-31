const sampleListings = [
  {
    _id: {
      $oid: "66567c2f75f84fe592f66168",
    },
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "wanderlust_DEV/qjqjlyldxwxw9qquteg0",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716987958/wanderlust_DEV/qjqjlyldxwxw9qquteg0.jpg",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    reviews: [
      {
        $oid: "665765653ce388d9bf5919c2",
      },
      {
        $oid: "665765843ce388d9bf5919d2",
      },
      {
        $oid: "665765a23ce388d9bf5919e6",
      },
      {
        $oid: "66577e4b3ce388d9bf591f6a",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      type: "Point",
      coordinates: [-118.68517, 34.034378],
    },
    category: "Beach",
    __v: 4,
  },
  {
    _id: {
      $oid: "66567c2f75f84fe592f66169",
    },
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "wanderlust_DEV/namhk5ymo5bnicfmcjlk",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716991317/wanderlust_DEV/namhk5ymo5bnicfmcjlk.webp",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    reviews: [
      {
        $oid: "665766303ce388d9bf5919f7",
      },
      {
        $oid: "665766473ce388d9bf591a07",
      },
      {
        $oid: "665766623ce388d9bf591a18",
      },
      {
        $oid: "66577e5a3ce388d9bf591f7b",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      type: "Point",
      coordinates: [-74.0059945, 40.7127492],
    },
    category: "Iconic-Cities",
    __v: 5,
  },
  {
    _id: {
      $oid: "66567c2f75f84fe592f6616a",
    },
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "wanderlust_DEV/by9ikfxvff10rzennoqx",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716988379/wanderlust_DEV/by9ikfxvff10rzennoqx.jpg",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    reviews: [
      {
        $oid: "665766783ce388d9bf591a27",
      },
      {
        $oid: "6657668e3ce388d9bf591a39",
      },
      {
        $oid: "665766bd3ce388d9bf591a5d",
      },
      {
        $oid: "66577e633ce388d9bf591f8c",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      type: "Point",
      coordinates: [-106.819885, 39.18869],
    },
    category: "Mountains",
    __v: 4,
  },
  {
    _id: {
      $oid: "66567c2f75f84fe592f6616b",
    },
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "wanderlust_DEV/bvzxglqyickrvjipdmlx",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716988478/wanderlust_DEV/bvzxglqyickrvjipdmlx.jpg",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    reviews: [
      {
        $oid: "665766d73ce388d9bf591a6c",
      },
      {
        $oid: "665766ef3ce388d9bf591a83",
      },
      {
        $oid: "6657670f3ce388d9bf591a94",
      },
      {
        $oid: "66577e723ce388d9bf591f9d",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      type: "Point",
      coordinates: [11.256129, 43.771485],
    },
    category: "Historical-Homes",
    __v: 4,
  },
  {
    _id: {
      $oid: "66567c2f75f84fe592f6616c",
    },
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "wanderlust_DEV/hutflk3nyzaupi9x0ptm",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716988577/wanderlust_DEV/hutflk3nyzaupi9x0ptm.jpg",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    reviews: [
      {
        $oid: "6657672c3ce388d9bf591aa3",
      },
      {
        $oid: "665767473ce388d9bf591aba",
      },
      {
        $oid: "665767643ce388d9bf591ad0",
      },
      {
        $oid: "66577e803ce388d9bf591fae",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      type: "Point",
      coordinates: [-122.6789, 45.52068],
    },
    category: "Campsite",
    __v: 4,
  },
  {
    _id: {
      $oid: "66567c2f75f84fe592f6616d",
    },
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "wanderlust_DEV/wme2xvhlclk68mfp0in5",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716989163/wanderlust_DEV/wme2xvhlclk68mfp0in5.jpg",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    reviews: [
      {
        $oid: "6657677b3ce388d9bf591adf",
      },
      {
        $oid: "6657678f3ce388d9bf591af1",
      },
      {
        $oid: "665767ae3ce388d9bf591b02",
      },
      {
        $oid: "66577e933ce388d9bf591fbf",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      type: "Point",
      coordinates: [-86.85176, 21.16188],
    },
    category: "Beach",
    __v: 4,
  },
  {
    _id: {
      $oid: "66567c2f75f84fe592f6616e",
    },
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "wanderlust_DEV/gfofvk7cupd3npjo8heu",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716989294/wanderlust_DEV/gfofvk7cupd3npjo8heu.jpg",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    reviews: [
      {
        $oid: "665774653ce388d9bf591b20",
      },
      {
        $oid: "665774793ce388d9bf591b2b",
      },
      {
        $oid: "6657748b3ce388d9bf591b35",
      },
      {
        $oid: "66577ea73ce388d9bf591fd3",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      coordinates: [-120.12787, 39.267319],
      type: "Point",
    },
    category: "Lake",
    __v: 4,
  },
  {
    _id: {
      $oid: "66567c2f75f84fe592f6616f",
    },
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "wanderlust_DEV/fcwnhmpnm7jqh1u43ca7",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716990160/wanderlust_DEV/fcwnhmpnm7jqh1u43ca7.webp",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    reviews: [
      {
        $oid: "665774b43ce388d9bf591b4e",
      },
      {
        $oid: "665774c23ce388d9bf591b59",
      },
      {
        $oid: "665774d73ce388d9bf591b63",
      },
      {
        $oid: "66577ebd3ce388d9bf591fe2",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      type: "Point",
      coordinates: [-118.24168, 34.054077],
    },
    category: "Trending",
    __v: 4,
  },
  {
    _id: {
      $oid: "66567c2f75f84fe592f66170",
    },
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "wanderlust_DEV/k1cmlc5qzwss3ifxhpuy",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716989774/wanderlust_DEV/k1cmlc5qzwss3ifxhpuy.jpg",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    reviews: [
      {
        $oid: "665774ec3ce388d9bf591b72",
      },
      {
        $oid: "665774fe3ce388d9bf591b8b",
      },
      {
        $oid: "6657750e3ce388d9bf591b95",
      },
      {
        $oid: "66577ecc3ce388d9bf591ff1",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      type: "Point",
      coordinates: [7.229043, 46.096067],
    },
    category: "Ski-in-out",
    __v: 4,
  },
  {
    _id: {
      $oid: "66567c2f75f84fe592f66171",
    },
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "wanderlust_DEV/djqdlt09pkxr2ulo3brg",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716990353/wanderlust_DEV/djqdlt09pkxr2ulo3brg.jpg",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    reviews: [
      {
        $oid: "6657752a3ce388d9bf591bae",
      },
      {
        $oid: "665775343ce388d9bf591bb9",
      },
      {
        $oid: "665775423ce388d9bf591bc3",
      },
      {
        $oid: "66577ed93ce388d9bf592000",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      coordinates: [30.536625, 38.820522],
      type: "Point",
    },
    category: "Woodlands",
    __v: 4,
  },
  {
    _id: {
      $oid: "66567c2f75f84fe592f66172",
    },
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "wanderlust_DEV/ddv5nd4vmimrm2nlhyni",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716990541/wanderlust_DEV/ddv5nd4vmimrm2nlhyni.jpg",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    reviews: [
      {
        $oid: "665775623ce388d9bf591bdc",
      },
      {
        $oid: "665775703ce388d9bf591be7",
      },
      {
        $oid: "665775803ce388d9bf591bf1",
      },
      {
        $oid: "66577ee73ce388d9bf59200f",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      type: "Point",
      coordinates: [4.9, 52.378],
    },
    category: "Historical-Homes",
    __v: 4,
  },
  {
    _id: {
      $oid: "66567c2f75f84fe592f66173",
    },
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "wanderlust_DEV/llidawturxcrg8qhnyys",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716990827/wanderlust_DEV/llidawturxcrg8qhnyys.jpg",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    reviews: [
      {
        $oid: "665775b03ce388d9bf591c0d",
      },
      {
        $oid: "665775be3ce388d9bf591c18",
      },
      {
        $oid: "665775d03ce388d9bf591c22",
      },
      {
        $oid: "66577ef43ce388d9bf592020",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      type: "Point",
      coordinates: [120.782905, 23.831716],
    },
    category: "Boat",
    __v: 5,
  },
  {
    _id: {
      $oid: "66567c2f75f84fe592f66174",
    },
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "wanderlust_DEV/yiymbouxckg3tg9zos1t",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716990989/wanderlust_DEV/yiymbouxckg3tg9zos1t.jpg",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    reviews: [
      {
        $oid: "665775f83ce388d9bf591c31",
      },
      {
        $oid: "665776093ce388d9bf591c43",
      },
      {
        $oid: "66577f013ce388d9bf59202f",
      },
      {
        $oid: "665780b43ce388d9bf592172",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      type: "Point",
      coordinates: [-0.22985, 51.74913],
    },
    category: "Rooms",
    __v: 4,
  },
  {
    _id: {
      $oid: "66567c2f75f84fe592f66175",
    },
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "wanderlust_DEV/e6uxmyfmpaheyy0k75ad",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716991126/wanderlust_DEV/e6uxmyfmpaheyy0k75ad.jpg",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    reviews: [
      {
        $oid: "665776273ce388d9bf591c5c",
      },
      {
        $oid: "6657763a3ce388d9bf591c6e",
      },
      {
        $oid: "665776483ce388d9bf591c7f",
      },
      {
        $oid: "66577f163ce388d9bf59203e",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      type: "Point",
      coordinates: [-71.0568, 42.35888],
    },
    category: "Iconic-Cities",
    __v: 4,
  },
  {
    _id: {
      $oid: "66567c2f75f84fe592f66176",
    },
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "wanderlust_DEV/a0rvxo84act3vfznez98",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716991187/wanderlust_DEV/a0rvxo84act3vfznez98.jpg",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    reviews: [
      {
        $oid: "665776593ce388d9bf591c8e",
      },
      {
        $oid: "665776693ce388d9bf591ca0",
      },
      {
        $oid: "6657767b3ce388d9bf591cb1",
      },
      {
        $oid: "66577f2c3ce388d9bf592052",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      type: "Point",
      coordinates: [115.2191175, -8.6524973],
    },
    category: "Amazing-Pools",
    __v: 4,
  },
  {
    _id: {
      $oid: "66567c2f75f84fe592f66177",
    },
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "wanderlust_DEV/a328pyw9dmpsgnnq7x0p",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716991388/wanderlust_DEV/a328pyw9dmpsgnnq7x0p.jpg",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    reviews: [
      {
        $oid: "6657768a3ce388d9bf591cc0",
      },
      {
        $oid: "665776a93ce388d9bf591cd2",
      },
      {
        $oid: "665776bd3ce388d9bf591ce3",
      },
      {
        $oid: "66577f403ce388d9bf592061",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      type: "Point",
      coordinates: [-115.57096, 51.176613],
    },
    category: "Mountains",
    __v: 4,
  },
  {
    _id: {
      $oid: "66567c2f75f84fe592f66178",
    },
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "wanderlust_DEV/oscydu4gaq1h1lgls8gz",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716991773/wanderlust_DEV/oscydu4gaq1h1lgls8gz.jpg",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    reviews: [
      {
        $oid: "665776ce3ce388d9bf591cf2",
      },
      {
        $oid: "665776e03ce388d9bf591d04",
      },
      {
        $oid: "665776f43ce388d9bf591d15",
      },
      {
        $oid: "66577f513ce388d9bf592070",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      coordinates: [-80.18537321875, 25.76513515625],
      type: "Point",
    },
    category: "Apartment",
    __v: 4,
  },
  {
    _id: {
      $oid: "66567c2f75f84fe592f66179",
    },
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "wanderlust_DEV/zbvktayoqzlmha4iv8ai",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716991878/wanderlust_DEV/zbvktayoqzlmha4iv8ai.jpg",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    reviews: [
      {
        $oid: "665777103ce388d9bf591d33",
      },
      {
        $oid: "6657771b3ce388d9bf591d3e",
      },
      {
        $oid: "6657772a3ce388d9bf591d48",
      },
      {
        $oid: "66577f5c3ce388d9bf59207f",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      type: "Point",
      coordinates: [98.390863, 7.882835],
    },
    category: "Bed-and-Breakfasts",
    __v: 4,
  },
  {
    _id: {
      $oid: "66567c2f75f84fe592f6617a",
    },
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "wanderlust_DEV/vuo9zehyodtdo6dhsqsr",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716992061/wanderlust_DEV/vuo9zehyodtdo6dhsqsr.webp",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    reviews: [
      {
        $oid: "665777593ce388d9bf591d60",
      },
      {
        $oid: "665777643ce388d9bf591d6b",
      },
      {
        $oid: "665777653ce388d9bf591d75",
      },
      {
        $oid: "66577f673ce388d9bf59208e",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      coordinates: [-4.228937, 57.477415],
      type: "Point",
    },
    category: "Castles",
    __v: 4,
  },
  {
    _id: {
      $oid: "66567c2f75f84fe592f6617b",
    },
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "wanderlust_DEV/uxnuhzyo6ozuy6visfqj",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716992304/wanderlust_DEV/uxnuhzyo6ozuy6visfqj.jpg",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    reviews: [
      {
        $oid: "665777933ce388d9bf591d8a",
      },
      {
        $oid: "6657779b3ce388d9bf591d95",
      },
      {
        $oid: "665777a83ce388d9bf591d9f",
      },
      {
        $oid: "66577f733ce388d9bf59209d",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      type: "Point",
      coordinates: [55.293941, 25.265941],
    },
    category: "Amazing-Pools",
    __v: 4,
  },
  {
    _id: {
      $oid: "66567c2f75f84fe592f6617c",
    },
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "wanderlust_DEV/mz8iufrrve3dxv4qsd4t",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716992388/wanderlust_DEV/mz8iufrrve3dxv4qsd4t.jpg",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    reviews: [
      {
        $oid: "665777c33ce388d9bf591db4",
      },
      {
        $oid: "665777d13ce388d9bf591dbf",
      },
      {
        $oid: "665777e63ce388d9bf591dc9",
      },
      {
        $oid: "66577f833ce388d9bf5920ac",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      type: "Point",
      coordinates: [-109.172599073804, 47.0725146587006],
    },
    category: "Cabins",
    __v: 4,
  },
  {
    _id: {
      $oid: "66567c2f75f84fe592f6617d",
    },
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "wanderlust_DEV/iqqmjypakdk6azfn21x1",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716992552/wanderlust_DEV/iqqmjypakdk6azfn21x1.jpg",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    reviews: [
      {
        $oid: "665778013ce388d9bf591dde",
      },
      {
        $oid: "6657780f3ce388d9bf591de9",
      },
      {
        $oid: "665778213ce388d9bf591df3",
      },
      {
        $oid: "66577f903ce388d9bf5920bb",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      type: "Point",
      coordinates: [25.328008, 37.446178],
    },
    category: "New",
    __v: 5,
  },
  {
    _id: {
      $oid: "66567c2f75f84fe592f6617e",
    },
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "wanderlust_DEV/arvhjg9y8ehc8heq5dqi",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716992704/wanderlust_DEV/arvhjg9y8ehc8heq5dqi.webp",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    reviews: [
      {
        $oid: "665778423ce388d9bf591e0b",
      },
      {
        $oid: "6657784f3ce388d9bf591e16",
      },
      {
        $oid: "665778603ce388d9bf591e20",
      },
      {
        $oid: "66577fc03ce388d9bf5920dd",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      coordinates: [-84.092347, 9.932191],
      type: "Point",
    },
    category: "Camping",
    __v: 4,
  },
  {
    _id: {
      $oid: "66567c2f75f84fe592f6617f",
    },
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "wanderlust_DEV/k9qiqwbzo55fimvfay8q",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716992900/wanderlust_DEV/k9qiqwbzo55fimvfay8q.jpg",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    reviews: [
      {
        $oid: "6657788a3ce388d9bf591e35",
      },
      {
        $oid: "665778a23ce388d9bf591e40",
      },
      {
        $oid: "665778ae3ce388d9bf591e4a",
      },
      {
        $oid: "66577fcc3ce388d9bf5920ec",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      type: "Point",
      coordinates: [-79.93863, 32.789284],
    },
    category: "Farm",
    __v: 4,
  },
  {
    _id: {
      $oid: "66567c2f75f84fe592f66180",
    },
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "wanderlust_DEV/igwuigcrdfgaisf1e4zn",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716993101/wanderlust_DEV/igwuigcrdfgaisf1e4zn.jpg",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    reviews: [
      {
        $oid: "665778cf3ce388d9bf591e62",
      },
      {
        $oid: "665778da3ce388d9bf591e6d",
      },
      {
        $oid: "665778e43ce388d9bf591e77",
      },
      {
        $oid: "66577fd93ce388d9bf5920fb",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      type: "Point",
      coordinates: [139.1485991, 35.76478424],
    },
    category: "Trending",
    __v: 4,
  },
  {
    _id: {
      $oid: "66567c2f75f84fe592f66181",
    },
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "wanderlust_DEV/evpuwtpctsbdnxnqvgox",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716993292/wanderlust_DEV/evpuwtpctsbdnxnqvgox.jpg",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    reviews: [
      {
        $oid: "6657790d3ce388d9bf591e8c",
      },
      {
        $oid: "665779183ce388d9bf591e97",
      },
      {
        $oid: "665779193ce388d9bf591ea1",
      },
      {
        $oid: "66577fe43ce388d9bf59210a",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      type: "Point",
      coordinates: [-71.5783054333969, 43.6898878153712],
    },
    category: "Countryside",
    __v: 4,
  },
  {
    _id: {
      $oid: "66567c2f75f84fe592f66182",
    },
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "wanderlust_DEV/m0hwiwvtmhi4kbtorztw",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716993352/wanderlust_DEV/m0hwiwvtmhi4kbtorztw.jpg",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    reviews: [
      {
        $oid: "665779523ce388d9bf591eb6",
      },
      {
        $oid: "665779533ce388d9bf591ec1",
      },
      {
        $oid: "665779543ce388d9bf591ecb",
      },
      {
        $oid: "66577ff13ce388d9bf592119",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      coordinates: [100.58672, 13.772545],
      type: "Point",
    },
    category: "Amazing-Pools",
    __v: 4,
  },
  {
    _id: {
      $oid: "66567c2f75f84fe592f66183",
    },
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "wanderlust_DEV/ckriqwxzfzourxeyilbv",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716993504/wanderlust_DEV/ckriqwxzfzourxeyilbv.webp",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    reviews: [
      {
        $oid: "6657796f3ce388d9bf591ee0",
      },
      {
        $oid: "6657797c3ce388d9bf591eeb",
      },
      {
        $oid: "6657798d3ce388d9bf591ef5",
      },
      {
        $oid: "66577ffb3ce388d9bf592128",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      type: "Point",
      coordinates: [-106.819885, 39.18869],
    },
    category: "Arctic",
    __v: 4,
  },
  {
    _id: {
      $oid: "66567c2f75f84fe592f66184",
    },
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "wanderlust_DEV/zyqegxq7wfomfzg9pioq",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716993785/wanderlust_DEV/zyqegxq7wfomfzg9pioq.webp",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    reviews: [
      {
        $oid: "665779ca3ce388d9bf591f0e",
      },
      {
        $oid: "665779d73ce388d9bf591f19",
      },
      {
        $oid: "665779e73ce388d9bf591f23",
      },
      {
        $oid: "665780073ce388d9bf592137",
      },
    ],
    owner: {
      $oid: "66567b03fda820235197b582",
    },
    geometry: {
      coordinates: [-84.092347, 9.932191],
      type: "Point",
    },
    category: "Beach",
    __v: 4,
  },
];

module.exports = { data: sampleListings };
