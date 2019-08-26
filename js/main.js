$(document).ready(function() {
  $(".hamburger-icon").click(function() {
    $(this).toggleClass("open");
    $(".overlay").toggleClass("open");
    $(".overlay a").toggleClass("open");
    $(".overlay p").toggleClass("open");
  });
});

const burgerAnimation = () => {
  const burger = document.querySelector(".hamburger-icon");

  burger.addEventListener("click", () => {
    burger.classList.toggle("toggle");
  });
};

burgerAnimation();
