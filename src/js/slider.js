const slider = document.getElementById("slider");
const sliderBtnLeft = document.getElementById("slider-button-left");
const sliderBtnRight = document.getElementById("slider-button-right");
const visibleWindow = document.getElementById("visible-window");
const move = 158;
let step = 0;

const leftBorder = 0;
const rightBorder = -316;

sliderBtnRight.addEventListener('click', () => {
    step += -move
    if (step < rightBorder) {
        step = leftBorder
    }
    slider.style.left = `${step}px`; 
});

sliderBtnLeft.addEventListener('click', () => {
    step += move
    if (step > leftBorder) {
        step = rightBorder
    }
    slider.style.left = `${step}px`; 
});


