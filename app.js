const navbar = document.getElementById("hamburger-lines");
const list = document.getElementById("nav-list");
const display = document.getElementById("social-info");
const about = document.getElementById("about");

navbar.addEventListener("click", () => {
  list.classList.toggle("active");
  display.classList.toggle("active");
});

about.addEventListener("click", () => {
  let timeRun = 0;

  let smoothScroll = setInterval(function () {
    timeRun += 1;
    if (timeRun === 2) {
      clearInterval(smoothScroll);
    }
    window.scrollBy(0, 50);
  }, 50);
});


