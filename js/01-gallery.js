import { galleryItems } from './gallery-items.js';
// Change code below this line


const list = document.querySelector(".gallery");
list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
list.addEventListener("click", handleClick);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
  `
    )
    .join("");
}

let instance;

function openModal(bigImg) {
  instance = basicLightbox.create(`
      <div class="modal">
        <img src="${bigImg}" alt="${event.target.alt}" />
      </div>
  `);
  instance.show();
  window.addEventListener('keydown', escKeyClose);
}

function closeModal() {
  if (instance) {
    instance.close();
  }
  window.removeEventListener('keydown', escKeyClose);
}


function escKeyClose(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}


function handleClick(event) {
    event.preventDefault();

    if (event.target.tagName !== "IMG") {
    return;
    };
    
    if (event.target.classList.contains("gallery__image")) {
        const bigImg = event.target.dataset.source;
        openModal(bigImg);
//     instance = basicLightbox.create(`
//       <div class="modal">
//         <img src="${bigImg}" alt="${event.target.alt}" />
//       </div>
//   `);
        
//    instance.show();
    };

}


