const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".fame-card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

var counter = 1;
setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 3000);

var counter2 = 1;
setInterval(() => {
    document.getElementById('company-radio' + counter2).checked = true;
    counter2++;
    if (counter2 > 7) {
        counter2 = 1;
    }
}, 2000);

