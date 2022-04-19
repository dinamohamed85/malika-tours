const restaurants = [
    {
        id: '1',
        title: 'bab al yemen',
        category: 'halal',
        icon: 'fa-solid fa-h',
        image: './images/restaurants/restaurant-1.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/AgxFSnuRnJyRFsCRA',
        site: 'https://wolt.com/en/deu/munich/restaurant/bab-al-yemen',
        description: 'Bab Al Yemen is an arabic restaurant in the center of Munich',
        menu: [
            'Madghout Lamb',
            'Zurbian Lamb',
            'Madfon Chicken',
            'Madghout Chicken',
            'Lamb Sanouna',
        ],
        likes: '222',
        avg_price: 10,
        featured: true,
    },
    {
        id: '2',
        title: 'EssPoint Pide & Grill',
        category: 'turkish',
        icon: 'fa-solid fa-turkish-lira-sign',
        image: './images/restaurants/restaurant-2.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/iQoHaD6xVQfiPgr98',
        site: 'https://mycarddigi.de/esspoint-neuaubing/menukarte?pro=1',
        description: 'EssPoint is a Turkish restaurant has many branches in Munich',
        menu: [
            'Pide',
            'Köfte',
            'Chicken',
            'Nuggets',
            'Döner',
            'halal',
        ],
        likes: '1,852',
        avg_price: 9,
        featured: true,
    },
    {
        id: '3',
        title: 'Gourmet Tempel',
        category: 'sea food',
        icon: 'fa-solid fa-fish',
        image: './images/restaurants/restaurant-3.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/LscnLkQv3dnHtrYW9',
        site: 'https://www.gourmettempel-muenchen.de',
        description: 'Gourmet Tempel is a Large, modern venue for Chinese buffet meals, with a sushi counter & a chocolate fountain in Munich.',
        menu: [
            'fish',
            'sushi',
            'grill',
            'rice&Noodle',
            'salad',
            'fruits',
        ],
        likes: '1,818',
        avg_price: 20,
        featured: true,
    },
    {
        id: '4',
        title: 'Deli Tadka Indian Street Food',
        category: 'indian food',
        icon: 'fa-solid fa-turkish-lira-sign',
        image: './images/restaurants/restaurant-4.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/7szbuToGezbYA1ju6',
        site: 'https://riem.delitadka.de/en/menu/155',
        description: 'Deli indian street food is its mix of Indian street food and traditional curry dishes.',
        menu: [
            'Chicken Tikka',
            'Chicken Masala',
            'Lamm Tikka',
            'Tikka Taka Tak',
            'Mango-Lassi',
            'halal',

        ],
        likes: '836',
        avg_price: 8,
        featured: true,
    },
    {
        id: '5',
        title: 'BENTO YA',
        category: 'sushi',
        icon: 'fa-solid fa-shrimp',
        image: './images/restaurants/restaurant-5.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/XbgqNBpcNvQzJdQ6A',
        site: 'http://bentoya-muenchen.de/speisekarte/speisekarte.htm',
        description: 'Ramen noodles, sushi & snacks, plus lunch sets , in a compact, casual setup.',
        menu: [
            'Dragon',
            'tiger roll',
            'Rainbow',
            'spider roll',
            'maki',
            'nigiri',
        ],
        likes: '968',
        avg_price: 20,
        featured: true,
    },
    {
        id: '6',
        title: 'Simitçi Café',
        category: 'breakfast',
        icon: 'fa-solid fa-egg',
        image: './images/restaurants/restaurant-6.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/Mwh5pKTPHx5zccoM8',
        site: 'https://www.simitcicafe.com/sc/Speisekarte_Responsive_Kat.2_07.10.2020.pdf',
        description: 'Simitçi Café is a turkish restaurant and cafe in Munich, is nice place to take your breakfast with menu variety.',
        menu: [
            'popular breakfast',
            'tomato&egg pan',
            'Omlet',
            'Gefüllte&Gebackene Wrap',
            'Teiggebäck',
            'halal',
            'turkish',
            'cafes',
        ],
        likes: '339',
        avg_price: 10,
        featured: true,
    },
    {
        id: '7',
        title: 'Alex cafe',
        category: 'cafes',
        icon: 'fa-solid fa-mug-saucer',
        image: './images/restaurants/restaurant-7.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/W8JCHrmV92XAcoJG8',
        site: 'https://www.dein-alex.de/speisekarte-muenchen',
        description: 'Alex cafe is a great place to drink your cafe with CheeseCake',
        menu: [
            'breakfast Buffet',
            'desserts',
            'ice cream',
            'french breakfast',
            'breakfast kids',
            'Cheese Cake',
        ],
        likes: '2,150',
        avg_price: 5,
        featured: true,
    },
    {
        id: '8',
        title: 'Taste my Burger',
        category: 'halal',
        icon: 'fa-solid fa-h',
        image: './images/restaurants/restaurant-8.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/7BXtrXuwtBH8EKWD9',
        site: 'https://www.tastemyburger.com/menu',
        description: 'Taste my Burger is an arabic restaurant in Munich, Vibrant grill joint for hefty burgers with halal beef & cosmopolitan sauces like curry or wasabi.',
        menu: [
            'Cheeseburger',
            'Yakuza',
            'Hula Hula',
            'Stinking Rose',
            'Evergreen',
        ],
        likes: '2,398',
        avg_price: 8,
        featured: true,
    },
    {
        id: '9',
        title: 'Sindbad',
        category: 'halal',
        icon: 'fa-solid fa-h',
        image: './images/restaurants/restaurant-9.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/UjtYBJoRmJYdzJJ27',
        site: 'http://sindbad-restaurant.de/karte.html',
        description: 'Sindbad is an arabic restaurant in Munich, No-frills pick for Middle Eastern doner kebabs, falafels & meat skewers, to eat in or take out.',
        menu: [
            'Meat Kebab',
            'tikka meat',
            'lambSkewers&Rice',
            'kebab&Rice',
            '½GrilledChicken&Rice',
        ],
        likes: '2,678',
        avg_price: 8,
        featured: true,
    },
    {
        id: '10',
        title: 'Moosacher Paradies',
        category: 'halal',
        icon: 'fa-solid fa-h',
        image: './images/restaurants/restaurant-10.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/AaNghmC5p4NR9hdU6',
        site: 'https://www.moosacherparadies.de/speisekarte/',
        description: 'Moosacher Paradies is a Bosnian restaurant in Munich, Down-to-earth restaurant offering homestyle dishes, including sausages, steaks & pasta.',
        menu: [
            'Spaghetti Bolognese',
            'Risotto „Kalb“',
            'Medallion Pan',
            'Schnitzel Kalb',
            'Balkan dishes',
            'Steak',
            'Burger',
        ],
        likes: '2,664',
        avg_price: 15,
        featured: true,
    },
    {
        id: '11',
        title: 'Restaurant Myra',
        category: 'turkish',
        icon: 'fa-solid fa-turkish-lira-sign',
        image: './images/restaurants/restaurant-11.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/xxp7fXE2QGzx5Gh67',
        site: 'https://restaurant-myra.de/speisekarte',
        description: 'Restaurant Myra is a Turkish restaurant in Munich, Mediterranean cuisine with a focus on Turkish food, with a stylish interior & summer terrace.',
        menu: [
            'KASAP KÖFTE',
            'ADANA KEBAP',
            'BEYTI KEBAP',
            'BEGENDILI KUZU LOKUM',
            'linsensuppe',
            'halal',
        ],
        likes: '1,029',
        avg_price: 14,
        featured: true,
    },
    {
        id: '12',
        title: 'Arabesk',
        category: 'halal',
        icon: 'fa-solid fa-h',
        image: './images/restaurants/restaurant-12.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/zUCqtPwxWitYqVoQ8',
        site: 'https://restaurantguru.com/Arabesk-Munich/menu',
        description: 'Arabesk is a Lebanese Arabic restaurant in Munich, Couscous, falafel & meaty dishes, plus Lebanese wines, in an ornate, ocher-walled restaurant.',
        menu: [
            'Kefta Halabieh',
            'lahm meschwi',
            'Farouj Mousahab',
            'shawarma',
            'schisch tawoouk',
            'breakfast',
        ],
        likes: '1,210',
        avg_price: 16,
        featured: true,
    },
    {
        id: '13',
        title: 'Al Qaswaa',
        category: 'halal',
        icon: 'fa-solid fa-h',
        image: './images/restaurants/restaurant-13.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/VN2AcBNfV9J1yZEw8',
        site: 'https://foodlocate.com/restaurants/muenchen/al-qaswaa',
        description: 'Al Qaswaa is a Moroccan arabic restaurant in Munich, Meze platters, grilled meats & tagines, plus Moroccan tea, in an easygoing, colorful restaurant.',
        menu: [
            'tajine',
            'kebabs',
            'CousCous',
            'lamb',
            'shawarma',
            'Kefta',
        ],
        likes: '510',
        avg_price: 15,
        featured: true,
    },
    {
        id: '14',
        title: 'Restaurant Giannis',
        category: 'Greek',
        icon: 'fa-solid fa-h',
        image: './images/restaurants/restaurant-14.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/c3yuuerZDrq5qHSu6',
        site: 'https://www.giannis-gusto.de/speisekarte',
        description: 'Giannis is a Greek restaurant in Munich, nice kitchen for meat, chicken and fish dishes and dessert.',
        menu: [
            'Rinderfilet Grill',
            'Lammschulter',
            'Gebackene Auberginen',
            'Baklava',
        ],
        likes: '687',
        avg_price: 25,
        featured: true,
    },
    {
        id: '15',
        title: 'asia garden',
        category: 'sea food',
        icon: 'fa-solid fa-fish',
        image: './images/restaurants/restaurant-15.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/dvpGAHzxNE3v9UoV8',
        site: 'https://asia-ottobrunn.de/',
        description: 'Spacious restaurant with a patio offering a buffet featuring Chinese, Mongolian & other Asian fare.',
        menu: [
            'fish',
            'sushi',
            'grill',
            'rice&Noodle',
            'salad',
            'fruits',
        ],
        likes: '1,458',
        avg_price: 20,
        featured: true,
    },
    {
        id: '16',
        title: 'Swagat',
        category: 'indian food',
        icon: 'fa-solid fa-turkish-lira-sign',
        image: './images/restaurants/restaurant-16.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/h7W21MqcBsJtzN6e6',
        site: 'http://www.swagat.de/swagat-speisekarte-2021-04-26.pdf',
        description: 'Classic Indian vegetarian, meat & fish curries served in rustic basement with traditional textiles.',
        menu: [
            'Tandoori-Chicken',
            'chicken Tikka',
            'chicken vindaloo',
            'botti kabab',
            'Swagat teller',
        ],
        likes: '1,967',
        avg_price: 14,
        featured: true,
    },
    {
        id: '17',
        title: 'NordSee',
        category: 'sea food',
        icon: 'fa-solid fa-fish',
        image: './images/restaurants/restaurant-17.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/GQ3pyZ4xyRn8Kc5n7',
        site: 'https://www.nordsee.com/de/produkte/',
        description: 'Nordsee is a German fast-food restaurant chain specialising in seafood. In addition to selling raw and smoked seafood, the company also sells a wide variety of meals and products prepared from seafood such as Fischbrötchen, salads, and canned seafood.',
        menu: [
            'shrimp-box',
            'Garnelen-Ciabatta',
            'Kids-Menü',
            'Sushi Box',
            'Seelachsfilet',
            'Alaska-Seelachsfilet',
        ],
        likes: '1,248',
        avg_price: 10,
        featured: true,
    },
    {
        id: '18',
        title: 'Oberpollinger',
        category: 'breakfast',
        icon: 'fa-solid fa-egg',
        image: './images/restaurants/restaurant-18.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/rNMr5Xom96SXAXyE7',
        site: 'https://www.oberpollinger.de/food-restaurants',
        description: 'A classy food court is located on the top floor (fifth floor)',
        menu: [
            'egg',
            'chesse',
            'croissant ',
            'salmon',
            'bread ',
            'coffee',
        ],
        likes: '8,812',
        avg_price: 8,
        featured: true,
    },
    {
        id: '19',
        title: 'K´AFALTI',
        category: 'turkish',
        icon: 'fa-solid fa-turkish-lira-sign',
        image: './images/restaurants/restaurant-19.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/SjFboEgzKo69rrm97',
        site: 'https://kafalti.com/menu/',
        description: 'K´AFALTI is a Turkish restaurant in Munich, You feel like a little trip to Istanbu,  great breakfast worth tasting, also try the mega burgers and grilled chichen salad.',
        menu: [
            'Chichen salad',
            'Chefs burger',
            'Manti',
            'K´afalti Zanderfilet',
            'K´afalti salad',
            'halal',
            'breakfast',
        ],
        likes: '316',
        avg_price: 14,
        featured: true,
    },
];

export default restaurants;