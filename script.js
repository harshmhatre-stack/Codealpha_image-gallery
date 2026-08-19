const images = [
    'https://picsum.photos/400/300?random=1',
    'https://picsum.photos/400/300?random=2',
    'https://picsum.photos/400/300?random=3',
    'https://picsum.photos/400/300?random=4',
    'https://picsum.photos/400/300?random=5',
    'https://picsum.photos/400/300?random=6'
];

const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentIndex = 0;

// Load images into grid
images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Image ${index + 1}`;
    img.onclick = () => openLightbox(index);
    gallery.appendChild(img);
});

function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex];
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex >= images.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = images.length - 1;
    lightboxImg.src = images[currentIndex];
}

document.querySelector('.close').onclick = closeLightbox;
document.querySelector('.prev').onclick = () => changeImage(-1);
document.querySelector('.next').onclick = () => changeImage(1);

lightbox.onclick = (e) => {
    if (e.target === lightbox) closeLightbox();
}

document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') changeImage(-1);
        if (e.key === 'ArrowRight') changeImage(1);
    }
});
