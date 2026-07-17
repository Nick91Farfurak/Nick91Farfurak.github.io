console.log("Portfolio Loaded");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-lightbox");

// Всі картинки портфоліо, крім картинки всередині lightbox
document.querySelectorAll(
    ".project-card img, .featured-gif, .feature-content img, .practice-card img"
).forEach(img => {

    img.style.cursor = "zoom-in";

    img.addEventListener("click", () => {

        lightbox.classList.add("active");
        lightboxImg.src = img.src;

    });

});

// Закриття по хрестику
closeBtn.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

// Закриття по фону
lightbox.addEventListener("click", e => {

    if (e.target === lightbox) {

        lightbox.classList.remove("active");

    }

});

// Закриття по Esc
document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        lightbox.classList.remove("active");

    }

});