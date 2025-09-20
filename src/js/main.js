import "../styles/main.scss";

function restartAnimation() {
    const svg = document.querySelector('svg');
    const clone = svg.cloneNode(true);
    svg.parentNode.replaceChild(clone, svg);
}