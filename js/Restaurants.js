
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
    let text1 = '';
    let text2 = '';
    if (currentCategory == 'all') {
        text1 = 'best ';
        text2 = filteredList.length + ' restaurants ';
    }
    else if (currentCategory == 'featured') {
        text1 = 'featured ';
        text2 = filteredList.length + ' restaurants ';
    }
    else if (currentCategory == 'cafes & bakery') {
        text1 = 'top ';
        text2 = filteredList.length + ' ' + currentCategory;
    }
    else {
        text1 = 'top ';
        text2 = filteredList.length + ' ' + currentCategory + ' restaurant';
    }


    restaurantsTitle.innerHTML = `<div class="section-title">
        <h2> ${text1}<span class="featured-num">${text2}</span> in Munich</h2>
    </div>`;
    let count = 1;
    restaurantsContainer.innerHTML = filteredList
        .map((item) => {
            const { id, title, category, icon, image, location, site, description, menu, likes, featured, avg_price, address, phone, rate } = item;
            return `<article class="item">
        <div class="tour-img-container">
            <img src="${image}" class="item-photo" />
            <i class="fa-solid fa-face-smile rate-icon"></i><p class="item-rate">${rate}</p>
        </div>
        <div class="item-info">
        <header>            
            <h4>${count++}- ${title}</h4>
            <h4 class="item-price">${avg_price}€</h4>
        </header>
        <div >   
            <p><a href="${location}" target="_blank"><i
            class="fa-solid fa-location-dot site-icon"></i>
            <span class="more-info">      ${address}</span></a> </p>    
            <p> <i class="fa-solid fa-phone site-icon"></i> 
            <span class="more-info">  ${phone}</span> </p>             
        </div>
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
            class="fa-solid fa-utensils site-icon"></i> Menu</a></p>
        </div>
        </div>       
    </article>`;
        })
        .join('');

};

// Filter Buttons
const displayButtons = () => {
    const buttons = [
        'all', 'featured',
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
                    }

                    else if (el.dataset.id === 'featured') {
                        filteredList = restaurants.filter((item) => {
                            return item.featured
                        });
                    }
                    else {
                        filteredList = restaurants.filter((item) => {
                            return item.category === el.dataset.id || item.menu.find((thing) => thing.toLowerCase().includes(el.textContent));;
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