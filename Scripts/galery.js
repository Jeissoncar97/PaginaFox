'use strict';

const enlaces = document.querySelectorAll('.galery .a');
const lightbox = document.querySelector('.lightbox');
const grande = document.querySelector('.img-grande');
const cerrar = document.querySelector('.close');
const pasarImg = document.querySelector('.pasar-img');
const retrocederImg = document.querySelector('.retroceder-img');

let currentIndex = 0;
const imageNumbers = Array.from(enlaces).map((enlace, index) => {
    return index + 1;
});

enlaces.forEach((cadaEnlace, i) => {
    enlaces[i].addEventListener('click', (e) => {
        e.preventDefault();
        let ruta = cadaEnlace.querySelector('.img-galery').src;

        lightbox.classList.add('activo-galery');
        grande.setAttribute('src', ruta);
        currentIndex = i;
    });
});

cerrar.addEventListener('click', (e) => {
    e.preventDefault();
    closeLightbox();
});

pasarImg.addEventListener('click', (e) => {
    e.preventDefault();
    // Verificar si hay una imagen siguiente
    if (currentIndex < enlaces.length - 1) {
        currentIndex++;
        const nextImageNumber = imageNumbers[currentIndex];
        let nextImagePath = `../img/img-nosotros/galeria/galery-platos/${nextImageNumber}.jpg`;
        grande.setAttribute('src', nextImagePath);
    }
});

retrocederImg.addEventListener('click', (e) => {
    e.preventDefault();
    // Verificar si hay una imagen anterior
    if (currentIndex > 0) {
        currentIndex--;
        const nextImageNumber = imageNumbers[currentIndex];
        let nextImagePath = `../img/img-nosotros/galeria/galery-platos/${nextImageNumber}.jpg`;
        grande.setAttribute('src', nextImagePath);
    }
})

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

function closeLightbox() {
    lightbox.classList.remove('activo-galery');
    
}
