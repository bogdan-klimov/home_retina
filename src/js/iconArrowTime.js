const iconsArrowTime = document.getElementsByClassName("icon-right-time");
const projectTextTime = document.getElementsByClassName("projects-text-time");

// переделать на верстку!

for (let i = 0; i < projectTextTime.length; i++) {
    projectTextTime[i].addEventListener("mouseover", ()=> {
        iconsArrowTime[i].style.opacity = "1"
    });    
    projectTextTime[i].addEventListener("mouseout", ()=> {
        iconsArrowTime[i].style.opacity = "0"
    });  
}
