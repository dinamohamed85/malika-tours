import tours from '../data/db-tours.js';
const linkBtns = [...document.querySelectorAll('.nav-link')];

// ********** set date ************
// select span
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("menu");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// ********** ************ ************ ************ ************
// ********** smooth scroll ************
// select links
// const scrollLinks = document.querySelectorAll(".nav-link");
// scrollLinks.forEach(link => {
//   link.addEventListener("click", e => {
//     // prevent default
//     e.preventDefault();
//     links.classList.remove("show-links");
//     // submenu.classList.remove('show');

//     const id = e.target.getAttribute("href").slice(1);
//     const element = document.getElementById(id);
//     //
//     // console.log(element);

//     let position = element.offsetTop - 62;
//     // console.log(position);

//     window.scrollTo({
//       left: 0,
//       // top: element.offsetTop,
//       top: position,
//       behavior: "smooth"
//     });
//   });
// });

// ********** ************ ************ ************ ************
// **********  display featured list ************

let filteredTours = [];
const toursContainer = document.querySelector('.featured-center');
const toursTitle = document.querySelector('.tours-title');

const displayTours = () => {

  toursTitle.innerHTML = '';

  if (filteredTours.length < 1) {
    toursTitle.innerHTML = '';
    toursContainer.innerHTML = `<h2 class="section-title" >Sorry, no tours matched your search</h2>`;
    return;
  }
  let text = '';
  text = 'top ' + filteredTours.length + ' places ';

  toursTitle.innerHTML = `<div class="tours-title">
        <h2>find <span class="featured-num">${text}</span> to visit in Munich and cities around</h2>
    </div>`;

  toursContainer.innerHTML = filteredTours
    .map((tour) => {
      const { id, title, category, icon, image, country, date, location, site, address, description, thingstodo, likes, duration, season, featured, price } = tour;
      return `<article class="tour-card" data-id="${id}">
            <div class="tour-img-container">
            <a href="${site}" target="_blank">
                <img src="${image}" class="tour-img" alt="" /></a>
            <p class="tour-date">${date}</p>
            <i class="fa-solid fa-star featured-icon"></i> 
            </div>
            <!-- tour info -->
            <div class="tour-info">
            <div class="tour-title">
                <h4><a href="${site}" target="_blank"><i
                    class="fa-solid fa-earth-europe site-icon"></i>${title}</a></h4>
                <p><a href="${location}" target="_blank"><i
                    class="fa-solid fa-location-dot site-icon"></i>
                    ${country}</a> </p>
            </div>
            <p>
                ${address}
            </p>
            <p>${description}
            </p>
            <div>
                <h4> Activities to do :</h4>
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

window.addEventListener('DOMContentLoaded', () => {

  try {

    filteredTours = tours.filter((tour) => {
      return tour.featured;
    });

    if (toursContainer && toursTitle) {
      console.log('html selectors is true');
      displayTours();
    }
    else
      throw new Error(
        `Please check html selectors, no such element exists`
        // toursContainer.textContent = 'There was an error.....    ' ;
      );
  } catch (error) {
    console.log(error.message);
    toursContainer.textContent = 'There was an error.....    ' + error.message;
  }
});