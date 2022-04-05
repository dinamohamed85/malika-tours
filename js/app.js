import sublinks from './data.js';
const linkBtns = [...document.querySelectorAll('.nav-link')];
const submenuOuting = document.getElementById('submenu-outing');
const submenuRestaurant = document.getElementById('submenu-restaurant');
const submenuShopping = document.getElementById('submenu-shopping');
const submenuOther = document.getElementById('submenu-other');
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

// ************************ submenu *****************************
linkBtns.forEach((btn) => {
  const text = btn.textContent;
  let tempinnerHTML = '';
  console.log("Hello world! --- show 1 " + text);
  const tempPage = sublinks.find((link) => link.page === text);

  if (tempPage) {
    const { page, links } = tempPage;
    tempinnerHTML = `     
            ${links
        .map((link) => {
          return `<li><a class="sub-link" href="${link.url}"><i class="${link.icon} nav-icon"></i>${link.label}</a></li>`;
        })
        .join('')}
      `;
    console.log("Hello world! --- show 2 " + page);
    if (page == "Outings") {
      console.log("Hello world! --- show in  " + page);
      submenuOuting.innerHTML = tempinnerHTML;
    }
    else if (page == "Restaurants") {
      submenuRestaurant.innerHTML = tempinnerHTML;
    }
    else if (page == "Shopping") {
      submenuShopping.innerHTML = tempinnerHTML;
    }
    else if (page == "Other") {
      submenuOther.innerHTML = tempinnerHTML;
    }
  }
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