
import shopping from '../data/db-shopping.js';
let filteredList = [];
const shoppingContainer = document.querySelector('.list-container');
const categoriesDOM = document.querySelector('.categories');
const shoppingTitle = document.querySelector('.section-title');

let currentCategory = 'all';

const displayshopping = () => {

    if (filteredList.length < 1) {
        shoppingTitle.innerHTML = '';
        shoppingContainer.innerHTML = `<h2 class="section-title" >Sorry, no shopping matched your search</h2>`;
        return;
    }
    let text1 = '';
    let text2 = '';
    if (currentCategory == 'all') {
        text1 = 'best ';
        text2 = filteredList.length + ' places for shopping ';
    }
    else if (currentCategory == 'featured') {
        text1 = 'featured ';
        text2 = filteredList.length + ' shopping ';
    }
    else if (currentCategory == 'other') {
        text1 = 'top ';
        text2 = filteredList.length + ' diffrent places for' + ' shopping ';
    }
    else if (currentCategory == 'cafes & bakery') {
        text1 = 'top ';
        text2 = filteredList.length + ' ' + currentCategory;
    }
    else {
        text1 = 'top ';
        text2 = filteredList.length + ' ' + currentCategory + ' for  shop';
    }


    shoppingTitle.innerHTML = `<div class="section-title">
        <h2> ${text1}<span class="featured-num">${text2}</span> in Munich</h2>
    </div>`;

    shoppingContainer.innerHTML = filteredList
        .map((item, index) => {
            const { id, title, category, icon, images, location, site, description, likes, featured, address, phone, rate, thingstodo } = item;
            return `<article class="item">
        <div class="tour-img-container">
            <img src="${images[0]}" class="item-photo" />           
        </div>
        <div class="item-info">
        <header>            
            <h4><a href="${site}" target="_blank"><i class="fa-solid fa-earth-europe site-icon"></i>${index + 1}- ${title}</a></h4>
        </header>
        <section>
            <p><a href="${location}" target="_blank"><i
            class="fa-solid fa-location-dot site-icon"></i>
            <span class="more-info">      ${address}</span></a> </p>    
            <p> <i class="fa-solid fa-phone site-icon"></i> 
            <span class="more-info">  ${phone}</span> </p>             
        </section>
        <p class="item-text">
            ${description}
        </p>
        <div>
            <h5>Activities to do :</h5>
            <div class="tour-activtiy">
            ${thingstodo.map((item) => {
                return `<p class="activtiy">${item}</p>`
            }).join('')}            
            </div>
        </div>
        <!-- item footer -->
        <div class="tour-footer">
            <p>
            <i class="fas fa-heart tour-love-icon"></i> ${likes}
            </p>
            <p><i
            class="fa-regular fa-star site-icon"></i>  ${rate}</p>
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
        ...new Set(shopping.map((item) => item.category)),
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

        filteredList = [...shopping];
        if (shoppingContainer && categoriesDOM && shoppingTitle) {
            shoppingTitle.innerHTML = '';
            console.log('html selectors is true');
            displayshopping();
            displayButtons();

            categoriesDOM.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('category-btn')) {
                    currentCategory = el.dataset.id;
                    if (el.dataset.id === 'all') {
                        filteredList = [...shopping];
                    }

                    else if (el.dataset.id === 'featured') {
                        filteredList = shopping.filter((item) => {
                            return item.featured
                        });
                    }
                    else {
                        filteredList = shopping.filter((item) => {
                            return item.category === el.dataset.id || item.menu.find((thing) => thing.toLowerCase().includes(el.textContent));;
                        });
                    }
                    displayshopping();
                }
            });
        }
        else
            throw new Error(
                `Please check html selectors, no such element exists`
            );
    } catch (error) {
        console.log(error.message);
        shoppingContainer.textContent = 'There was an error.....    ' + error.message;
    }
});