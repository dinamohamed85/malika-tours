import tours from '../data/db-tours.js';
let filteredTours = [];
const toursContainer = document.querySelector('.tours-container');
const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');
const clearButton = document.querySelector('.clear-btn');
const categoriesDOM = document.querySelector('.categories');
const toursTitle = document.querySelector('.tours-title');


let currentCategory = 'all';

const displayTours = () => {

    if (filteredTours.length < 1) {
        toursTitle.innerHTML = '';
        toursContainer.innerHTML = `<h2 class="section-title" >Sorry, no tours matched your search</h2>`;
        return;
    }
    let text1 = '';
    let text2 = 'to visit in Munich and cities around';
    if (currentCategory == 'all')
        text1 = filteredTours.length + ' places ';

    else if (currentCategory == 'cities') {
        text1 = filteredTours.length + ' ' + currentCategory;
    }    
    else if (currentCategory == 'kids' || currentCategory == 'swimming') {
        text1 = filteredTours.length + ' places for ' + currentCategory;
    }
    else if (currentCategory == 'animals'|| currentCategory == 'free tickets') {
        text1 = filteredTours.length + ' places has ' + currentCategory;
    }
    else if (currentCategory == 'winter') {
        text1 = filteredTours.length + ' places in ' + currentCategory;
    }
    else if (currentCategory == 'indoor') {
        text1 = filteredTours.length +' '+ currentCategory +' place '  ;
    }
    else 
        text1 = filteredTours.length +' '+ currentCategory;
        text2 = 'to visit in Munich.'; 

    toursTitle.innerHTML = `<div class="tours-title">
        <h2>best <span class="featured-num">${text1}</span> ${text2}</h2>
    </div>`;

    toursContainer.innerHTML = filteredTours
        .map((tour) => {
            const { id, title, category, icon, image, country, date, location, site, address, description, thingstodo, likes, duration, season, featured, price ,more,phone,facebook,instagram} = tour;
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
                ${facebook ? `<p> <a href="${facebook}" target="_blank"><i
                class="fa-brands fa-facebook-square facebook-icon"></i></a> </p>` : ``} 
                ${instagram ? `<p> <a href="${instagram}" target="_blank"><i
                class="fa-brands fa-instagram-square facebook-icon"></i></a> </p>` : ``}   
            </div>
            <p>
            ${phone ? `<p> <i class="fa-solid fa-phone site-icon"></i>
            <span class="more-info">  ${phone}</span> </p> `  : ``}
            ${address}               
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

// Filter Buttons
const displayButtons = () => {

    searchInput.value = '';

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
        filteredTours = [...tours];

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
                filteredTours = [...tours];
                searchInput.value = '';
                currentCategory = '';
                displayTours();
            })

            categoriesDOM.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('category-btn')) {
                    currentCategory = el.dataset.id;
                    if (el.dataset.id === 'all') {
                        filteredTours = [...tours];
                    } else {
                        filteredTours = tours.filter((tour) => {
                            return tour.category === el.dataset.id || tour.thingstodo.find((item) => item.toLowerCase().includes(el.textContent));
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
            );
    } catch (error) {
        console.log(error.message);
        toursContainer.textContent = 'There was an error.....    ' + error.message;
    }
});