
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
            return `<article class="tour" data-id="${id}">
            <div class="tour-img-container">
            <a href="${site}" target="_blank">
                <img src="${image}" class="tour-img" alt="" /></a>
            <p class="tour-date">${date}</p>
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
                <p class="activtiy">${thingstodo[0]}</p>
                <p class="activtiy">${thingstodo[1]}</p>
                <p class="activtiy">${thingstodo[2]}</p>
                <p class="activtiy">${thingstodo[3]}</p>
                <p class="activtiy">${thingstodo[4]}</p>
                </div>
            </div>
            <!-- tour footer -->
            <div class="tour-footer">
                <p>
                <i class="fas fa-heart tour-love-icon"></i> ${likes}
                </p>
                <p>${duration}</p>
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

// console.log(
//   tours.filter((tour) => {
//     return tour.title.toLowerCase().includes('');
//   })
// );

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
