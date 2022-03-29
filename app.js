const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-bar");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

document.querySelectorAll(".nav-links").forEach(function (n) {
  n.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });
});
