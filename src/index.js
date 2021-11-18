import './css/styles.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios  from 'axios';

import getRefs from './js/getrefs';
import API from './js/fetchimage';


const refs = getRefs();

  refs.searchForm.addEventListener('submit', startSearchImage);

  function startSearchImage (event) {
    event.preventDefault();
    const query = event.currentTarget.elements.searchQuery.value;

    API.fetchImage(query).then(console.log);
  }



