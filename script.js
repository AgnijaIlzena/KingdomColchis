// NAVIGATION

const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", function (event) {
  const ul = document.querySelector("nav > ul");
  ul.classList.toggle("menu-slide");
});

// FORM SUBMIT
const message =
  "Thank you for submitting your message. The member of the Royal Kingdom of Colchis will respond shortly.";

document.getElementById("contactForm");
document.addEventListener("submit", function (event) {
  alert(message);
  event.preventDefault();
});
