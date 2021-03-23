const singleFondueBtn = document.getElementById("single-fondue-btn");
const singleProject = document.getElementById("single-project-wrapper");
const closeIconFondue = document.getElementById("close-icon-fondue");
const productSection = document.querySelector('.product');

singleFondueBtn.addEventListener('click', e => {
    e.preventDefault();
    productSection.scrollIntoView();
    singleProject.classList.add("single-project-wrapper-active");
});

closeIconFondue.addEventListener('click', () => {
    singleProject.classList.remove("single-project-wrapper-active")
});