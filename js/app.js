import sublinks from './data.js';
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
