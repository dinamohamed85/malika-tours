
import shopping from '../data/db-shopping.js';
let filteredList = [];
const shoppingContainer = document.querySelector('.list-container');
const categoriesDOM = document.querySelector('.categories');
const shoppingTitle = document.querySelector('.section-title');

let currentCategory = 'halal markets';

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
    else if (currentCategory == 'Online') {
        text1 = 'top ';
        text2 = filteredList.length + ' ' + currentCategory + ' shopping ';
    }
    else if (currentCategory == 'cafes & bakery') {
        text1 = 'top ';
        text2 = filteredList.length + ' ' + currentCategory;
    }
    else {
        text1 = 'top ';
        text2 = filteredList.length + ' ' + currentCategory;
    }


    shoppingTitle.innerHTML = `<div class="section-title">
        <h2> ${text1}<span class="featured-num">${text2}</span> in Munich</h2>
    </div>`;

    shoppingContainer.innerHTML = filteredList
        .map((item, index) => {
            const { id, title, category, icon, images, location, site, description, likes, featured, address, phone, rate, thingstodo, facebook ,instagram,more} = item;
            return `<article class="item">
        <div class="tour-img-container"> 
        ${site ? `<a href="${site}" target="_blank">
            <img src="${images[0]}" class="item-photo" alt="${title}"/></a> ` : `<a href = "${location}" target = "_blank" > <img src="${images[0]}" class="item-photo" /></a>`}              
        </div>
        <div class="item-info">
        <header>            
            <h4>
            ${site ? ` <a href="${site}" target="_blank"><i class="fa-solid fa-earth-europe site-icon"></i>${index + 1}- ${title}</a>` : `${index + 1}- ${title}`}
            </h4>
            <p>  
            ${facebook ? `<a href="${facebook}" target="_blank"><i
            class="fa-brands fa-facebook-square facebook-icon"></i></a> ` : ``}  
            ${instagram ? `<a href="${instagram}" target="_blank"><i
            class="fa-brands fa-instagram-square facebook-icon"></i></a> ` : ``}          
            </p>   
        </header>
        <section>
        ${location ? `<p><a href="${location}" target="_blank"><i
            class="fa-solid fa-location-dot site-icon"></i>
            <span class="more-info">      ${address}</span></a> </p> ` : ``}
        ${phone ? `<p> <i class="fa-solid fa-phone site-icon"></i>
            <span class="more-info">  ${phone}</span> </p> `  : ``}
                        
        </section>
        <p class="item-text">
            ${description}
            ${more ? `<p class="more-desc">${more} </p>` : ``} 
        </p>
        <div>
            <h5>Things to do :</h5>
            <div class="tour-activtiy">
            ${thingstodo.map((item) => {
                let text;
                if (item == 'halal')
                    text = `<p class="activtiy"><span class="tour-love-icon">${item}</span></p>`

                else if (item == 'arabic')
                    text = `<p class="activtiy"><span class="ar-icon">${item}</span></p>`

                else if (item == 'heringe')
                    text = `<p class="activtiy"><span class="site-icon">${item}</span></p>`

                else text = `<p class="activtiy">${item}</p>`

                return text;
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

const getListBycategory = (category) => {
    if(category =='all'){
        filteredList = [...shopping];
    }
    else{
        filteredList = shopping.filter((item) => {
            return item.category == category || item.thingstodo.find((el) => el.toLowerCase() == category);;
        });
    }
};

window.addEventListener('DOMContentLoaded', () => {

    const queryString = window.location.search;
    try {   
        if(queryString){
            console.log(queryString);
            const urlParams = new URLSearchParams(queryString);
            if(urlParams.get('category'))
            currentCategory = urlParams.get('category');
            console.log(currentCategory);
        }

        getListBycategory(currentCategory);

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
                            return item.category === el.dataset.id || item.thingstodo.find((thing) => thing.toLowerCase().includes(el.textContent));;
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