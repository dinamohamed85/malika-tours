const tours = [
    {
        id: '1',
        title: 'Starnberger See',
        category: 'lakes',
        icon: 'fa-solid fa-water',
        image: './images/tour-1.jpeg',
        country: 'Germany',
        date: 'septemper, 2021',
        location: 'https://goo.gl/maps/MXqL54V1TmHgckZaA',
        site: 'http://www.bayregio-starnberger-see.de',
        address: 'Close to the Munich city center as it is about 25 min away via <strong>S6</strong> (Starnberg).',
        description: 'Starnberger is Germany s second- largest body of fresh water.',
        thingstodo: [
            'Ship&Boat',
            'SwimmingPool',
            'Strolling',
            'bike',
            'Picnic',
            'grillzone',
            'ice-cream',
            'cafes'
        ],
        likes: 6.900,
        duration: 10,
        price: 3,
        season: 'summer',
        featured: true,
    },
    {
        id: '2',
        title: 'Regensberg',
        category: 'cities',
        icon: 'fa-solid fa-city',
        image: './images/tour-2.jpeg',
        country: 'Germany',
        date: 'october, 2021',
        location: 'https://goo.gl/maps/MXqL54V1TmHgckZaA',
        site: 'http://www.bayregio-starnberger-see.de',
        address: 'Regensberg is a city in eastern Bavaria as it is about 2 hr away Munich via <strong>Train</strong> or 1.5 hr by<strong>Car</strong> (93059 Regensburg).',
        description: 'Regensberg is among the top sights and travel attractions.',
        thingstodo: [
            'Danube river',
            'Ship',
            'Dom',
            'Theater',
            'Restaurants',
            'Cafes'
        ],
        likes: 9.006,
        duration: 12,
        price: 10,
        season: 'summer',
        featured: false,
    },
    {
        id: '3',
        title: 'langwieder see',
        category: 'lakes',
        icon: 'fa-solid fa-water',
        image: './images/tour-3.jpeg',
        country: 'Germany',
        date: 'july, 2021',
        location: 'https://goo.gl/maps/xu7xHXgkjrmpXD9d7',
        site: 'https://www.muenchen.de/freizeit/orte/119333.html',
        address: 'Close to the Munich city center as it is about 30 min away via <strong>S8 </strong>Herrsching then take the <strong > Badebus</strong> (langwieder).',
        description: 'Langwiedersee is composed of three lakes west of Munich in Bavaria.',
        thingstodo: [
            'Swimming',
            'Boat',
            'Landscape',
            'Playground',
            'Grilling',
            'Strolling',
            'Picnic',
            'Snacks'
        ],
        likes: 4.300,
        duration: 10,
        price: 3,
        season: 'summer',
        featured: true,
    },
    {
        id: '4',
        title: 'Wildpark Poing',
        category: 'parks',
        icon: 'fa-solid fa-tree',
        image: './images/tour-4.jpeg',
        country: 'Germany',
        date: 'April, 2021',
        location: 'https://goo.gl/maps/AFk9fCbLquSPqzfM8',
        site: 'http://www.wildpark-poing.de',
        address: 'In the east of Munich as it is about 40 min away via <strong>S2 </strong>(Erding).',
        description: 'Huge wildlife park with nature trails through free roaming animals, plus zoo & bird of prey shows.',
        thingstodo: [
            'Animals',
            'Waterpark',
            'Jungle',
            'Playground',
            'Picnic',
        ],
        likes: 9.572,
        duration: 10,
        price: 12,
        season: 'summer',
        featured: true,
    },
    {
        id: '5',
        title: 'Freizeitpark Märchenwald',
        category: 'parks',
        icon: 'fa-solid fa-tree',
        image: './images/tour-5.jpeg',
        country: 'Germany',
        date: 'March, 2021',
        location: 'https://goo.gl/maps/XaVqJ6GYJ6TFx3Xt5',
        site: 'http://www.maerchenwald-isartal.de',
        address: 'In the south of Bavaria as it is about 50 min away via <strong>S7</strong> (Wolfratshausen) or 40 min by <strong> Car</strong> (82515 Wolfratshausen).',
        description: 'Nature reserve–style zoo with animals grouped in large enclosures, as per their geographic spread.',
        thingstodo: [
            'Amusement Park',
            'Roller Coaster',
            'Story Scenes',
            'Restaurant',
            'playground',
        ],
        likes: 25.552,
        duration: 8,
        price: 18,
        season: 'summer',
        featured: true,
    },
    {
        id: '6',
        title: 'Tierpark Hellabrunn',
        category: 'parks',
        icon: 'fa-solid fa-tree',
        image: './images/tour-6.jpeg',
        country: 'Germany',
        date: 'April, 2021',
        location: 'https://goo.gl/maps/7hffUyjWd2iji3F68',
        site: 'http://www.hellabrunn.de',
        address: 'In the Munich city center via <strong>U3</strong> (Tierpark).',
        description: 'Forest setting for kids rides & attractions with fairytale themes, plus playgrounds toy trains.',
        thingstodo: [
            'Animals',
            'Roller Coaster',
            'Cafes',
            'Restaurant',
            'playground',
        ],
        likes: 3.385,
        duration: 8,
        price: 14,
        season: 'summer',
        featured: true,
    },
    {
        id: '7',
        title: 'Blombergbahn Bad Tölz',
        category: 'mountains',
        icon: 'fa-solid fa-mountain',
        image: './images/tour-7.jpeg',
        country: 'Germany',
        date: 'June, 2021',
        location: 'https://goo.gl/maps/ozS3235txbXnqTidA',
        site: 'http://www.blombergbahn.com',
        address: 'In the south of Munich as it is about 45 min away by <strong>Car</strong> (83646 Wackersberg)',
        description: 'Year-round double chair lift up Blomberg Mountain to hiking trails, a toboggan run & ski slopes.',
        thingstodo: [
            'Sliding',
            'Chairlift',
            'Mountains',
            'Hiking',
        ],
        likes: 3.057,
        duration: 8,
        price: 7,
        season: 'summer',
        featured: true,
    },
    {
        id: '8',
        title: 'Schliersee',
        category: 'lakes',
        icon: 'fa-solid fa-tree',
        image: './images/tour-8.jpeg',
        country: 'Germany',
        date: 'May, 2021',
        location: 'https://goo.gl/maps/y9514a7gquqnsc7W6',
        site: 'https://www.schliersee.de',
        address: 'In the south of Bavaria as it is about 40 min away by <strong>Car</strong> (83727 Schliersee) or 1.5 hr via <strong> Train</strong>.',
        description: 'Schliersee has a surface area of approximately 2.2 sq. mi and is known as one of the nicest lakes in Bavaria perfect for Sightseeing.',
        thingstodo: [
            'Boat',
            'Playground',
            'Snacks',
            'Strolling',
            'Chairlift',
            'Sliding',
            'Mountains',
            'Hiking',
        ],
        likes: 3.385,
        duration: 10,
        price: 10,
        season: 'summer',
        featured: true,
    },
];