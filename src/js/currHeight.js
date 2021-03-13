const blockHeight = document.getElementsByClassName('block-height')[0];

// переделать под все случаи

const currWidth = window.innerWidth;
const sectionHeight = currWidth / 3;
blockHeight.style.height = `${sectionHeight}px`;
