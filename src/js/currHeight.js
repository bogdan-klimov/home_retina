const blockHeight = document.getElementsByClassName('block-height');
const currWidth = window.innerWidth;
const sectionHeight = currWidth / 3;

Array.from(blockHeight).forEach(block => {
    block.style.height = `${sectionHeight}px`;
})

const blockHeightProject = document.getElementsByClassName("product-block-button-part")[0];
const sectionHeightProject = currWidth / 3.25;
blockHeightProject.style.height = `${sectionHeightProject}px`;




