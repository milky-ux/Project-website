const slider = document.querySelector(".slider");
const slideItems = document.querySelectorAll(".slide");

let index = 0;
let touchStartX = 0;
let touchEndX = 0;
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');


next.addEventListener('click', nextSlide);
function nextSlide() {
    index = (index + 1) % slideItems.length;
    updateSlide();
}

prev.addEventListener('click', prevSlide);
function prevSlide() {
    index = (index - 1 + slideItems.length) % slideItems.length;
    updateSlide();
}

function updateSlide() {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

slider.addEventListener("mouseenter", () => clearInterval(interval));
slider.addEventListener("mouseleave", startSlide);

slider.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
});

slider.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const SWIPE_THRESHOLD = 100;

    if (touchEndX - touchStartX > SWIPE_THRESHOLD) {
        prev();
    } else if (touchStartX - touchEndX > SWIPE_THRESHOLD) {
        next();
    }
}

startSlide();