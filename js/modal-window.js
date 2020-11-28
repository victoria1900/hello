var link = document.querySelector(".write-me__link");
var popup = document.querySelector(".modal");
var close = document.querySelector(".modal-window__close");

link.addEventListener("click", function (evt){
    evt.preventDefault();
    popup.classList.add("modal-show");
});
close.addEventListener("click", function (evt){
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

