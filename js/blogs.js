import blogs from '../data/db-blogs.js';
let filteredblogs = [];
let urlParams = '';
const blogsContainer = document.querySelector('.list-container');
const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');
const clearButton = document.querySelector('.clear-btn');
const categoriesDOM = document.querySelector('.categories');
// const blogsTitle = document.querySelector('.blogs-title');


let currentCategory = 'all';

const displayblogs = () => {

    if (filteredblogs.length < 1) {
        blogsContainer.innerHTML = `<h2 class="section-title" >Sorry, no blogs matched your search</h2>`;
        return;
    }
    // let text0 = filteredblogs.length;
    let text1 = '';
    let text2 = ' in Munich and arounds';

    if (currentCategory == 'all') {
        text2 = ' Attractions & Top sights & Things to Do in Munich and tours in Bayern.';
    }
    else if (currentCategory == 'best') {
        text1 = ' best places ';
        text2 = ' in Munich and cities around';
    }
    else if (currentCategory == 'featured') {
        text1 = ' top places ';
        text2 = ' in Munich and cities around';
    }
    else if (currentCategory == 'cities') {
        text1 = ' top ' + currentCategory;
        text2 = ' to visit in Bayern';
    }
    else if (currentCategory == 'lakes') {
        text1 = ' top ' + currentCategory;
        text2 = ' to visit in Munich and Bayern';
    }
    else if (currentCategory == 'kids' || currentCategory == 'swimming') {
        text1 = ' top places for ' + currentCategory;
    }
    else if (currentCategory == 'animals' || currentCategory == 'free tickets') {
        text1 = ' top places has ' + currentCategory;
    }
    else if (currentCategory == 'winter') {
        text1 = ' top places in ' + currentCategory;
    }
    else if (currentCategory == 'indoor') {
        text1 = ' ' + currentCategory + ' place ';
    }
    else
        text1 = ' top ' + currentCategory;

    // blogsTitle.innerHTML = `<div class="section-title">
    //     <h2> ${text0}<span class="featured-num">${text1}</span> ${text2}</h2>
    // </div>`;

    blogsContainer.innerHTML = filteredblogs
        .map((blog, index) => {
            const { id, title, category, icon, categorylink, images, country, date, location, destenation, description, activities, likes, season, featured, price, textbrief, text1, text2, text3, owner, ownerlink, fblink, rate, video } = blog;
            return `<a href="${fblink}"
            target="_blank"> <article class="blog">            
              <div class="blog-img-container">
              ${video ? ` <video controls autoplay muted loop class="blog-img">
              <source src="${video}" type="video/mp4" />
              Sorry, your browser does not support embedded videos
            </video>`
                    : `<img src="${images[0]}" class="blog-img" alt="" />`} 
                
                <p class="img-title"> ${activities[0]} <span class="blog-price"> ${price} €</span> </p>
                <h4>
                    <i class="fas fa-heart tour-love-icon"></i> ${likes}
                  </h4>
              </div>
              <!-- blog info -->
              <div class="blog-info">
                <div class="blog-title">
                  <h4>${index + 1}. ${title}</h4>
                  
                </div>
                <p>${textbrief}
                </p>
                <div>
                  <div>
                    <p class="activtiy"><i class="fa-solid fa-star"></i> ${rate}</p>
                    ${destenation ? `<p class="activtiy"><i class="fa-solid fa-location-dot"></i> ${destenation}</p>` : ``} 
                   
                  </div>
                </div>
                <!-- blog footer -->
                <div class="blog-footer">
                  <p><span class="post-bytxt">Posted by </span>
                    <span class="post-by">${owner}</span></p>
                  <p><a
                      href="${fblink}"
                      target="_blank"><i class="fab fa-facebook site-icon"></i>
                    </a></p>
                </div>           
        </div>
        </article> </a>`;
        })
        .join('');
};

// Filter Buttons
const displayButtons = () => {

    // searchInput.value = '';

    // const buttons = [
    //     'all', 'featured',
    //     ...new Set(blogs.map((blog) => blog.category))
    // ];
    // // console.log(buttons);
    // categoriesDOM.innerHTML = buttons
    //     .map((category) => {
    //         return `<button class='category-btn' data-id="${category}">${category}</button>`;
    //     })
    //     .join('');
};

const getListBycategory = (category) => {

    console.log(category);
    window.history.replaceState(null, null, '?category=' + currentCategory);

    if (category == 'all') {
        filteredblogs = [...blogs];
    }
    else if (category === 'best') {
        filteredblogs = blogs.filter((blog) => {
            return blog.featured || blog.category == 'tours' || blog.category == 'restaurants';
        });
    }
    else if (category === 'featured') {
        filteredblogs = blogs.filter((blog) => {
            return blog.featured;
        });
    }
    else {
        filteredblogs = blogs.filter((blog) => {
            return blog.category == category;
        });
    }
};

window.addEventListener('DOMContentLoaded', () => {
    const queryString = window.location.search;
    console.log('queryString of url  : ' + queryString);
    try {
        if (queryString) {

            urlParams = new URLSearchParams(queryString);
            if (urlParams.get('category'))
                currentCategory = urlParams.get('category');
            console.log(currentCategory);
        }
        getListBycategory(currentCategory);

        if (blogsContainer && form && searchInput && clearButton && categoriesDOM) {
            console.log('html selectors is true');
            displayblogs();
            // displayButtons();

            // Text Filter
            form.addEventListener('keyup', () => {
                const inputValue = searchInput.value.toLowerCase();
                filteredblogs = blogs.filter((blog) => {
                    return blog.title.toLowerCase().includes(inputValue) || blog.activities.find((item) => item.toLowerCase().includes(inputValue)) || blog.category.toLowerCase().includes(inputValue);
                });
                currentCategory = ' place for ' + inputValue;
                displayblogs();
            });

            // Text clear
            clearButton.addEventListener('click', () => {
                getListBycategory(category);
                searchInput.value = '';
                currentCategory = '';
                displayblogs();
            })

            categoriesDOM.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('category-btn')) {
                    currentCategory = el.dataset.id;

                    getListBycategory(currentCategory);
                    searchInput.value = '';
                    displayblogs();
                }
            });
        }
        else
            throw new Error(
                `Please check html selectors, no such element exists`
            );
    } catch (error) {
        console.log(error.message);
        blogsContainer.textContent = 'There was an error.....    ' + error.message;
    }
});