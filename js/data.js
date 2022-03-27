const sublinks = [
    {
        page: 'kids',
        links: [
            { label: 'playground', icon: 'fas fa-parachute-box', url: '#' },
            { label: 'swimming', icon: 'fas fa-swimmer', url: '#' },
            { label: 'zoo', icon: 'fas fa-hippo', url: '#' },
            { label: 'farm', icon: 'fab fa-pagelines', url: '#' },
            { label: 'mountains', icon: 'fas fa-credit-card', url: '#' },
            {
                label: 'indoor', icon: 'fas fa-archway', url: '#',
                sublist: [
                    {
                        page: 'indoor',
                        links: [
                            { label: 'museum', icon: 'fas fa-archway', url: '#' },
                            { label: 'circus', icon: 'fas fa-credit-card', url: '#' },
                            { label: 'cinma', icon: 'fas fa-credit-card', url: '#' },
                            { label: 'theater', icon: 'fas fa-credit-card', url: '#' },],
                    },
                ],
            },
        ],
    },
    {
        page: 'Outings',
        links: [
            { label: 'parks', icon: 'fas fa-book', url: '#' },
            { label: 'lakes', icon: 'fas fa-book', url: '#' },
            { label: 'city', icon: 'fas fa-book', url: '#' },
            { label: 'malls', icon: 'fas fa-book', url: '#' },
            { label: 'shopping', icon: 'fas fa-book', url: '#' },
            { label: 'restaurants', icon: 'fas fa-book', url: '#' },
            { label: 'cafes', icon: 'fas fa-book', url: '#' },
        ],
    },
    {
        page: 'More',
        links: [
            { label: 'events', icon: 'fas fa-briefcase', url: '#' },
            { label: 'gym', icon: 'fas fa-briefcase', url: '#' },
            { label: 'markets', icon: 'fas fa-briefcase', url: '#' },
            { label: 'furniture', icon: 'fas fa-briefcase', url: '#' },
            { label: 'online shopping', icon: 'fas fa-briefcase', url: '#' },
            { label: 'cakes', icon: 'fas fa-briefcase', url: '#' },
            { label: 'arabic school', icon: 'fas fa-briefcase', url: '#' },
        ],
    },
];

export default sublinks;