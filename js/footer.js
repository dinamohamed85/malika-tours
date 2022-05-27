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
    <a href="about.html" class="footer-link scroll-link">about</a>    
    <a href="index.html#services" class="footer-link scroll-link">services</a>
    <a href="index.html#gallery" class="footer-link scroll-link">gallery</a>
    <a href="index.html#featured" class="footer-link scroll-link">featured</a>
    <a href="tours.html" class="footer-link scroll-link">Outings</a>
    <a href="halalrestaurants.html" class="footer-link scroll-link">halal Restaurants</a>
    <a href="shopping.html" class="footer-link scroll-link">shopping</a>
    <a href="other.html" class="footer-link scroll-link">arabic doctors</a>
    </ul>
    <!-- footer icons -->
    <ul class="footer-icons">
    <!-- single icon -->
    <li>
        <a href="https://www.facebook.com/munich.explory24" target="_blank" class="footer-icon"><i
            class="fab fa-facebook"></i></a>
    </li>
    <li>
    <a href="https://www.instagram.com/munich.explory24/" target="_blank" class="footer-icon"><i
        class="fab fa-instagram"></i></a>
</li>
    <!-- end of single icon -->
    <a href="https://www.linkedin.com/in/dina-mohamed-686a17188" target="_blank" class="footer-icon"><i
        class="fab fa-linkedin"></i></a>
    <a href="https://github.com/dinamohamed85/malika-tours" target="_blank" class="footer-icon"><i
        class="fab fa-github"></i></a>
    </ul>
    <p class="copyright">
    copyright &copy; ExploreY your guid for interesting hikes 2021-<span id="date"></span>. all rights reserved
    </p>`;
};

window.addEventListener('DOMContentLoaded', () => {

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