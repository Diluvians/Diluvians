import textContent from "./exportcontent.js";

function showContent(event) {
    const section = event.target.getAttribute('data-section');
    document.getElementById('content').innerHTML = `${textContent[section]}`;
};

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.myLink');
    links.forEach(lnk => {
        lnk.addEventListener('click', showContent);
    });
});

let currentSlide = 0; // Índice da imagem atual

function moveSlide(event) {
    const section = event.target.getAttribute('data-section');
    const slides = document.querySelector('.slides');
    const slideCount = slides.children.length;

    // Atualiza o índice da imagem atual
    currentSlide += parseInt(section);

    // Loop infinito (volta ao início ou ao final)
    if (currentSlide < 0) {
        currentSlide = slideCount - 1; // Vai para a última imagem
    } else if (currentSlide >= slideCount) {
        currentSlide = 0; // Volta para a primeira imagem
    }

    // Move o slider
    const slideWidth = slides.children[0].offsetWidth; // Largura de uma imagem
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.buttonSilde');
    buttons.forEach(button => {
        button.addEventListener('click', moveSlide);
    });
});