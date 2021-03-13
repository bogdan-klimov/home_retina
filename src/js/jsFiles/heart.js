const hearts = Array.from(document.getElementsByClassName("icon-heart-empty"))


let heartLis = 1; 

for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener("click", () => {
        if (heartLis % 2 == 0) {
            hearts[i].className = "icon-heart-empty"
        } else {
            hearts[i].className = "icon-heart"
        }
        heartLis++
    })
}