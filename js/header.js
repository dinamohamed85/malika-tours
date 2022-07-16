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

    // ********** smooth scroll ************
    if (window.location.pathname.slice(1) == "index.html") {
        // select links
        const scrollLinks = document.querySelectorAll(".scroll-link");
        scrollLinks.forEach(link => {
            link.addEventListener("click", e => {
                // prevent default
                e.preventDefault();
                links.classList.remove("show-links");

                const id = e.target.getAttribute("href").slice(11);
                console.log("id scroll....   ",id);
                scrollWindow(id);
            });
        });

        //if page opend with hash (id) of section
        console.log(window.location.hash);
        if (window.location.hash){
            
            const id = (window.location.hash).slice(1);
            console.log("id hash ....   ",id);
            scrollWindow(id);
        }
    }
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
        <a class="nav-link scroll-link" href="index.html#hero" class="nav-icon"><i class="fa-solid fa-house menu-icon"></i>home</a>
        </li>
        <!-- end of single link -->
        <!-- single link -->
        <!-- single link -->
        <li>        
        <a class="nav-link scroll-link" href="index.html#about" class="nav-icon"><i class="fa-solid fa-address-card menu-icon"></i>about</a>
        </li>
        <!-- end of single link -->
        <!-- single link -->
        <li>
        <a class="nav-link scroll-link" href="index.html#featured" class="nav-icon"><i class="fa-regular fa-star menu-icon"></i>featured</a>
        </li>
        <!-- end of single link -->
        <!-- single link -->
        <li>
        <a class="nav-link scroll-link" href="index.html#gallery" class="nav-icon"><i class="fa-regular fa-images menu-icon"></i>gallery</a>
        </li>
        <!-- end of single link -->
        <li><a href="tours.html" class="nav-link" class="nav-icon"><i
            class="fa-solid fa-person-walking-luggage menu-icon"></i>Outings</a>
        </li>
        <li><a href="halalrestaurants.html" class="nav-link" class="nav-icon"><i
            class="fa-solid fa-utensils menu-icon"></i>Halal Restaurants</a>
        </li>
        <li><a href="shopping.html" class="nav-link" class="nav-icon"><i class="fa-solid fa-bag-shopping menu-icon"></i>Shopping</a>
        </li>
        <li><a href="arabicdoctors.html" class="nav-link" class="nav-icon"><i class="fa-solid fa-user-doctor  menu-icon"></i>arabic doctors</a>
        </li>
        <li><a href="other.html" class="nav-link" class="nav-icon"><i class="fa-solid fa-graduation-cap  menu-icon"></i>apps & other</a>
        </li>        
    </ul>
    <!-- end of nav links -->   
    </div>`;
};


window.addEventListener('load', () => {

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

const scrollWindow = (id) => {

    const element = document.getElementById(id);
    console.log("element...   ",element);
    let position = element.offsetTop - 62;
    console.log(position);

    window.scrollTo({
        left: 0,
        // top: element.offsetTop,
        top: position,
        behavior: "smooth"
    });
};