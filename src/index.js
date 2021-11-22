import './css/styles.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


import getRefs from './js/getrefs';
import Image from './js/fetchimage';
import Render from './js/renderimage';

const refs = getRefs();
const API = new Image();

Render.hideLoadMoreBtn();

refs.searchForm.addEventListener('submit', startSearchImage);
refs.loadMoreBtn.addEventListener('click', showMoreImages);


function startSearchImage (event) {
    event.preventDefault();
    Render.hideLoadMoreBtn();
    API.query = event.currentTarget.elements.searchQuery.value.trim();
    API.resetPage();
    if (API.query === '') {
      Notify.failure("Sorry!!! Please try again.");
      return;
    }

  API.fetchImage().then(Render.getImage).then(renderImage);

  API.incrementPage();
};

function showMoreImages () {
  API.fetchImage().then(Render.getImage).then(renderMoreImages);
  API.incrementPage();
};


function renderImage (markup) {
  refs.gallery.innerHTML = markup;

  if (API.totalHits > 0) {
    Notify.success(`Hooray! We found ${API.totalHits} images.`);
    API.createGallery();
    Render.showLoadMoreBtn();
  }
};

function renderMoreImages (markup) {
  if (API.totalHits < (API.page - 1) * 40) {
    Render.hideLoadMoreBtn();
    Notify.info(`We're sorry, but you've reached the end of search results.`);
    API.resetPage();
    setTimeout(()=> {
      refs.gallery.innerHTML = '';
      refs.searchForm.reset();
      return;
    }, 5000);

  }
  refs.gallery.insertAdjacentHTML('beforeend', markup);
  API.updateGallery();


  const { height: cardHeight } = document
  .querySelector('.gallery')
  .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 4,
    behavior: 'smooth',
  });

};





