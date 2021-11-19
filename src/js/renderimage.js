import getRefs  from "./getrefs";

const refs = getRefs();

function getImage(images) {
  const imageFind = images.data.hits.map(({ webformatURL, tags, likes, views, comments, downloads }) => {
    return `
  <div class="photo-card">
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
  </div>`
  }).join('');

  refs.gallery.insertAdjacentHTML('beforeend', imageFind);
};

function hideLoadMoreBtn() {
  refs.loadMoreBtn.classList.add('is-hidden');
};

function showLoadMoreBtn () {
  refs.loadMoreBtn.classList.remove('is-hidden');
}


function clearImage () {
  refs.gallery.innerHTML = '';
};


export default { getImage, clearImage, hideLoadMoreBtn, showLoadMoreBtn };
