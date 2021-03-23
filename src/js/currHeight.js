const globalSectionList = document.getElementsByClassName('block-height');
const productBlock = document.querySelector(".product-block-button-part");
const currWindowWidth = window?.innerWidth; // window && window.innerWidth

const globalSectionHeight = currWindowWidth / 3;
const productBlockHeight = currWindowWidth / 3.25;

Array.from(globalSectionList).forEach(section => section.style.height = `${globalSectionHeight}px`);
productBlock.style.height = `${productBlockHeight}px`;