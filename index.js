const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelectorAll(".carousel");
const firstCardWidth = document.querySelector(".fame-card").offsetWidth;
const courseCardWidth = document.querySelector(".course-card").offsetWidth;
const fameArrowBtns = document.querySelectorAll(".fame-wrapper i");
const courseArrowBtns = document.querySelectorAll(".course-wrapper i");
const affordArrowBtns = document.querySelectorAll(".afford-wrapper i");
const communityArrowBtns = document.querySelectorAll(".community-wrapper i");
const oneArrowBtns = document.querySelectorAll(".one-wrapper i");
const testArrowBtns = document.querySelectorAll(".test-wrapper i");

fameArrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel[0].scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

courseArrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel[1].scrollLeft += btn.id == "left" ? -courseCardWidth : courseCardWidth;
    });
});

affordArrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel[2].scrollLeft += btn.id == "left" ? -courseCardWidth : courseCardWidth;
    });
});

communityArrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel[3].scrollLeft += btn.id == "left" ? -courseCardWidth : courseCardWidth;
    });
});

oneArrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel[4].scrollLeft += btn.id == "left" ? -courseCardWidth : courseCardWidth;
    });
});

testArrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel[5].scrollLeft += btn.id == "left" ? -courseCardWidth : courseCardWidth;
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

var counter3 = 1;
setInterval(() => {
    document.getElementById('hackathon-radio' + counter3).checked = true;
    counter3++;
    if (counter3 > 4) {
        counter3 = 1;
    }
}, 3000);

var counter4 = 1;
setInterval(() => {
    document.getElementById('hackathon-company-radio' + counter4).checked = true;
    counter4++;
    if (counter4 > 6) {
        counter4 = 1;
    }
}, 2000);
