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
        <li>
        <!-- single link -->
        <a class="nav-link" href="index.html" class="nav-icon"><i class="fa-solid fa-house menu-icon"></i>home</a>
        </li>
        <!-- end of single link -->
        <!-- single link -->
        <li>
        <a class="nav-link" href="index.html#featured" class="nav-icon"><i class="fa-solid fa-star menu-icon"></i>featured</a>
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
        <li><a href="more.html" class="nav-link" class="nav-icon"><i class="fa-solid fa-ellipsis  menu-icon"></i>More</a>
        </li>
    </ul>
    <!-- end of nav links -->
    <!-- nav social media icons -->     
    <ul class="nav-icons">
        <li>
        <a href="https://www.facebook.com/dina.mohamed85" target="_blank" class="nav-icon"><i
            class="fab fa-facebook"></i></a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/dina-mohamed-686a17188" target="_blank" class="nav-icon"><i
            class="fab fa-linkedin"></i></a>
        </li>
        <li>
        <a href="https://github.com/dinamohamed85/malika-tours" target="_blank" class="nav-icon"><i
            class="fab fa-github"></i></a>
        </li>
        <!-- end of nav social media icons -->
    </ul>
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