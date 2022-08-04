const navbar = document.getElementById("hamburger-lines");
const list = document.getElementById("nav-list");
const display = document.getElementById("social-info");
const about = document.getElementById("about");

navbar.addEventListener("click", () => {
  list.classList.toggle("active");
  display.classList.toggle("active");
});

about.addEventListener("click", () => {
  let y = 0;

  let smoothScroll = setInterval(() => {
    window.scrollBy(0, (y = 200));
  }, 1000);

  // if ((y = 200)) {
  //   smoothScroll(id);
  // }
});
