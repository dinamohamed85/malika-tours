
import arabicdoctors from '../data/db-arabicdoctors.js';
let filteredList = [];
const arabicdoctorsContainer = document.querySelector('.list-container');
const categoriesDOM = document.querySelector('.categories');
const arabicdoctorsTitle = document.querySelector('.section-title');

let currentCategory = 'all';

const displayarabicdoctors = () => {

    if (filteredList.length < 1) {
        arabicdoctorsTitle.innerHTML = '';
        arabicdoctorsContainer.innerHTML = `<h2 class="section-title" >Sorry, no arabicdoctors matched your search</h2>`;
        return;
    }
    let text1 = '';
    let text2 = '';
    if (currentCategory == 'all') {
        text1 = 'top ';
        text2 = filteredList.length + ' Arabic Doctors  ';
    }
    else if (currentCategory == 'featured') {
        text1 = 'featured ';
        text2 = filteredList.length + ' things ';
    }   
    else {
        text1 = 'top ';
        text2 = filteredList.length + ' ' + currentCategory + ' doctors';
    }


    arabicdoctorsTitle.innerHTML = `<div class="section-title">
        <h2> ${text1}<span class="featured-num">${text2}</span> in Munich</h2>
    </div>`;

    arabicdoctorsContainer.innerHTML = filteredList
        .map((item, index) => {
            const { id, title, category, icon, images, location, site, description, more,likes, featured, address1,address2, phone, rate, thingstodo, facebook,instagram,termin,email } = item;
            return `<article class="item">
        <div class="tour-img-container"> 
        ${location ? `<a href="${location}" target="_blank"><img src="${images[0]}" class="item-photo" alt="${title}"/></a>` 
        : site ? `<a href = "${site}" target = "_blank"><img src="${images[0]}" class="item-photo" alt="${title}"/></a>` 
        : facebook ? `<a href = "${facebook}" target = "_blank"><img src="${images[0]}" class="item-photo" alt="${title}"/></a>`
        : `<img src="${images[0]}" class="item-photo" alt="${title}"/>`} 

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
            ${instagram ? `<a href="${instagram}" target="_blank"><i
            class="fa-brands fa-instagram-square facebook-icon"></i></a> ` : ``}           
            </p>   
        </header>
        <section class="tour-activtiy">
        <p>${location ? `<a href="${location}" target="_blank"><i
            class="fa-solid fa-location-dot site-icon"></i>${address1}</a> ` : ``} </p>
            ${address2 ? `<a href="${location}" target="_blank">${address2}</a> ` : ``} </p>
            <p>${phone ? `<i class="fa-solid fa-phone phone-icon"></i>${phone} ` : ``} </p> 
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
        'all',
        ...new Set(arabicdoctors.map((item) => item.category)),
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

        filteredList = [...arabicdoctors];
        if (arabicdoctorsContainer && categoriesDOM && arabicdoctorsTitle) {
            arabicdoctorsTitle.innerHTML = '';
            console.log('html selectors is true');
            displayarabicdoctors();
            displayButtons();

            categoriesDOM.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('category-btn')) {
                    currentCategory = el.dataset.id;
                    if (el.dataset.id === 'all') {
                        filteredList = [...arabicdoctors];
                    }

                    else if (el.dataset.id === 'featured') {
                        filteredList = arabicdoctors.filter((item) => {
                            return item.featured
                        });
                    }
                    else {
                        filteredList = arabicdoctors.filter((item) => {
                            return item.category === el.dataset.id || item.thingstodo.find((thing) => thing.toLowerCase().includes(el.textContent));;
                        });
                    }
                    displayarabicdoctors();
                }
            });
        }
        else
            throw new Error(
                `Please check html selectors, no such element exists`
            );
    } catch (error) {
        console.log(error.message);
        arabicdoctorsContainer.textContent = 'There was an error.....    ' + error.message;
    }
});