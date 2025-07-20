import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsPosition: 'bottom',
  captionsDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
      <img class="gallery-image" src="${webformatURL}" alt="${tags}"/>
    </a>
    <div class="info">
      <div class="info-item">
        <h4>👍</h4>
        <p>${likes}</p>
      </div>
      <div class="info-item">
        <h4>👁️</h4>
        <p>${views}</p>
      </div>
      <div class="info-item">
        <h4>💬</h4>
        <p>${comments}</p>
      </div>
      <div class="info-item">
        <h4>⬇️</h4>
        <p>${downloads}</p>
      </div>
    </div>
  </li>
  `
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}
export function showLoader() {
  loaderEl.classList.remove('hidden');
}
export function hideLoader() {
  loaderEl.classList.add('hidden');
}
