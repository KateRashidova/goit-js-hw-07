import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const itemMarkup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', itemMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img
            class="gallery__image"
            src="${preview}" 
            alt="${description}" />
        </a>`
    })
        .join('');
}

let lightbox = new SimpleLightbox('.gallery__item', {captionsData: 'alt', captionDelay: 250, });
lightbox.on('show.simplelightbox', function () { });