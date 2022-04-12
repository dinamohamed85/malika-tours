
import restaurants from './data/db-restaurants.js';
let filteredList = [];
const toursContainer = document.querySelector('.tours-container');
const categoriesDOM = document.querySelector('.categories');
const toursTitle = document.querySelector('.tours-title');

searchInput.value = '';
toursTitle.innerHTML = '';
let currentCategory = 'all';

const displayTours = () => {

    if (filteredList.length < 1) {
        toursTitle.innerHTML = '';
        toursContainer.innerHTML = `<h2 class="section-title" >Sorry, no tours matched your search</h2>`;
        return;
    }
    let text = '';
    if (currentCategory == 'all')
        text = filteredList.length + ' restaurant ';
    else
        text = filteredList.length + ' ' + currentCategory + ' restaurant';

    toursTitle.innerHTML = `<div class="tours-title">
        <h2>find <span class="featured-num">${text}</span> in Munich</h2>
    </div>`;

    toursContainer.innerHTML = filteredList
        .map((tour) => {
            const { id, title, category, icon, image, country, date, location, site, address, description, thingstodo, likes, duration, season, featured, price } = tour;
            return `<article class="tour-card" data-id="${id}">
            <div class="tour-img-container">
            <a href="${site}" target="_blank">
                <img src="${image}" class="tour-img" alt="" /></a>           
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
                <p>from ${price}€</p>
            </div>
        </div>
        </article>`;
        })
        .join('');

};

// Filter Buttons
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

window.addEventListener('DOMContentLoaded', () => {

    try {
        filteredList = [...restaurants];
        if (toursContainer && form && searchInput && clearButton && categoriesDOM && toursTitle) {
            console.log('html selectors is true');
            displayTours();
            displayButtons();

            // Text Filter
            form.addEventListener('keyup', () => {
                const inputValue = searchInput.value.toLowerCase();
                filteredList = tours.filter((tour) => {
                    return tour.title.toLowerCase().includes(inputValue) || tour.thingstodo.find((item) => item.toLowerCase().includes(inputValue)) || tour.category.toLowerCase().includes(inputValue);
                });
                currentCategory = ' restaurant for ' + inputValue;
                displayTours();
            });

            // Text clear
            clearButton.addEventListener('click', () => {
                filteredList = [...tours];
                searchInput.value = '';
                currentCategory = '';
                displayTours();
            })

            categoriesDOM.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('category-btn')) {
                    currentCategory = el.dataset.id;
                    if (el.dataset.id === 'all') {
                        filteredList = [...tours];
                    } else {
                        filteredList = tours.filter((tour) => {
                            return tour.category === el.dataset.id;
                        });
                    }
                    searchInput.value = '';
                    displayTours();
                }
            });

        }
        else
            throw new Error(
                `Please check html selectors, no such element exists`
                // toursContainer.textContent = 'There was an error.....    ' ;
            );
    } catch (error) {
        console.log(error.message);
        toursContainer.textContent = 'There was an error.....    ' + error.message;
    }
});