import axios from 'axios';
import SimpleLightbox from "simplelightbox";

export default class API {
  constructor() {
    this.page = 1;
    this.totalHits = 0;
    this.searchQuery = '';
  }

    async  fetchImage() {
      const BASE_URL = 'https://pixabay.com/api/?';

      const searchParams = new URLSearchParams({
        key: '24307616-b0118d635ae4446a17d5d0140',
        q: `${this.searchQuery}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: `${this.page}`,
        per_page: 40,
      });

    const images = await axios.get(
            `${BASE_URL}${searchParams}`);

      this.totalHits = images.data.totalHits;

      return images;
    }

    get query () {
      return this.searchQuery;
    }

    set query (newQuery) {
      this.searchQuery = newQuery;
    }

    incrementPage() {
      this.page += 1;
  }

  resetPage () {
    this.page = 1;
  }

  createGallery() {
    this.gallery = new SimpleLightbox('.gallery a');
  }

  updateGallery() {
   this.gallery.refresh();
  }
};
