
const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {
    link.addEventListener("click", function () {
        menuLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});


menuLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");

        if (targetId !== "#") {
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


const cards = document.querySelector(".cards");

let isPaused = false;

cards.addEventListener("mouseenter", () => {
    isPaused = true;
    cards.style.animationPlayState = "paused";
});

cards.addEventListener("mouseleave", () => {
    isPaused = false;
    cards.style.animationPlayState = "running";
});

const bookBtn = document.querySelector(".left a");

bookBtn.addEventListener("click", function (e) {
    e.preventDefault();
    alert("🍽️ Table booked successfully! We will contact you soon.");
});
