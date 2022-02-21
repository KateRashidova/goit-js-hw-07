import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const itemMarkup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", itemMarkup);
galleryRef.addEventListener("click", onGalleryItemClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;
    })
    .join("");
}

function onGalleryItemClick(event) {
  const isElementImage = event.target.classList.contains("gallery__image");
  const imageSrc = event.target.dataset.source;

  event.preventDefault();
  if (!isElementImage) {
    return;
  }

  const imageShow = basicLightbox.create(
    `
    <img src="${imageSrc}">
    `,
    {
      onClose: () => {
        document.removeEventListener("keydown", closeByKeyboard);
      },
    }
  );

  imageShow.show();

  document.addEventListener("keydown", closeByKeyboard);

  function closeByKeyboard(event) {
    if (event.key != "Escape") {
      return;
    }
    imageShow.close();
  }
}
