import { renderPhotos } from '/photos-and-comments/render-photos.js';
import { setupForm } from '/effect/form.js';
import { initSizedPhoto } from '/effect/size.js';
import { initEffects } from '/effect/effects.js';
import { getData } from './fetch-api.js';
import { showLoadError } from '/photos-and-comments/popup-window.js';

getData()
  .then((data) => {
    renderPhotos(data);
  })
  .catch((err) => showLoadError(err));

setupForm();
initSizedPhoto();
initEffects();
