const navBtn = document.getElementById("nav-btn");
const navBlock = document.getElementById("nav-block");

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("nav-btn-active");
  navBlock.classList.toggle("nav-block-active")
})

