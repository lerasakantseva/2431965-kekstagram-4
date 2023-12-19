import { renderPhotos } from '/photos-and-comments/render-photos.js';
import { createUsersPhotos } from './create-photo.js';
import { setupForm } from '/effect/form.js';
import '/effect/effects.js';

const data = createUsersPhotos();
setupForm();
renderPhotos(data);
