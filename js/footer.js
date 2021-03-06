const footer = document.querySelector('.footer');
// ********** set date ************
const setDate = () => {
    // select span
    const date = (document.getElementById("date"
    ).innerHTML = new Date().getFullYear());
};

// ********** dispaly header ************
const displayFooter = () => {
    footer.innerHTML = `<!-- footer links -->
    <ul class="footer-links">
    <li>
        <a href="index.html" class="footer-link scroll-link">home</a>
    </li>
    <a href="index.html#about" class="footer-link scroll-link">about</a>    
    <a href="index.html#services" class="footer-link scroll-link">services</a>
    <a href="index.html#gallery" class="footer-link scroll-link">gallery</a>
    <a href="index.html#featured" class="footer-link scroll-link">featured</a>
    <a href="tours.html" class="footer-link">Outings</a>
    <a href="halalrestaurants.html" class="footer-link">halal Restaurants</a>
    <a href="shopping.html" class="footer-link">shopping</a>
    <a href="arabicdoctors.html" class="footer-link">arabic doctors</a>
    <a href="blogs.html" class="footer-link">blogs</a>
    </ul>
    <!-- footer icons -->
    <ul class="footer-icons">
    <!-- single icon -->
    <li>
        <a href="https://www.facebook.com/explory24" target="_blank" class="footer-icon"><i
            class="fab fa-facebook"></i></a>
    </li>
    <li>
    <a href="https://www.instagram.com/explory24_/" target="_blank" class="footer-icon"><i
        class="fab fa-instagram"></i></a>
    </li>
    <!-- end of single icon -->
    <a href="https://www.linkedin.com/in/dina-mohamed-686a17188" target="_blank" class="footer-icon"><i
        class="fab fa-linkedin"></i></a>
    <a href="https://github.com/dinamohamed85/malika-tours" target="_blank" class="footer-icon"><i
        class="fab fa-github"></i></a>
    </ul>
    <p class="copyright">
    copyright &copy; Explory24 your guid for interesting hikes <span id="date"></span>. all rights reserved
    </p>`;
};

window.addEventListener('load', () => {

    try {
        if (footer) {
            console.log('html selectors is true');
            displayFooter();
            setDate();
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