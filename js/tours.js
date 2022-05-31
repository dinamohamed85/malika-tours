import tours from '../data/db-tours.js';
let filteredTours = [];
const toursContainer = document.querySelector('.tours-container');
const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');
const clearButton = document.querySelector('.clear-btn');
const categoriesDOM = document.querySelector('.categories');
const toursTitle = document.querySelector('.tours-title');


let currentCategory = 'featured';

const displayTours = () => {

    if (filteredTours.length < 1) {
        toursTitle.innerHTML = '';
        toursContainer.innerHTML = `<h2 class="section-title" >Sorry, no tours matched your search</h2>`;
        return;
    }
    let text0 = filteredTours.length  ;
    let text1 = '';
    let text2 = 'to visit in Munich and arounds';

    if (currentCategory == 'all' ){       
        text2 = ' best places  to visit in Munich and cities around';
    }
    else if ( currentCategory == 'featured'){     
        text1 = ' top places ';
        text2 = ' to visit in Munich and cities around';
    }
    else if (currentCategory == 'cities') {
        text1 = ' top ' + currentCategory ;
        text2 = ' to visit in Bayern'; 
    }  
    else if (currentCategory == 'lakes') {
        text1 = ' top ' + currentCategory;
        text2 = ' to visit in Munich and Bayern'; 
    }   
    else if (currentCategory == 'kids' || currentCategory == 'swimming') {
        text1 = ' top places for ' + currentCategory;
    }
    else if (currentCategory == 'animals'|| currentCategory == 'free tickets') {
        text1 =  ' top places has '+ currentCategory;
    }
    else if (currentCategory == 'winter') {
        text1 = ' top places in '+ currentCategory;
    }
    else if (currentCategory == 'indoor') {
        text1 = ' '+ currentCategory +' place '  ;
    }
    else 
        text1 = ' top '+ currentCategory;    

    toursTitle.innerHTML = `<div class="section-title">
        <h2> ${text0}<span class="featured-num">${text1}</span> ${text2}</h2>
    </div>`;

    toursContainer.innerHTML = filteredTours
        .map((tour) => {
            const { id, title, category, icon, image, country, date, location, site, address,addressdesc, description, thingstodo, likes, duration, season, featured, price ,more,phone,facebook,instagram} = tour;
            return `<article class="tour-card" data-id="${id}">
            <div class="tour-img-container">
            <a href="${site}" target="_blank">
                <img src="${image}" class="tour-img" alt="${title}" /></a>
            <p class="tour-date">${date}</p>
            ${featured ? `<i class="fa-solid fa-star featured-icon"></i>` : ``} 
            </div>
            <!-- tour info -->
            <div class="tour-info">
            <div class="tour-title">
                <h4><a href="${site}" target="_blank"><i
                    class="fa-solid fa-earth-europe site-icon"></i>${title}</a></h4>
                    <p>
                    <i class="fas fa-heart tour-love-icon"></i> ${likes}
                    </p>
                ${facebook ? `<p> <a href="${facebook}" target="_blank"><i
                class="fa-brands fa-facebook-square facebook-icon"></i></a> </p>` : ``} 
                ${instagram ? `<p> <a href="${instagram}" target="_blank"><i
                class="fa-brands fa-instagram-square facebook-icon"></i></a> </p>` : ``}   
            </div>
            <section class="tour-activtiy">           
            ${address ? `<p><a href="${location}" target="_blank">
            <span class="more-info">${address}</span></a> </p>` : ``}  
            ${location ? `<p>
            <a href="${location}" target="_blank">
            <span class="more-info"><i
            class="fa-solid fa-diamond-turn-right site-icon"></i>
            Location </span></a></p>` : ``}  
             
            </section>
            <p>
            ${phone ? `<p> <i class="fa-solid fa-phone phone-icon"></i>
            <span class="more-info">  ${phone}</span> </p> `  : ``} 
            </p>  
            <p>
            ${addressdesc}               
            </p>            
            <p>
            ${description}           
            </p>
            <p>  ${more ? `<p class="more-desc">${more} </p>` : ``} 
            </p>
            <div>
                <h4> Activities to do in <span class="featured-num">${title}</span> :</h4>
                <div class="tour-activtiy">
                ${thingstodo.map((thing) => {
                return `<p class="activtiy">${thing}</p>`
            }).join('')}              
                </div>
            </div>
            <!-- tour footer -->
            <div class="tour-footer">
               
                <p>${duration} Hours</p>
                <p>from ${price}€</p>
            </div>
        </div>
        </article>`;
        })
        .join('');
};

// Filter Buttons
const displayButtons = () => {

    searchInput.value = '';

    const buttons = [
        'all','featured',
        ...new Set(tours.map((tour) => tour.category)),
        'halal restaurants'
    ];
    // console.log(buttons);
    categoriesDOM.innerHTML = buttons
        .map((category) => {
            return `<button class='category-btn' data-id="${category}">${category}</button>`;
        })
        .join('');
};

const getListBycategory = (category) => {
    console.log(category);
    if(category =='all'){
        filteredTours = [...tours];
    }
    else if (category === 'featured') {
        filteredTours = tours.filter((tour) => {
            return tour.featured;
        });
    }
    else if (category === 'halal restaurants') {
        //open halalrestaurants.html
        console.log('open halal restaurants page');
        window.open('halalrestaurants.html','_self');
    }
    else{
        filteredTours = tours.filter((item) => {
            return item.category == category || item.thingstodo.find((el) => el.toLowerCase() == category);
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

        if (toursContainer && form && searchInput && clearButton && categoriesDOM && toursTitle) {
            console.log('html selectors is true');
            displayTours();
            displayButtons();

            // Text Filter
            form.addEventListener('keyup', () => {
                const inputValue = searchInput.value.toLowerCase();
                filteredTours = tours.filter((tour) => {
                    return tour.title.toLowerCase().includes(inputValue) || tour.thingstodo.find((item) => item.toLowerCase().includes(inputValue)) || tour.category.toLowerCase().includes(inputValue);
                });
                currentCategory = ' place for ' + inputValue;
                displayTours();
            });

            // Text clear
            clearButton.addEventListener('click', () => {
                getListBycategory(category);
                searchInput.value = '';
                currentCategory = '';
                displayTours();
            })

            categoriesDOM.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('category-btn')) {
                    currentCategory = el.dataset.id;
                    getListBycategory(currentCategory);

                    searchInput.value = '';
                    displayTours();
                }
            });
        }
        else
            throw new Error(
                `Please check html selectors, no such element exists`
            );
    } catch (error) {
        console.log(error.message);
        toursContainer.textContent = 'There was an error.....    ' + error.message;
    }
});