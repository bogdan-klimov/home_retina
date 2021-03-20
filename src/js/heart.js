const heartIcon = Array.from(document.getElementsByClassName("icon-heart-empty"));

let heartLis = 1;

// пересмотреть макет Advocatus ( checkbox:checked ~/+ )

for (let i = 0; i < heartIcon.length; i++) {
    heartIcon[i].addEventListener("click", () => {
        if (heartLis % 2 == 0) {
            heartIcon[i].className = "icon-heart-empty";
        } else {
            heartIcon[i].className = "icon-heart";
        }
        heartLis++
    })
}