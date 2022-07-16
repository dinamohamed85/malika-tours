import tours from '../data/db-tours.js';

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
      return `<article class="item" data-id="${id}">
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
                    Location</a> </p>
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