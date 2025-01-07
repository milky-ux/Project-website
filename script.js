const sliders = {
    1: 0,
    2: 0,
    3: 0
};

function updateSlider(section) {
    const slider = document.getElementById(`slider${section}`);
    const slides = slider.querySelectorAll('.slide');
    slider.style.transform = `translateX(-${sliders[section] * 100}%)`;
}

function prevSlide(section) {
    const slider = document.getElementById(`slider${section}`);
    const slides = slider.querySelectorAll('.slide');
    sliders[section] = (sliders[section] === 0) ? slides.length - 1 : sliders[section] - 1;
    updateSlider(section);
}

function nextSlide(section) {
    const slider = document.getElementById(`slider${section}`);
    const slides = slider.querySelectorAll('.slide');
    sliders[section] = (sliders[section] === slides.length - 1) ? 0 : sliders[section] + 1;
    updateSlider(section);
}
