const navButton = document.getElementById("nav-btn");
const line = document.querySelectorAll(".line");
const navBlock = document.getElementById("nav-block");
let lis = 1;

// переделать на toggle!

navButton.addEventListener("click", () => {
    if (lis % 2 == 0) {
        line[1].style.display = "block"
        line[0].classList.remove("line-top-active")
        line[2].classList.remove("line-bottom-active")
        navBlock.style.display = "none"
        navButton.classList.remove("nav-btn-active")
    } else {
        line[1].style.display = "none"
        line[0].classList.add("line-top-active")
        line[2].classList.add("line-bottom-active")
        navBlock.style.display = "flex"
        navButton.classList.add("nav-btn-active")
    }
    lis++;
})