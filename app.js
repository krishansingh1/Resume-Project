const click = document.getElementById("hamburger-lines");
const show = document.getElementById("nav-list");
const position = document.getElementById("social-info");
const clickhere = document.getElementById("resume-header");
const about = document.getElementById("about");

var x = window.matchMedia("(max-width: 572px)");

if (x.matches) {
  show.style.display = "none";
  show.style.opacity = "0";

  click.addEventListener("click", () => {
    show.style.display = "block";
    show.style.opacity = "1";
    //   console.log('clicked');
  });

  if ((show.style.display = "block")) {
    position.style.position = "relative";
    position.style.top = "-55%";
  }
}

about.addEventListener("click", () => {
  let y = 0;

  let smoothScroll = setInterval(() => {
    window.scrollBy(0, (y = 200));
  }, 1000);

  if ((y = 200)) {
    clearInterval(id);
  }
  // setTimeout(() => {
  //   window.scrollBy(0, 150);
  // }, 1000);
});
