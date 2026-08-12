// Active Navbar
const sections = document.querySelectorAll("header, section");
const navlinks = document.querySelectorAll(".navbar .nav-link");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navlinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
});

// Header Background Animation
const headerslides = document.querySelectorAll(".header-bg");
const images = [
  "assets/img/header-01.jpg",
  "assets/img/header-02.jpg",
  "assets/img/header-03.jpg",
  "assets/img/header-04.jpg",
];

let currentBackground = 0;
let currentImage = 0;

headerslides[currentBackground].style.backgroundImage = `url(${images[currentImage]})`;
headerslides[currentImage].classList.add("active");

setInterval(() => {
  const nextBackground = (currentBackground + 1) % 2;
  currentImage = (currentImage + 1) % images.length;
  headerslides[nextBackground].style.backgroundImage = `url(${images[currentImage]})`;
  headerslides[nextBackground].classList.add("active");
  headerslides[currentBackground].classList.remove("active");
  currentBackground = nextBackground;
}, 5000);
