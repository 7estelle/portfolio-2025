import "../styles/main.scss";

function restartAnimation() {
    const svg = document.querySelector('svg');
    const clone = svg.cloneNode(true);
    svg.parentNode.replaceChild(clone, svg);
}

// Helper function to add stickers programmatically
function addSticker(options) {
    const {
        src,
        size = 'medium', // small, medium, large
        position = null, // { top, left, right, bottom } in percentage
        preset = null, // top-left, top-right, bottom-left, bottom-right, center-left, center-right
        rotation = null, // rotate-left, rotate-right, rotate-slight
        animation = null, // float, wiggle
        alt = 'Decorative sticker'
    } = options;

    const container = document.querySelector('.stickers');
    if (!container) return;

    const sticker = document.createElement('div');
    sticker.className = `sticker sticker--${size}`;
    
    if (preset) {
        sticker.classList.add(`sticker--${preset}`);
    }
    
    if (rotation) {
        sticker.classList.add(`sticker--${rotation}`);
    }
    
    if (animation) {
        sticker.classList.add(`sticker--${animation}`);
    }

    // Apply custom position if provided
    if (position) {
        if (position.top !== undefined) sticker.style.top = `${position.top}%`;
        if (position.left !== undefined) sticker.style.left = `${position.left}%`;
        if (position.right !== undefined) sticker.style.right = `${position.right}%`;
        if (position.bottom !== undefined) sticker.style.bottom = `${position.bottom}%`;
    }

    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    
    sticker.appendChild(img);
    container.appendChild(sticker);
    
    return sticker;
}

// Example usage (commented out):
// addSticker({
//     src: 'public/img/test.jpg',
//     size: 'medium',
//     preset: 'top-left',
//     rotation: 'rotate-left',
//     animation: 'float'
// });

// Or with custom position:
// addSticker({
//     src: 'public/img/tree.png',
//     size: 'small',
//     position: { top: 25, left: 10 },
//     animation: 'wiggle'
// });

// Make functions globally available if needed
window.addSticker = addSticker;
window.restartAnimation = restartAnimation;

// Smooth scroll to container on scroll-indicator click
const scrollIndicator = document.querySelector('.scroll-indicator');
const container = document.querySelector('.container');

if (scrollIndicator && container) {
    scrollIndicator.addEventListener('click', () => {
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}