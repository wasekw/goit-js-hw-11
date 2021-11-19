import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';

function fetchImage(query) {

  const searchParams = new URLSearchParams({
    key: '24307616-b0118d635ae4446a17d5d0140',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  });
  console.log(axios.get(`${BASE_URL}?${searchParams}`));
  return axios.get(`${BASE_URL}?${searchParams}`);
};


export default { fetchImage };


// Список параметров строки запроса которые тебе обязательно необходимо указать:

// key - твой уникальный ключ доступа к API.
// q - термин для поиска. То, что будет вводить пользователь.
// image_type - тип изображения. Мы хотим только фотографии, поэтому задай значение photo.
// orientation - ориентация фотографии. Задай значение horizontal.
// safesearch - фильтр по возрасту. Задай значение true.
// В ответе будет массив изображений удовлетворивших критериям параметров запроса. Каждое изображение описывается объектом, из которого тебе интересны только следующие свойства:

// webformatURL - ссылка на маленькое изображение для списка карточек.
// largeImageURL - ссылка на большое изображение.
// tags - строка с описанием изображения. Подойдет для атрибута alt.
// likes - количество лайков.
// views - количество просмотров.
// comments - количество комментариев.
// downloads - количество загрузок.

