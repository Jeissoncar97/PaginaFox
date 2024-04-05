const images = document.querySelectorAll("[class^='im']");
const titles = document.querySelectorAll("[class^='t']");
const redirect = document.querySelector(".contenedor-galery-main")

function toggleActiveClass(image, title) {
    image.addEventListener("mouseover", () => {
        title.classList.add("active-img");
    });

    image.addEventListener("mouseout", () => {
        title.classList.remove("active-img");
    });
}
images.forEach((image, index) => {
    toggleActiveClass(image, titles[index]);
});

redirect.addEventListener("click", () => {
    window.location.href = "./pages/nosotros.html";
});