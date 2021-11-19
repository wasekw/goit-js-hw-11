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

  refs.gallery.innerHTML = imageFind;
};

function clearImage () {
  refs.gallery.innerHTML = '';
};


export default { getImage, clearImage };
