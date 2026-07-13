console.log("Portfolio Loaded");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".comparison-side img").forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("active");
        lightboxImg.src = img.src;

    });

});

document.querySelector(".close-lightbox").addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", e => {

    if (e.target === lightbox) {

        lightbox.classList.remove("active");

    }

});

document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        lightbox.classList.remove("active");

    }

});