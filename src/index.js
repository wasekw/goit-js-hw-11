import './css/styles.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios  from 'axios';

import getRefs from './js/getrefs';
import API from './js/fetchimage';
import Render from './js/renderimage';


const refs = getRefs();


  refs.searchForm.addEventListener('submit', startSearchImage);

  function startSearchImage (event) {
    event.preventDefault();
    const query = event.currentTarget.elements.searchQuery.value;
    // console.log(API.fetchImage);
    API.fetchImage(query).then(Render.getImage);
  };



function renderImage (image) {
  Render.getImage(image);
  console.log(image);
}

function showError () {

}
