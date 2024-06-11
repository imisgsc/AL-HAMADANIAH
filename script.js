//slider
let currentIndex = 0;

function showSlide(index) {
    const slider = document.getElementById('logo-slider');
    const slides = slider.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 220; // Adjust this value based on slide width and margin
    slider.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(nextSlide, 1000); // Change slide every 3 seconds

//btns to card

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('#buttons-container button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});