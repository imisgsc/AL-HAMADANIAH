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


//smooth scroll
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("#buttons-container button a");
    const cards = document.querySelectorAll(".card");

    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = button.getAttribute("href").substring(1);
            const targetCard = document.getElementById(targetId);

            cards.forEach(card => card.classList.remove("highlight"));
            targetCard.scrollIntoView({ behavior: "smooth" });
            targetCard.classList.add("highlight");

            setTimeout(() => {
                targetCard.classList.remove("highlight");
            }, 2000);
        });
    });

//back-to-top btn
    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });
});
