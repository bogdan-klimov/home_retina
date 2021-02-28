import '../styles/styles.css';
import '../styles/styles.scss';

const navButton = document.getElementById("nav-btn")
const line = document.querySelectorAll(".line")
const navBlock = document.getElementById("nav-block")

let lis = 1

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
    lis++
})

const iconsArrow = document.getElementsByClassName("icon-right-product");
const projectText = document.getElementsByClassName("projects-text");


for (let i = 0; i < projectText.length; i++) {
    projectText[i].addEventListener("mouseover", ()=> {
        iconsArrow[i].style.opacity = "1"
    });    
    projectText[i].addEventListener("mouseout", ()=> {
        iconsArrow[i].style.opacity = "0"
    });  
}

const iconsArrowTime = document.getElementsByClassName("icon-right-time");

const projectTextTime = document.getElementsByClassName("projects-text-time")

for (let i = 0; i < projectTextTime.length; i++) {
    projectTextTime[i].addEventListener("mouseover", ()=> {
        iconsArrowTime[i].style.opacity = "1"
    });    
    projectTextTime[i].addEventListener("mouseout", ()=> {
        iconsArrowTime[i].style.opacity = "0"
    });  
}

const hearts = Array.from(document.getElementsByClassName("icon-heart-empty"))


let heartLis = 1; 

for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener("click", () => {
        if (heartLis % 2 == 0) {
            hearts[i].className = "icon-heart-empty"
        } else {
            hearts[i].className = "icon-heart"
        }
        heartLis++
    })
}
