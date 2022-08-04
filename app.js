const click = document.getElementById("hamburger-lines");
const show = document.getElementById("nav-list");
const position = document.getElementById("social-info");
const clickhere = document.getElementById("resume-header");
const about = document.getElementById("about");

about.addEventListener("click", () => {
  let y = 0;

  let smoothScroll = setInterval(() => {
    window.scrollBy(0, (y = 200));
  }, 1000);

  if ((y = 200)) {
    smoothScroll(id);
  }
  // setTimeout(() => {
  //   window.scrollBy(0, 150);
  // }, 1000);
});
