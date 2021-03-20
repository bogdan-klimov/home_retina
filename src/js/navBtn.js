const navButton = document.getElementById("nav-btn");
const line = document.querySelectorAll(".line");
const navBlock = document.getElementById("nav-block");


// исправить на css

navButton.addEventListener("click", () => {
  line[1].classList.toggle("center-line-active");
  line[0].classList.toggle("line-top-active");
  line[2].classList.toggle("line-bottom-active");
  navButton.classList.toggle("nav-btn-active");
  navBlock.classList.toggle("nav-block-active");
})