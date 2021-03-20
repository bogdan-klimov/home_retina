const blockHeight = document.getElementsByClassName('block-height');
const currWidth = window.innerWidth;
const sectionHeight = currWidth / 3;


for (let i = 0; i < blockHeight.length; i++) {
    blockHeight[i].style.height = `${sectionHeight}px`;
}

