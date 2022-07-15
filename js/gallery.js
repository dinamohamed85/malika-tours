import gallery from '../data/db-gallery.js';
import tours from '../data/db-tours.js';
let gallerylist = [];

const galleryContainer = document.querySelector('.gallery-center');

const displayGallery = () => {
    galleryContainer.innerHTML = gallerylist
        .map((item, index) => {
            const { id, itemID, image, title, location } = item;
            return ` <article class="gallery-img-container">
            <a href="${location}" target="_blank">           
        <img src="${image}" class="gallery-img" alt="${title}" /></a>
        <p class="gallery-title"> ${title}</p>
      </article>`;
        })
        .join('');
};

window.addEventListener('DOMContentLoaded', () => {
    try {
        if (galleryContainer) {
            console.log('html selectors is true');
            gallerylist = [...gallery];
            displayGallery();
        }
        else
            throw new Error(
                `Please check html selectors, no such element exists`
            );
    } catch (error) {
        console.log(error.message);
        galleryContainer.textContent = 'There was an error.....    ' + error.message;
    }
});