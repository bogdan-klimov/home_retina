const singleFondueBtn = document.getElementById("single-fondue-btn");
const singleProject = document.getElementById("single-project-wrapper")
const closeIconFondue = document.getElementById("close-icon-fondue");

singleFondueBtn.addEventListener('click', e => {
    e.preventDefault();
    singleProject.classList.add("single-project-wrapper-active")
});

closeIconFondue.addEventListener('click', () => {
    singleProject.classList.remove("single-project-wrapper-active")
});


console.log(closeIconFondue);

