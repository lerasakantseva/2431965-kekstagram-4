import { renderPhotos } from '/photos-and-comments/render-photos.js';
import { debounce } from '/js/debounce-function.js';

const PICTURES_COUNT = 10;

const FILTER = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

const filter = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');

const clearOldPictures = () => {
  const postElements = document.querySelectorAll('.picture');

  postElements.forEach((post) => {
    post.remove();
  });
};

const filterPictures = (currentFilter, pictures) => {
  switch(currentFilter) {
    case FILTER.RANDOM:
      return [...pictures].sort(() => Math.random() - 0.5).slice(0,PICTURES_COUNT);
    case FILTER.DISCUSSED:
      return [...pictures].sort((a, b) => b.comments.length - a.comments.length);
    case FILTER.DEFAULT:
      return pictures;
    default:
      throw new Error(`Unknown filter type ${currentFilter}`);
  }
};


const onFilterFormClick = (evt, pictures) => {

  if (!evt.target.classList.contains('img-filters__button') || evt.target.classList.contains('img-filters__button--active')) {
    return;
  }

  filter.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');

  evt.target.classList.add('img-filters__button--active');
  const currentFilter = evt.target.id;

  clearOldPictures();

  const filteredPhotos = filterPictures(currentFilter, pictures);
  renderPhotos(filteredPhotos);
};

const initFilters = (pictures) => {
  filter.classList.remove('img-filters--inactive');
  filterForm.addEventListener('click', debounce((evt) => onFilterFormClick(evt, pictures)));
};

export { initFilters };
