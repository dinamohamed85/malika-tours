
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
            const { id, title, category, icon, image, location, site, description, menu, likes, featured, avg_price } = item;
            return `<article class="item">
        <img src="${image}" class="item-photo" />
        <div class="item-info">
        <header>            
            <h4><a href="${location}" target="_blank"><i
            class="fa-solid fa-location-dot site-icon"></i>${title}</a></h4>
            <h4 class="item-price">${avg_price}€</h4>
        </header>
        <p class="item-text">
            ${description}
        </p>
        <div>
            <h4>popular dishes :</h4>
            <div class="tour-activtiy">
            ${menu.map((item) => {
                return `<p class="activtiy">${item}</p>`
            }).join('')}            
            </div>
        </div>
        <!-- item footer -->
        <div class="tour-footer">
            <p>
            <i class="fas fa-heart tour-love-icon"></i> ${likes}
            </p>
            <p><a href="${site}" target="_blank"><i
            class="fa-solid fa-diamond-turn-right site-icon"></i> Menu</a></p>
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