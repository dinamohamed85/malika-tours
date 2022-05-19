const navBar = document.querySelector('.navbar');

// ********** nav toggle ************
const navToggle = () => {
    // select button and links
    const navBtn = document.getElementById("nav-toggle");
    const links = document.getElementById("menu");
    // add event listener
    navBtn.addEventListener("click", () => {
        links.classList.toggle("show-links");
    });
};
// ********** dispaly header ************
const displayHeader = () => {
    navBar.innerHTML = ` <div class="nav-center">
    <!-- nav header -->
    <div class="nav-header">
        <a href="index.html">
        <img src="./images/logo.png" class="nav-logo" alt="" />
        </a>
        <button type="button" class="nav-toggle" id="nav-toggle">
        <i class="fas fa-bars"></i>
        </button>
    </div>
    <!-- end of nav header -->
    <!-- nav links -->
    <ul class="menu" id="menu">
        <!-- single link -->
        <li>        
        <a class="nav-link" href="index.html" class="nav-icon"><i class="fa-solid fa-house menu-icon"></i>home</a>
        </li>
        <!-- end of single link -->
        <!-- single link -->
        <!-- single link -->
        <li>        
        <a class="nav-link" href="about.html" class="nav-icon"><i class="fa-solid fa-address-card menu-icon"></i>about</a>
        </li>
        <!-- end of single link -->
        <!-- single link -->
        <li>
        <a class="nav-link" href="index.html#featured" class="nav-icon"><i class="fa-regular fa-star menu-icon"></i>featured</a>
        </li>
        <!-- end of single link -->
        <!-- single link -->
        <li>
        <a class="nav-link" href="index.html#gallery" class="nav-icon"><i class="fa-regular fa-images menu-icon"></i>gallery</a>
        </li>
        <!-- end of single link -->
        <li><a href="tours.html" class="nav-link" class="nav-icon"><i
            class="fa-solid fa-person-walking-luggage menu-icon"></i>Outings</a>
        </li>
        <li><a href="restaurants.html" class="nav-link" class="nav-icon"><i
            class="fa-solid fa-utensils menu-icon"></i>Restaurants</a>
        </li>
        <li><a href="shopping.html" class="nav-link" class="nav-icon"><i class="fa-solid fa-bag-shopping menu-icon"></i>Shopping</a>
        </li>
        <li><a href="other.html" class="nav-link" class="nav-icon"><i class="fa-solid fa-building-user  menu-icon"></i>Other</a>
        </li>

    </ul>
    <!-- end of nav links -->   
    </div>`;
};

window.addEventListener('DOMContentLoaded', () => {

    try {
        if (navBar) {
            console.log('html selectors is true');
            displayHeader();
            navToggle();
        }
        else
            throw new Error(
                `Please check html selectors, no such element exists`
                // toursContainer.textContent = 'There was an error.....    ' ;
            );
    }
    catch (error) {
        console.log(error.message);
        toursContainer.textContent = 'There was an error.....    ' + error.message;
    }
});