import { galleryItems } from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.gallery'),
  body: document.querySelector('body'),
};

const markupArr = galleryItems.map(item => {
  return `<div class="gallery__item">
          <a class="gallery__link" href="${item.original}">
              <img
              class="gallery__image"
              src="${item.preview}"
              data-source="${item.original}"            
              alt="${item.description}"
              />
          </a>
      </div>`;
});

refs.gallery.insertAdjacentHTML('afterbegin', markupArr.join(''));

refs.gallery.addEventListener('click', zoomImage);

let instance = {};

function zoomImage(event) {
  event.preventDefault();

  instance = basicLightbox.create(
    `      
              <img src="${event.target.getAttribute('data-source')}"
                  alt="${event.target.getAttribute('alt')}"
              />`,
    {
      onClose: instance => {
        console.log('like it');
        window.removeEventListener('keydown', onPressEscBtn);
        refs.body.style.overflow = '';
      },
    }
  );

  instance.show();

  refs.body.style.overflow = 'hidden';

  document.addEventListener('keydown', onPressEscBtn);
}

function onPressEscBtn(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}
