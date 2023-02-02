const animation = document.getElementsByClassName("section");

for (i = 0; i < animation.length; i++) {
    animation[i].addEventListener("click", function() {
        this.classList.toggle("active");
    })
}