import { galleryItems } from './gallery-items.js';

const refs = {
    gallery: document.querySelector('.gallery'),
}

const markupArr = galleryItems.map((item) => {
    return `<a class="gallery__item" href="${item.original}">
                <img class="gallery__image" src="${item.preview}" 
                        alt="${item.description}"
                        title="${item.description}"/>
            </a>`;
})

refs.gallery.insertAdjacentHTML('afterbegin', markupArr.join(''))

refs.gallery.addEventListener('click', zoomImage)

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250});

function zoomImage(event) {
    event.preventDefault();  
}
