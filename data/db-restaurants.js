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
            'Desserts',
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
        mun: 3,
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
            'Cheese burger',
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
        description: 'Sindbad is arabic restaurant in Munich, No-frills pick for Middle Eastern doner kebabs, falafels & meat skewers, to eat in or take out.',
        menu: [
            'Meat Kebab',
            'tikka meat',
            'lambSkewers&Rice',
            'kebab&Rice',
            '½GrilledChicken&Rice',
            'falafel'
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
            'Burger',
            'pasta',
            'Steak',
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
            'falafel',
            'breakfast',
            'Lebanese',
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
        category: 'featured',
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
            'cafes'
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
    {
        id: '20',
        title: 'Haiky asian food',
        category: 'sea food',
        icon: 'fa-solid fa-fish',
        image: './images/restaurants/restaurant-20.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/Nm2tP1f42Kbs4bqq6',
        site: 'https://www.haiky-sushi-asia-food.de/',
        description: 'Good Asian food, It is value for money. the quantity is fine.',
        menu: [
            'shrimp (rice&vegetables)',
            'Chichen (rice&vegetables)',
            'duck',
            'Chichen (nudeln&vegetables)',
        ],
        likes: '390',
        avg_price: 9,
        featured: true,
    },
    {
        id: '21',
        title: 'Köfte House -Köfte & Kebap',
        category: 'turkish',
        icon: 'fa-solid fa-turkish-lira-sign',
        image: './images/restaurants/restaurant-21.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/BAR6Wufp3P47G9XJ6',
        site: 'https://www.koefte-house.de/',
        description: 'Köfte House a Turkish restaurant in Munich, all about dying for meat and grilling. Starting with köfte, the entrecote steak, T-bone steak, lamb chops',
        menu: [
            'Köfte',
            'Döner',
            'Pide',
            'Kebap',
            'pizza ',
            'halal',
        ],
        likes: '390',
        avg_price: 7,
        featured: true,
    },
    {
        id: '22',
        title: 'Dehli Palace',
        category: 'indian food',
        icon: 'fa-solid fa-turkish-lira-sign',
        image: './images/restaurants/restaurant-22.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/XAcnUt8WEjKgxRNn6',
        site: 'https://www.delhi-restaurant.de/speisekarte',
        description: 'Dehli Palace is a good indian restaurant, delicious food for reasonable prices, beautiful ambiance and friendly service.',
        menu: [
            'Tandoori-Chicken',
            'Murg Tikka',
            'Mughlai Lamm',
            'Mughlai Ente',
            'Hariyali Kebab',
        ],
        likes: '648',
        avg_price: 10,
        featured: true,
    },
    {
        id: '23',
        title: 'Restaurant Ksara',
        category: 'halal',
        icon: 'fa-solid fa-h',
        image: './images/restaurants/restaurant-23.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/QAuG2dwWFf82CB4p8',
        site: 'http://ksara.de/speisekarte/',
        description: 'Restaurant Ksara is a Lebanese arabic restaurant in Munich, Traditional Lebanese meze dishes, meat grills & wines, served in an old-school eatery.',
        menu: [
            'Farrouge',
            'Masa',
            'Mischwi',
            'Tawouk',
            'Tabbouleh',
            'Fattousch',
            'Batenjan',
            'Soujok',
            'Sambousek',
            'halal',
            'Lebanese',
        ],
        likes: '1,013',
        avg_price: 14,
        featured: true,
    },
    {
        id: '24',
        title: 'Shandiz',
        category: 'halal',
        icon: 'fa-solid fa-h',
        image: './images/restaurants/restaurant-24.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/YcUNdGTd6pxeQiqC7',
        site: 'https://www.shandiz.de/speisekarte',
        description: 'Persian dishes, including kebabs, served in a traditional dining room with patterned furnishings.',
        menu: [
            'Kabab Tekka',
            'gheimeh bademjoon',
            'byrani morgh',
            'kadu sabz',
            'birani robian',
            'Desserts',
            'halal',
        ],
        likes: '2,220',
        avg_price: 20,
        featured: true,
    },
    {
        id: '25',
        title: 'Sangeet',
        category: 'indian food',
        icon: 'fa-solid fa-turkish-lira-sign',
        image: './images/restaurants/restaurant-25.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/YcUNdGTd6pxeQiqC7',
        site: 'https://www.shandiz.de/speisekarte',
        description: 'Indian restaurant, Spicy curries, vegetarian dishes & meats from a tandoor oven in a low-lit, family-run restaurant.',
        menu: [
            'Chicken',
            'meat',
            'fish',
            'tandoor',
            'Basmati ',
            'vegetarian',
        ],
        likes: '707',
        avg_price: 13,
        featured: true,
    },
    {
        id: '26',
        title: 'DHABA Indisches',
        category: 'indian food',
        icon: 'fa-solid fa-turkish-lira-sign',
        image: './images/restaurants/restaurant-26.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/Eab9wnoWdG2bcjky9',
        site: 'http://www.dhaba.de/MunchenFreiheit/index.php/menu/',
        description: 'Indian restaurant, Comfortable, traditionally decorated Indian restaurant offering a typical range of popular dishes, lunch menu monday–friday, 11:30 – 14:30 clock ((half price)).',
        menu: [
            'Chicken Biryani',
            'Chicken Vindaloo',
            'Lamm Vindaloo',
            'Chicken Masala',
            'Malai Tikka',
            'Chicken Tikka',
        ],
        likes: '1,405',
        avg_price: 8,
        featured: true,
    },
    {
        id: '27',
        title: 'Sababa',
        category: 'halal',
        icon: 'fa-solid fa-h',
        image: './images/restaurants/restaurant-27.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/SeyVNmJukkUdwrTA8',
        site: 'http://www.sababa-munich.com/speisekarte.html',
        description: 'Sababa is a Lebanese arabic restaurant in Munich, No-frills, compact restaurant fixing up Middle Eastern staples including falafel, hummus & shawarma.',
        menu: [
            'shawarma',
            'hummus',
            'Falafel',
            'salad',
            'vegetarian',
            'Lebanese',
        ],
        likes: '963',
        avg_price: 5,
        featured: true,
    },
    {
        id: '28',
        title: 'Al Shaam',
        category: 'halal',
        icon: 'fa-solid fa-h',
        image: './images/restaurants/restaurant-28.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/hkrotM3WjexmfaZp6',
        site: 'https://alshaam-münchen.de/#speisekarte',
        description: 'Al Shaam is Lebanese arabic restaurant in Munich, Traditional restaurant focusing on Lebanese delicacies including grilled meats, flatbreads & dips.',
        menu: [
            'kebab',
            'schisch tawouk',
            'fataer',
            'bamya',
            'Falafel',
            'foul',
            'Lebanese',
        ],
        likes: '733',
        avg_price: 10,
        featured: true,
    },
    {
        id: '29',
        title: 'Restaurant Karam',
        category: 'halal',
        icon: 'fa-solid fa-h',
        image: './images/restaurants/restaurant-29.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/gLRpDHsJxJTBqvCA7',
        site: '',
        address: 'Schwanthalerstraße 6, 80336 München',
        phone: '015770910732',
        description: 'Karam is a syrian Arabic restaurant in Munich, Excellent flavour overall with the right balance of sauce and checken, meat, falafel.., fresh bread using for sandwiches.',
        menu: [
            'mix grill',
            'Shawarma',
            'weinbläteer',
            'kebab',
            'schisch tawouk',
            'manakisch',
            'fatayir',
            'Lammleber',
            'falafel',
            'Syrian',
        ],
        likes: '239',
        avg_price: 10,
        featured: true,
    },
    {
        id: '30',
        title: 'Crispy & more',
        category: 'halal',
        icon: 'fa-solid fa-h',
        image: './images/restaurants/restaurant-30.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/varUm6e3CesWjmZV7',
        site: 'https://www.crispy-and-more.de/',
        address: 'Herzog-Heinrich-Straße 38, 80336 München',
        phone: '08954403014',
        description: 'Crispy & more is a Syrian Arabic restaurant in Munich, Quick, casual stop for Syrian-style shawarma, falafel & fried specialities like chicken & samosas.',
        menu: [
            'Shawarma',
            'Broust Chicken',
            'Burger',
            'Mandy',
            'hummus',
            'falafel',
            'Syrian',
        ],
        likes: '1,064',
        avg_price: 10,
        featured: true,
    },
    {
        id: '31',
        title: 'Bab Al Hara',
        category: 'halal',
        icon: 'fa-solid fa-h',
        image: './images/restaurants/restaurant-31.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/JAfaQGPE2V1hKNX2A',
        site: 'https://www.lieferando.de/speisekarte/bab-al-hara-die-kueche-syriens',
        address: 'Landwehrstraße 25, 80336 München',
        phone: '0162 8158599',
        description: 'Bab Al Hara is a Syrian Arabic restaurant in Munich, Syrian-style shawarma wraps & falafels with dips & a range of salads to eat in or take out.',
        menu: [
            'Shawarma',
            'Broust chicken',
            'Mutabbal',
            'falafel',
            'Syrian',
        ],
        likes: '1,167',
        avg_price: 10,
        featured: true,
    },
    {
        id: '32',
        title: 'Derya Restaurant',
        category: 'halal',
        icon: 'fa-solid fa-h',
        image: './images/restaurants/restaurant-32.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/h5MKZh8Tv5nBsneY7',
        site: 'https://www.derya-muenchen.de',
        address: 'Schillerstraße 34, 80336 München',
        phone: '08954541822',
        description: 'Derya is a Lebanese Arabic restaurant in Munich, Meze platters & kebabs, plus rice dishes & baklava sweets in a traditionally decorated space.',
        menu: [
            'Kuzi Fleisch',
            'Lahm Makli',
            'Kibda Makli',
            'Biryani Hähnchen',
            'Mandi Fleisch',
            'Bamia bil Lahm',
            'Kebab Ruz',
            'mix grill',
            'Lebanese',
        ],
        likes: '946',
        avg_price: 10,
        featured: true,
    },
    {
        id: '33',
        title: 'Sultanahmet Koftecisi',
        category: 'turkish',
        icon: 'fa-solid fa-turkish-lira-sign',
        image: './images/restaurants/restaurant-33.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/dpV3oLx4sNZYvsAb6',
        site: 'https://www.sultanahmetkoftecisi.de/sultanahmetkoftecisi-munchen.aspx',
        address: 'Bayerstraße 91, 80335 München',
        phone: '08959992960',
        description: 'Sultanahmet Koftecisi is a turkish restaurant in Munich, nice atmosphere with good service and well mannered staff. Some of the staff can speak Arabic, make sure to try the tea that is offered after meals.',
        menu: [
            'Köfte',
            'Burger',
            'Mix Grill',
            'Chicken Shish',
            'Lamp Chop',
            'Lamb Shish',
            'halal',
        ],
        likes: '1,561',
        avg_price: 12,
        featured: true,
    },
    {
        id: '34',
        title: 'Mustafa Gemüse Kebap',
        category: 'turkish',
        icon: 'fa-solid fa-turkish-lira-sign',
        image: './images/restaurants/restaurant-34.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/h5MKZh8Tv5nBsneY7',
        site: 'https://cdn.website.dish.co/media/c0/47/2775519/Mustafa-Demirs-Gemuese-Kebap-Speisekarte.pdf',
        address: '21-24 Stachus, 80335 München',
        phone: '01746385327',
        description: 'Mustafas Gemüse Kebap is a turkish Fast food restaurant in Munich, Takeout spot for kebabs stuffed with hand-cut chicken or fried veggies, plus spicy or yogurt sauces.',
        menu: [
            'döner sandwich',
            'doner box',
            'kebab',
            'potatoes',
            'chicken',
            'pizza',
            'falafel',
            'halal',
        ],
        likes: '2,619',
        avg_price: 6,
        featured: true,
    },
    {
        id: '35',
        title: 'Ali Gemüse Döner',
        category: 'turkish',
        icon: 'fa-solid fa-turkish-lira-sign',
        image: './images/restaurants/restaurant-35.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/XCye9esAPsqhUeuw8',
        site: 'https://www.facebook.com/Alis-Gem%C3%BCse-D%C3%B6ner-1974609419468996',
        address: 'Alfred-Arndt-Straße 1, 80807 München',
        phone: '017688142979',
        description: 'Ali Gemüse Döner is a turkish Fast food restaurant in Munich, this kebab rocks. Super delicious, great souce and a nice combination of veggies and meat!.',
        menu: [
            'döner sandwich',
            'doner box',
            'kebab',
            'potatoes',
            'chicken',
            'pizza',
            'halal',
        ],
        likes: '1,025',
        avg_price: 6,
        featured: true,
    },
    {
        id: '36',
        title: 'OLIVA Münchner Freiheit',
        category: 'turkish',
        icon: 'fa-solid fa-turkish-lira-sign',
        image: './images/restaurants/restaurant-36.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/krfzkwAL4RK9ogDu6',
        site: 'http://www.oliva-kebap.de/',
        address: 'Karlspl. 1 UG, 80335 München',
        phone: '01717162411',
        description: 'Oliva Döner is a turkish Fast food restaurant in Munich, eat something quickly (especially vegetarians or vegans) , doner kebab shops, The meat is crispy, the kebabs are well seasoned, richly topped and prepared with love.',
        menu: [
            'döner sandwich',
            'doner box',
            'falafel',
            'potatoes',
            'chicken',
            'pizza',
            'halal',
        ],
        likes: '658',
        avg_price: 7,
        featured: true,
    },
    {
        id: '37',
        title: 'Türkitch -Köfte & Kebap',
        category: 'turkish',
        icon: 'fa-solid fa-turkish-lira-sign',
        image: './images/restaurants/restaurant-37.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/Ti8g9xKudsvXDjoW6',
        site: 'https://m.facebook.com/tuerkitch/',
        address: 'Humboldtstraße 20, 81543 München',
        phone: '08989056963',
        description: 'Türkitch Kebap is a turkish Fast food restaurant in Munich, Small venue prepping a variety of kebabs with a choice of sauces, plus falafel sandwiches & salads.',
        menu: [
            'döner sandwich',
            'doner box',
            'falafel',
            'Kofta',
            'Salad',
            'Potatoes',
            'halal',
        ],
        likes: '2,262',
        avg_price: 7,
        featured: true,
    },
    {
        id: '38',
        title: 'Hans im Glück',
        category: 'burger',
        icon: 'fa-regular fa-burger',
        image: './images/restaurants/restaurant-38.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/ov7R7u6ro3nhqtGS6',
        site: 'https://hansimglueck-burgergrill.de/karte/?muenchen-im-tal#/',
        address: 'Tal 10, 80331 München',
        phone: '08974038422',
        description: 'Hans im Glück is a Hamburger restaurant in Munich, Exceptional choice of burgers even in vegetarian section. Awesome food, brilliant environment, little bit small in size but it is fine.',
        menu: [
            'beef burger',
            'Cheese burger',
            'chicken burger',
            'Salad',
            'Potatoes',
            'vegetarian',
        ],
        likes: '4,053',
        avg_price: 10,
        featured: true,
    },
    {
        id: '39',
        title: 'Five Guys',
        category: 'burger',
        icon: 'fa-regular fa-burger',
        image: './images/restaurants/restaurant-39.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/Gkcbk1LY9hbiLyTr5',
        site: 'https://fiveguys.de/menu',
        address: 'Willy-Brandt-Platz 5, 81829 München',
        phone: '08937417072',
        description: 'Five Guys is a Hamburger restaurant in Munich, Fast-food chain with made-to-order burgers, fries & hot dogs, plus free peanuts while you wait.',
        menu: [
            'beef burger',
            'Cheese burger',
            'chicken burger',
            'Salad',
            'Potatoes',
            'vegetarian',
        ],
        likes: '2,489',
        avg_price: 10,
        featured: true,
    },
    {
        id: '40',
        title: 'Bavarian Oriental',
        category: 'burger',
        icon: 'fa-regular fa-burger',
        image: './images/restaurants/restaurant-40.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/pVWnaf8XXksRris37',
        site: 'http://bavarian-oriental.de/',
        address: 'Schleißheimer Str. 188, 80797 München',
        phone: '01722834063',
        description: 'Bavarian Oriental a Oriental arabic restaurant in Munich, Fresh homemade bowls, hummus, baba ganoush, falafel, tzatziki, stuffed vine leaves, olives, fresh feta cheese, dates from Iran & baklava. We also offer our delicacies in the form of catering .',
        menu: [
            'Philly Cheese',
            'Cheese burger',
            'hummus',
            'baklava',
            'vegetables',
            'fish',
            'meat',
            'Steak',
            'falafel',
        ],
        likes: '263',
        avg_price: 10,
        featured: true,
    },
    {
        id: '41',
        title: 'Andy s Krablergarten',
        category: 'featured',
        icon: 'fa-regular fa-burger',
        image: './images/restaurants/restaurant-41.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/Lv3gnZnUhDHr2Ctr9',
        site: 'http://www.andyskrablergarten.de/speisenkarte',
        address: 'Thalkirchner Str. 2, 80337 München',
        phone: '08926019148',
        description: 'Andy s Krablergarten is a German schnitzel restaurant in Munich, Relaxed restaurant & beer garden serving hearty Bavarian sides, grills & schnitzels.',
        menu: [
            'puten schnitzel ',
            'kalb schnitzel',
            'steak',
            'salad',
        ],
        likes: '3,882',
        avg_price: 15,
        featured: true,
    },
    {
        id: '42',
        title: 'Pardi',
        category: 'turkish',
        icon: 'fa-solid fa-turkish-lira-sign',
        image: './images/restaurants/restaurant-42.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/Ce3dvfJbjYofSQhx5',
        site: 'http://www.pardi-restaurant.de/img/Speisekarte_Pardi.pdf',
        address: 'Thalkirchner Str. 2, 80337 München',
        phone: '089131850',
        description: 'Pardi is a Turkish restaurant in Munich, Modern venue with a terrace, offering Turkish food, grilled meat & seafood, plus pasta.',
        menu: [
            'Şiş Kebap',
            'Lammfleischfilets',
            'Yogurtlu Adana',
            'Adana Kebap',
            'Putenbrustspieße',
            'Grill',
            'pasta',
            'steak'
        ],
        likes: '3,882',
        avg_price: 16,
        featured: true,
    },
    {
        id: '43',
        title: ' Majestic',
        category: 'sea food',
        icon: 'fa-solid fa-fish',
        image: './images/restaurants/restaurant-43.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/X5i5GWDsPd3vTJgMA',
        site: 'https://www.restaurant-majestic.de/Unsere-Speisen-und-Getraenkekarte/',
        address: 'Kistlerhofstraße 251, 81379 München, Germany',
        phone: '08978017660',
        description: 'Majestic is a sea food restaurant in Munich, Cavernous, old-world locale offering sushi, a Mongolian grill & a pan-Asian buffet.',
        menu: [
            'fish',
            'sushi',
            'grill',
            'rice&Noodle',
            'salad',
            'fruits',
        ],
        likes: '1,498',
        avg_price: 20,
        featured: true,
    },
    {
        id: '44',
        title: 'Tokyo Sky Running Sushi',
        category: 'sushi',
        icon: 'fa-solid fa-shrimp',
        image: './images/restaurants/restaurant-44.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/UvDKAVZCW4N6Fz4v7',
        site: 'https://tokyo-sky.de/speisekarte-2/',
        address: 'Hauptstraße 16, 82319 Starnberg, Germany',
        phone: '08151971109',
        description: 'Tokyo Sushi is a sushi restaurant in Munich, Classic & creative rolls, plus grilled skewers & small plates, in simple, wood-accented surrounds.',
        menu: [
            'Dragon',
            'tiger roll',
            'Rainbow',
            'spider roll',
            'maki',
            'nigiri',
        ],
        likes: '776',
        avg_price: 25,
        featured: true,
    },
    {
        id: '45',
        title: 'Javi',
        category: 'sushi',
        icon: 'fa-solid fa-shrimp',
        image: './images/restaurants/restaurant-45.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/sF42ornYzHfn8oBm8',
        site: 'https://www.javi-restaurant.de/wp-content/uploads/2021/06/Javi-Restaurant-Muenchen-Speisekarte.pdf',
        address: 'Schleißheimer Str. 182, 80797 München',
        phone: '08930666770',
        description: 'Javi Sushi is a sushi restaurant in Munich, Sushi, noodle bowls & coconut curries in a strikingly designed venue with East Asian art & foliage.',
        menu: [
            'GOI CUON TOM',
            'TOM COM',
            'SAKE CARPACCIO',
            'SAITAMA',
            'MATSUDO',
            'KASHIWA',
        ],
        likes: '1,188',
        avg_price: 25,
        featured: true,
    },
    {
        id: '46',
        title: 'Fujikaiten',
        category: 'sushi',
        icon: 'fa-solid fa-shrimp',
        image: './images/restaurants/restaurant-46.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/ZkPGM6C26nUKtY6R8',
        site: 'https://www.fujikaiten-muenchen.de/',
        address: 'Münchner Freiheit, Münchener Freiheit 4, 80802 München',
        phone: '08938666766',
        description: 'Fujikaiten Sushi is a sushi restaurant in Munich, Sushi, with an all-you-can-eat option, plus pan-Asian dishes, in a dramatic, red-hued space.',
        menu: [
            'Dragon rolle',
            'futo - Maki',
            'Teriyaki Maguro',
            'Sushi - Temaki',
            'Sushi - Sashimi',
            'Tazuna Rollen',
        ],
        likes: '1,498',
        avg_price: 25,
        featured: true,
    },
    {
        id: '47',
        title: 'Sushi+Soul',
        category: 'sushi',
        icon: 'fa-solid fa-shrimp',
        image: './images/restaurants/restaurant-47.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/nah7Z8x8GD1QQRXo7',
        site: 'https://shop.soulsushi.de/menu',
        address: 'Klenzestraße 71, 80469 München',
        phone: '0892010992',
        description: 'Sushi+Soul Sushi is a sushi restaurant in Munich, Large Japanese restaurant & bar with stylish, minimalist decor, plus whisky & rum tastings.',
        menu: [
            'Kimchi',
            'Maki',
            'California rolls',
            'Spring Roll',
            'Crispy Rolls',
            'Tekka Deluxe',
            'Nigiri'
        ],
        likes: '1,294',
        avg_price: 25,
        featured: true,
    },
    {
        id: '48',
        title: 'Sushi Sano',
        category: 'sushi',
        icon: 'fa-solid fa-shrimp',
        image: './images/restaurants/restaurant-48.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/d7QmVidLtXpC7uyp8',
        site: 'https://www.sushi-sano.de/speisekarte',
        address: 'Brunnstraße 6, 80331 München, Germany',
        phone: '089267490',
        description: 'Sushi Sano is a sushi restaurant in Munich, Large Japanese restaurant & bar with stylish, minimalist decor, plus whisky & rum tastings.',
        menu: [
            'GOI CUON TOM',
            'TOM COM',
            'SAKE CARPACCIO',
            'SAITAMA',
            'MATSUDO',
            'KASHIWA',
        ],
        likes: '1,183',
        avg_price: 25,
        featured: true,
    },
    {
        id: '49',
        title: 'Lu Bu Soul Food',
        category: 'sushi',
        icon: 'fa-solid fa-shrimp',
        image: './images/restaurants/restaurant-49.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/epmWCYnH2UtnJHGt8',
        site: 'http://lubusoulfood.de/speisen/',
        address: 'Christophstraße 7A, 80538 München',
        phone: '08920042507',
        description: 'Lu Bu Soul Food is a sushi restaurant in Munich, Casual restaurant with a covered terrace featuring Vietnamese classics & a sushi counter.',
        menu: [
            'GOI CUON TOM',
            'TOM COM',
            'SAKE CARPACCIO',
            'SAITAMA',
            'MATSUDO',
            'KASHIWA',
        ],
        likes: '641',
        avg_price: 25,
        featured: true,
    },
    {
        id: '50',
        title: 'Restaurant Goa',
        category: 'indian food',
        icon: 'fa-solid fa-turkish-lira-sign',
        image: './images/restaurants/restaurant-50.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/1q5RZxUKLcZFnSZt7',
        site: 'http://www.swagat.de/swagat-speisekarte-2021-04-26.pdf',
        description: 'Restaurant Goa is an indian restaurant in Munich, Wide range of Indian dishes served in a medium- sized, brightly decorated space with Indian motifs.',
        menu: [
            'Tandoori-Chicken',
            'chicken Tikka',
            'chicken vindaloo',
            'botti kabab',
            'Swagat teller',
        ],
        likes: '652',
        avg_price: 14,
        featured: true,
    },
];

export default restaurants;