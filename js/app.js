// ********** set date ************
// select span
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// ********** nav kids toggle ************
// select button and links
const navkidsBtn = document.getElementById("nav-kids-toggle");
const kids = document.getElementById("nav-kids");
// add event listener
navkidsBtn.addEventListener("mouseover", () => {
  kids.classList.toggle("show-kids");
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
    // prevent default
    e.preventDefault();
    links.classList.remove("show-links");
    kids.classList.remove("show-kids");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //
    console.log(element);

    let position = element.offsetTop - 62;
    console.log(position);

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: "smooth"
    });
  });
});
