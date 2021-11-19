import './css/styles.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import axios  from 'axios';

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
    Render.hideLoadMoreBtn()
    API.query = event.currentTarget.elements.searchQuery.value;
    if (API.query === '' || API.query === ' ') {
      Notify.failure("Sorry, there are no images matching your search query. Please try again.");
      return;
    }

    API.fetchImage().then(renderImage);
    if (API.totalCount === 0) {
          Notify.failure("Sorry, there are no images matching your search query. Please try again.");
          return;
        }

    API.incrementPage();

    Render.showLoadMoreBtn()
  };

  function showMoreImages (event) {
    event.preventDefault();
    API.fetchImage().then(renderImage);
  }


function renderImage (image) {
  Render.getImage(image);
  // page += 1;
  // console.log(page);
}

// function showError () {
// console.log(error);
// }
