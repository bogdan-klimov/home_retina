const iconsArrow = document.getElementsByClassName("icon-right-product");
const projectText = document.getElementsByClassName("projects-item");


for (let i = 0; i < projectText.length; i++) {
    projectText[i].addEventListener("mouseover", ()=> {
        iconsArrow[i].style.opacity = "1"
    });    
    projectText[i].addEventListener("mouseout", ()=> {
        iconsArrow[i].style.opacity = "0"
    });  
}
