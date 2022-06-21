
import restaurants from '../data/db-restaurants.js';
let filteredList = [];
const restaurantsContainer = document.querySelector('.list-container');
const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');
const clearButton = document.querySelector('.clear-btn');
const categoriesDOM = document.querySelector('.categories');
const restaurantsTitle = document.querySelector('.section-title');

let currentCategory = 'halal';

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
    else if (currentCategory == 'other') {
        text1 = 'top ';
        text2 = filteredList.length + ' diffrent' + ' restaurants ';
    }
    else if (currentCategory == 'cafes & bakery') {
        text1 = 'top ';
        text2 = filteredList.length + ' ' + currentCategory;
    }
    else {
        text1 = 'top ';
        text2 = filteredList.length + ' ' + currentCategory + ' restaurants';
    }


    restaurantsTitle.innerHTML = `<div class="section-title">
        <h2> ${text1}<span class="featured-num">${text2}</span> in Munich</h2>
    </div>`;

    restaurantsContainer.innerHTML = filteredList
        .map((item, index) => {
            const { id, title, category, icon, images, location, site, description, menu, likes, featured, avg_price, address, phone, rate, more, facebook, instagram } = item;
            return `<article class="item">
        <div class="tour-img-container">
        <a href="${site}" target="_blank">
            <img src="${images[0]}" class="item-photo" alt="${title}"/></a>
            <i class="fa-solid fa-face-smile rate-icon"></i><p class="item-rate">${rate}</p>            
        </div>
        <div class="item-info">
        <header> 
            <h4> 
                <a href="${location}" target="_blank">          
                   ${index + 1}. ${title}
                </a>
            </h4>
            <p>
                <i class="fas fa-heart tour-love-icon"></i> ${likes}
            </p>         
            ${facebook ? `<a href="${facebook}" target="_blank"><i
            class="fa-brands fa-facebook-square facebook-icon"></i></a> ` : ``}  
            ${instagram ? `<a href="${instagram}" target="_blank"><i
            class="fa-brands fa-instagram-square facebook-icon"></i></a> ` : ``}                    
        </header>
        <section>
            <p><a href="${location}" target="_blank"><i
            class="fa-solid fa-location-dot site-icon"></i>
            <span class="more-info">      ${address}</span></a> </p>    
            <p> <i class="fa-solid fa-phone phone-icon"></i> 
            <span class="more-info">  ${phone}</span> </p>             
        </section>
        <p class="item-text">
            ${description}
            ${more ? `<p class="more-desc">${more} </p>` : ``} 
        </p>
        <div class="tour-footer item-text">                
            <h5>popular dishes : <span class="item-price">${avg_price}€</span></h5>
            <h5><a href="${site}" target="_blank"><i
            class="fa-solid fa-utensils site-icon"></i>Menu</a>  </h5>              
        </div>
        ${featured ? `<i class="fa-solid fa-star featured-icon"></i>` : ``} 
        <div class="tour-activtiy">
            ${menu.map((item) => {

                let text;
                if (item == 'halal')
                    text = `<p class="activtiy"><span class="tour-love-icon">${item}</span></p>`

                else if (item == 'arabic')
                    text = `<p class="activtiy"><span class="ar-icon">${item}</span></p>`

                else text = `<p class="activtiy">${item}</p>`

                return text;
            }).join('')}            
        </div>
        
        <!-- item footer -->
        <div class="tour-footer">
            
            
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
        'halal markets'
    ];
    // console.log(buttons);
    categoriesDOM.innerHTML = buttons
        .map((category) => {
            return `<button class='category-btn' data-id="${category}">${category}</button>`;
        })
        .join('');
};
const getListBycategory = (category) => {

    window.history.replaceState(null, null, '?category=' + currentCategory);

    if (category == 'all') {
        filteredList = [...restaurants];
    }
    else if (category == 'featured') {
        filteredList = restaurants.filter((item) => {
            return item.featured
        });
    }
    else if (category == 'halal markets') {
        //open shopping.html with halal markets
        console.log('open halal markets page ');
        window.open('shopping.html', '_self');
    }
    else {
        filteredList = restaurants.filter((item) => {
            return item.category == category || item.menu.find((el) => el.toLowerCase().includes(category));
        });
    }
};

window.addEventListener('DOMContentLoaded', () => {

    const queryString = window.location.search;
    try {
        if (queryString) {
            console.log(queryString);
            const urlParams = new URLSearchParams(queryString);
            if (urlParams.get('category'))
                currentCategory = urlParams.get('category');
            console.log(currentCategory);
        }

        getListBycategory(currentCategory);

        if (restaurantsContainer && categoriesDOM && restaurantsTitle) {
            restaurantsTitle.innerHTML = '';
            console.log('html selectors is true');
            displayRestaurants();
            displayButtons();

            // Text Filter
            form.addEventListener('keyup', () => {
                const inputValue = searchInput.value.toLowerCase();
                filteredList = restaurants.filter((item) => {
                    return item.title.toLowerCase().includes(inputValue) || item.menu.find((item) => item.toLowerCase().includes(inputValue)) || item.category.toLowerCase().includes(inputValue);
                });
                currentCategory = inputValue;
                displayRestaurants();
            });

            // Text clear
            clearButton.addEventListener('click', () => {
                getListBycategory(currentCategory);
                searchInput.value = '';
                currentCategory = '';
                displayRestaurants();
            })

            categoriesDOM.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('category-btn')) {
                    currentCategory = el.dataset.id;

                    getListBycategory(currentCategory);
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