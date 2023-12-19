import { renderPhotos } from '/photos-and-comments/render-photos.js';
import { createUsersPhotos } from './create-photo.js';
import { setupForm } from '/effect/form.js';
import { initSizedPhoto } from '/effect/size.js';
import { initEffects } from '/effect/effects.js';

const data = createUsersPhotos();
setupForm();
renderPhotos(data);
initSizedPhoto();
initEffects();
