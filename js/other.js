
import other from '../data/db-other.js';
let filteredList = [];
const otherContainer = document.querySelector('.list-container');
const categoriesDOM = document.querySelector('.categories');
const otherTitle = document.querySelector('.section-title');

let currentCategory = 'all';

const displayother = () => {

    if (filteredList.length < 1) {
        otherTitle.innerHTML = '';
        otherContainer.innerHTML = `<h2 class="section-title" >Sorry, no other matched your search</h2>`;
        return;
    }
    let text1 = '';
    let text2 = '';
    if (currentCategory == 'all') {
        text1 = 'important ';
        text2 = filteredList.length + ' things  ';
    }
    else if (currentCategory == 'featured') {
        text1 = 'featured ';
        text2 = filteredList.length + ' things ';
    }
    else if (currentCategory == 'useful apps') {
        text1 = 'top ';
        text2 = filteredList.length + ' ' + currentCategory + ' you need ';
    }
    else if (currentCategory == 'food homemade') {
        text1 = 'top ';
        text2 = filteredList.length + ' ' + currentCategory + ' service';
    }
    else {
        text1 = 'top ';
        text2 = filteredList.length + ' ' + currentCategory;
    }


    otherTitle.innerHTML = `<div class="section-title">
        <h2> ${text1}<span class="featured-num">${text2}</span> in Munich</h2>
    </div>`;

    otherContainer.innerHTML = filteredList
        .map((item, index) => {
            const { id, title, category, icon, images, location, site, description, more,likes, featured, address1,address2, phone, rate, thingstodo, facebook,termin,email } = item;
            return `<article class="item">
        <div class="tour-img-container"> 
        ${location ? `<a href="${location}" target="_blank"><img src="${images[0]}" class="item-photo"/></a>` 
        : site ? `<a href = "${site}" target = "_blank"><img src="${images[0]}" class="item-photo"/></a>` 
        : facebook ? `<a href = "${facebook}" target = "_blank"><img src="${images[0]}" class="item-photo"/></a>`
        : `<img src="${images[0]}" class="item-photo"/>`} 

        </div>
        <div class="item-info">
        <header>            
            <h3>
            ${site ? `<a href="${site}" target="_blank"><i class="fa-solid fa-earth-europe site-icon"></i>${index + 1}- ${title}</a>` :
                    `<a href="${facebook}" target="_blank"><i class="fa-solid fa-earth-europe site-icon"></i>${index + 1}- ${title}</a>`}
            </h3>
            <p>  
            ${facebook ? `<a href="${facebook}" target="_blank"><i
            class="fa-brands fa-facebook-square facebook-icon"></i></a> ` : ``}           
            </p>   
        </header>
        <section class="tour-activtiy">
        <p>${location ? `<a href="${location}" target="_blank"><i
            class="fa-solid fa-location-dot site-icon"></i>${address1}</a> ` : ``} </p>
            ${address2 ? `<a href="${location}" target="_blank">${address2}</a> ` : ``} </p>
            <p>${phone ? `<i class="fa-solid fa-phone site-icon"></i>${phone} ` : ``} </p> 
            <p>${termin ? `<a href="${termin}" target="_blank"><i class="fa-solid fa-calendar-day site-icon"></i>Appointment</a>` : ``}</p> 
            <p>${email ? `<i class="fa-solid fa-envelope-open site-icon"></i>${email}` : ``}</p> 
        </section>
        <p class="item-text">
            ${description}
            ${more ? `<p class="more-desc">${more} </p>` : ``} 
        </p>
        <div>
            <h5>things to do :</h5>
            <section class="tour-activtiy">
            ${thingstodo.map((item) => {
                let text;
                if (item == 'halal')
                    text = `<p><span class="tour-love-icon">${item}</span></p>`

                else if (item == 'arabic')
                    text = `<p><span class="ar-icon">${item}</span></p>`
               
                else text = `<p>${item}</p>`

                return text;
            }).join('')} 
                      
            </section>
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
        ...new Set(other.map((item) => item.category)),
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

        filteredList = [...other];
        if (otherContainer && categoriesDOM && otherTitle) {
            otherTitle.innerHTML = '';
            console.log('html selectors is true');
            displayother();
            displayButtons();

            categoriesDOM.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('category-btn')) {
                    currentCategory = el.dataset.id;
                    if (el.dataset.id === 'all') {
                        filteredList = [...other];
                    }

                    else if (el.dataset.id === 'featured') {
                        filteredList = other.filter((item) => {
                            return item.featured
                        });
                    }
                    else {
                        filteredList = other.filter((item) => {
                            return item.category === el.dataset.id || item.thingstodo.find((thing) => thing.toLowerCase().includes(el.textContent));;
                        });
                    }
                    displayother();
                }
            });
        }
        else
            throw new Error(
                `Please check html selectors, no such element exists`
            );
    } catch (error) {
        console.log(error.message);
        otherContainer.textContent = 'There was an error.....    ' + error.message;
    }
});