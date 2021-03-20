const blockHeight = document.getElementsByClassName('block-height');
const currWidth = window.innerWidth;
const sectionHeight = currWidth / 3;

Array.from(blockHeight).forEach(block => {
    block.style.height = `${sectionHeight}px`;
})