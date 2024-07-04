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

    const offset = -currentIndex * 220;
    slider.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(nextSlide, 1000);


//smooth scroll
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("#buttons-container button a");
    const cards = document.querySelectorAll(".card");
    const topSectionHeight = document.getElementById("top-section").offsetHeight;

    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = button.getAttribute("href").substring(1);
            const targetCard = document.getElementById(targetId);

            cards.forEach(card => card.classList.remove("highlight"));
            const offsetTop = targetCard.getBoundingClientRect().top + window.pageYOffset - topSectionHeight;

            window.scrollTo({ top: offsetTop, behavior: "smooth" });
            targetCard.classList.add("highlight");

            setTimeout(() => {
                targetCard.classList.remove("highlight");
            }, 2000);
        });
    });

    // Event listener for the heading to scroll to the top
    const heading = document.querySelector("#top-section h3");
    heading.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
