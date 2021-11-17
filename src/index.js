import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios  from 'axios';

import getRefs from './js/getrefs';


const refs = getRefs();

refs.searchBtn.addEventListener('submit', startSearchImage);



function startSearchImage (event) {
  console.log(event.currentTarget);
  event.preventDefault();
  const whatFind = refs.inputForm.value;
  console.log(whatFind);

}
// fetch('https://pixabay.com/api/?key=24307616-b0118d635ae4446a17d5d0140').then(response => response.json()).then(console.log);