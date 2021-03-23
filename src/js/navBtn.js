const navButton = document.getElementById("nav-btn");
const navBlock = document.getElementById("nav-block");

navButton.addEventListener("click", ()=> {
  navButton.classList.toggle("nav-btn-active");
  navBlock.classList.toggle("nav-block-active")
})

