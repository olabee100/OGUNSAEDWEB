let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");

document.getElementById("prevSlide").addEventListener("click", () => {
    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    slides[currentSlideIndex].classList.add('active');
});

document.getElementById("nextSlide").addEventListener("click", () => {
    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    slides[currentSlideIndex].classList.add('active');
});

// Automatic sliding
setInterval(() => {
    document.getElementById("nextSlide").click();
}, 5000);
