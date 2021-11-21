import getRefs  from "./getrefs";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const refs = getRefs();

function getImage(images) {

  let markup = '';

  if (images.data.hits.length === 0) {
    Notify.failure("Sorry, there are no images matching your search query. Please try again.");
    hideLoadMoreBtn();
    return markup;
  }

    markup = images.data.hits.map(({ webformatURL, tags, likes, views, comments, downloads, largeImageURL }) => {
    return `<div class="photo-card">
    <a class="gallery-item" href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" loading="lazy"/>
      <div class="info">
            <p class="info-item">
              <b>Likes</b>${likes}
            </p>
            <p class="info-item">
              <b>Views</b>${views}
            </p>
            <p class="info-item">
              <b>Comments</b>${comments}
            </p>
            <p class="info-item">
              <b>Downloads</b>${downloads}
            </p>
      </div>
    </a>
  </div>`
  }).join('');

  return markup;
};

function hideLoadMoreBtn() {
  refs.loadMoreBtn.classList.add('is-hidden');
};

function showLoadMoreBtn () {
  refs.loadMoreBtn.classList.remove('is-hidden');
}


export default { getImage, hideLoadMoreBtn, showLoadMoreBtn };
