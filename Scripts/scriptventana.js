const sombra1 = document.querySelector(".sombra1");
const sombra2 = document.querySelector(".sombra2");
const sombra3 = document.querySelector(".sombra3");
const sombra4 = document.querySelector(".sombra4");
const sub1 = document.querySelector(".sub1");
const sub2 = document.querySelector(".sub2");
const ventana1 = document.querySelector(".conthov1");
const ventana2 = document.querySelector(".conthov2");
const ventana3 = document.querySelector(".conthov3");
const ventana4 = document.querySelector(".conthov4");
sombra1.addEventListener("mouseover", () => {
	ventana1.style.display = "block";
	setTimeout(() => {
		ventana1.classList.add("active");
    }, 10);
    sub1.style.display = "none";
});

sombra2.addEventListener("mouseover", () => {
	ventana2.style.display = "block";
    setTimeout(() => {
        ventana2.classList.add("active");
    }, 10);
    
    sub2.style.display = "none";
});

sombra3.addEventListener("mouseover", () => {
	ventana3.style.display = "block";
    setTimeout(() => {
        ventana3.classList.add("active");
    }, 10);
    sub1.style.display = "none";
});

sombra4.addEventListener("mouseover", () => {
	ventana4.style.display = "block";
    setTimeout(() => {
        ventana4.classList.add("active");
    }, 10);
    sub2.style.display = "none";
});

sombra1.addEventListener("mouseout", () => {
	ventana1.classList.remove("active");
	setTimeout(() => {
        ventana1.style.display = "none";
	}, 10);	
    
    sub1.style.display = "flex";
});

sombra2.addEventListener("mouseout", () => {
	ventana2.classList.remove("active");
    setTimeout(() => {
        ventana2.style.display = "none";
    }, 10);    
    sub2.style.display = "flex";

});

sombra3.addEventListener("mouseout", () => {
	ventana3.classList.remove("active");
    setTimeout(() => {
        ventana3.style.display = "none";
    }, 10);    
    sub1.style.display = "flex";
});

sombra4.addEventListener("mouseout", () => {
	ventana4.classList.remove("active");
    setTimeout(() => {
        ventana4.style.display = "none";
    }, 10);    
    sub2.style.display = "flex";

});