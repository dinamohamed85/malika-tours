
let filteredTours = [...tours];

const toursContainer = document.querySelector('.tours-container');

const displayTours = () => {

    if (filteredTours.length < 1) {
        toursContainer.innerHTML = `<h6>Sorry, no tours matched your search</h6>`;
        return;
    }

    toursContainer.innerHTML = filteredTours
        .map((tour) => {
            const { id, title, category, icon, image, country, date, location, site, address, description, thingstodo, likes, duration, season, featured, price } = tour;
            return `<article class="tour-card" data-id="${id}">
            <div class="tour-img-container">
            <a href="${site}" target="_blank">
                <img src="${image}" class="tour-img" alt="" /></a>
            <p class="tour-date">${date}</p>
            ${featured ? `<i class="fa-solid fa-star featured-icon"></i>` : ``} 
            </div>
            <!-- tour info -->
            <div class="tour-info">
            <div class="tour-title">
                <h4><a href="${site}" target="_blank"><i
                    class="fa-solid fa-earth-europe site-icon"></i>${title}</a></h4>
                <p><a href="${location}" target="_blank"><i
                    class="fa-solid fa-location-dot site-icon"></i>
                    ${country}</a> </p>
            </div>
            <p>
                ${address}
            </p>
            <p>${description}
            </p>
            <div>
                <h4> Activities to do :</h4>
                <div class="tour-activtiy">
                ${thingstodo.map((thing) => {
                return `<p class="activtiy">${thing}</p>`
            }).join('')}              
                </div>
            </div>
            <!-- tour footer -->
            <div class="tour-footer">
                <p>
                <i class="fas fa-heart tour-love-icon"></i> ${likes}
                </p>
                <p>${duration} Hours</p>
                <p>from ${price}€</p>
            </div>
        </div>
        </article>`;
        })
        .join('');
};

displayTours();

// Text Filter

const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', () => {
    const inputValue = searchInput.value;
    filteredTours = tours.filter((tour) => {
        return tour.title.toLowerCase().includes(inputValue);
    });
    displayTours();
});

// Text clear
const clearbutton = document.querySelector('.clear-btn');
clearbutton.addEventListener('click', () => {
    filteredTours = [...tours];
    searchInput.value = '';
    displayTours();
})

// Filter Buttons

const categoriesDOM = document.querySelector('.categories');

const displayButtons = () => {
    const buttons = [
        'all',
        ...new Set(tours.map((tour) => tour.category)),
    ];
    // console.log(buttons);
    categoriesDOM.innerHTML = buttons
        .map((category) => {
            return `<button class='category-btn' data-id="${category}">${category}</button>`;
        })
        .join('');
};

displayButtons();

categoriesDOM.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('category-btn')) {
        if (el.dataset.id === 'all') {
            filteredTours = [...tours];
        } else {
            filteredTours = tours.filter((tour) => {
                return tour.category === el.dataset.id;
            });
        }
        searchInput.value = '';
        displayTours();
    }
});
