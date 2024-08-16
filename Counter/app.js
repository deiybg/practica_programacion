// script.js
const texts = ["Hola", "¿Cómo estás?", "Preparado"];
const animatedText = document.querySelector(".animated-text");

let currentIndex = 0;

function changeText() {
    currentIndex = (currentIndex + 1) % texts.length;
    animatedText.textContent = texts[currentIndex];
}

setInterval(changeText, 6000); // Cambia el texto cada 6 segundos (que coincide con la duración de la animación CSS)
