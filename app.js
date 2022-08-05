const navbar = document.getElementById("hamburger-lines");
const list = document.getElementById("nav-list");
const display = document.getElementById("social-info");
const skillProgress = document.querySelectorAll("skills-progress");

// const about = document.getElementById("about");
// const skills = document.getElementById("skills");
// const experience = document.getElementById("experience");
// const education = document.getElementById("education");
// const portfolio = document.getElementById("portfolio");
// const contact = document.getElementById("contact");
navbar.addEventListener("click", () => {
  list.classList.toggle("active");
  display.classList.toggle("active");
});

// about.addEventListener("click", () => {
//   let timeRun = 0;

//   let smoothScroll = setInterval(function () {
//     timeRun += 1;
//     if (timeRun === 2) {
//       clearInterval(smoothScroll);
//     }
//     window.scrollBy(0, 50);
//   }, 20);
// });

// skills.addEventListener("click", () => {
//   let timeRun = 0;
//   let smoothScroll = setInterval(() => {
//     timeRun += 1;
//     if (timeRun === 13) {
//       clearInterval(smoothScroll);
//     }
//     window.scrollBy(0, 50);
//   }, 20);
// });

// experience.addEventListener("click", () => {
//   let timeRun = 0;
//   let smoothScroll = setInterval(() => {
//     timeRun += 1;
//     if (timeRun == 24) {
//       clearInterval(smoothScroll);
//     }
//     window.scrollBy(0, 50);
//   }, 20);
// });

// education.addEventListener("click", () => {
//   let timeRun = 0;

//   let smoothScroll = setInterval(() => {
//     timeRun += 1;
//     if (timeRun === 43) {
//       clearInterval(smoothScroll);
//     }
//     window.scrollBy(0, 50);
//   }, 20);
// });

// portfolio.addEventListener("click", () => {
//   let timeRun = 0;
//   let smoothScroll = setInterval(() => {
//     timeRun += 1;
//     if (timeRun === 58) {
//       clearInterval(smoothScroll);
//     }
//     window.scrollBy(0, 50);
//   }, 10);
// });

// contact.addEventListener("click", () => {
//   let timeRun = 0;
//   let smoothScroll = setInterval(() => {
//     timeRun += 1;
//     if (timeRun === 75) {
//       clearInterval(smoothScroll);
//     }
//     window.scrollBy(0, 50);
//   }, 10);
// });

const scroll = document.querySelectorAll(".scroll-links");
// console.log(scroll);
let smoothScroll;

scroll.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    console.log(id);
    const element = document.getElementById(id);
    console.log(element);

    smoothScroll = setInterval(scrollVertically, 8, element);

    if (id == "skills") {
      skillProgress.forEach((skills) => {
        console.log(skills);
      });
    }
  });
});

function scrollVertically(element) {
  const coordinates = element.getBoundingClientRect();

  if (coordinates.top <= 0) {
    clearInterval(smoothScroll);
  }

  if (coordinates.top == 31.984375) {
    clearInterval(smoothScroll);
  }

  window.scrollBy(0, 25);
}
