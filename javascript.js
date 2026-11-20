const left = document.querySelector("#left");
const right = document.querySelector("#right");
const slider = document.querySelector("#slider");

// Left button click karne par slider left side scroll hoga (-)
left.addEventListener("click", () => {
    slider.scrollBy({
        left: -slider.clientWidth,
        behavior: "smooth"
    });
});

// Right button click karne par slider right side scroll hoga (+)
right.addEventListener("click", () => {
    slider.scrollBy({
        left: slider.clientWidth,
        behavior: "smooth"
    });
});


const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

if (hamburger && navList) {
    hamburger.addEventListener("click", () => {
        navList.classList.toggle("active");
    });
}