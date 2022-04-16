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
        category: 'Breakfast',
        icon: 'fa-solid fa-egg',
        image: './images/restaurants/restaurant-6.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/Mwh5pKTPHx5zccoM8',
        site: 'https://www.simitcicafe.com/sc/Speisekarte_Responsive_Kat.2_07.10.2020.pdf',
        description: 'Simitçi Café is nice place to take your breakfast with menu variety.',
        menu: [
            'popular breakfast',
            'tomato&egg pan',
            'Omlet',
            'Gefüllte&Gebackene Wrap',
            'Teiggebäck',
        ],
        likes: '339',
        avg_price: 10,
        featured: true,
    },
    {
        id: '7',
        title: 'Alex cafe',
        category: 'Cafes',
        icon: 'fa-solid fa-mug-saucer',
        image: './images/restaurants/restaurant-7.jpeg',
        country: 'Germany',
        location: 'https://goo.gl/maps/W8JCHrmV92XAcoJG8',
        site: 'https://www.dein-alex.de/speisekarte-muenchen',
        description: 'Alex cafe is a great place to drink your cafe with CheeseCake',
        menu: [
            'Breakfast Buffet',
            'desserts',
            'ice cream',
            'french Breakfast',
            'Breakfast kids',
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
        description: 'Taste my Burger is restaurant has Vibrant grill joint for hefty burgers with halal beef & cosmopolitan sauces like curry or wasabi in Munich',
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
        description: 'No-frills pick for Middle Eastern doner kebabs, falafels & meat skewers, to eat in or take out.',
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
];

export default restaurants;