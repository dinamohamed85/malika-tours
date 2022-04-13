
import restaurants from '../data/db-restaurants.js';
let filteredList = [];
const restaurantsContainer = document.querySelector('.list-container');
const categoriesDOM = document.querySelector('.categories');
const restaurantsTitle = document.querySelector('.section-title');

let currentCategory = 'all';

const displayRestaurants = () => {

    if (filteredList.length < 1) {
        restaurantsTitle.innerHTML = '';
        restaurantsContainer.innerHTML = `<h2 class="section-title" >Sorry, no restaurants matched your search</h2>`;
        return;
    }
    let text = '';
    if (currentCategory == 'all')
        text = filteredList.length + ' restaurant ';
    else
        text = filteredList.length + ' ' + currentCategory + ' restaurant';

    restaurantsTitle.innerHTML = `<div class="section-title">
        <h2>find <span class="featured-num">${text}</span> in Munich</h2>
    </div>`;

    restaurantsContainer.innerHTML = filteredList
        .map((item) => {
            const { id, title, category, icon, image, location, site, address, description, likes, featured, price } = item;
            return `<article class="item">
        <img src="${image}" class="restaurant-photo" />
        <div class="item-info">
        <header>
            <h4>${title}</h4>
            <h4 class="item-price">${price}€</h4>
        </header>
        <p class="item-text">
            ${description}
        </p>
        </div>
    </article>`;
        })
        .join('');

};

// Filter Buttons
const displayButtons = () => {
    const buttons = [
        'all',
        ...new Set(restaurants.map((item) => item.category)),
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
        if (restaurantsContainer && categoriesDOM && restaurantsTitle) {
            restaurantsTitle.innerHTML = '';
            console.log('html selectors is true');
            displayRestaurants();
            displayButtons();

            categoriesDOM.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('category-btn')) {
                    currentCategory = el.dataset.id;
                    if (el.dataset.id === 'all') {
                        filteredList = [...restaurants];
                    } else {
                        filteredList = restaurants.filter((item) => {
                            return item.category === el.dataset.id;
                        });
                    }
                    displayRestaurants();
                }
            });
        }
        else
            throw new Error(
                `Please check html selectors, no such element exists`
            );
    } catch (error) {
        console.log(error.message);
        restaurantsContainer.textContent = 'There was an error.....    ' + error.message;
    }
});