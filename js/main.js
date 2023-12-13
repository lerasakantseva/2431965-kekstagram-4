import { getPhoto } from './create_photo';
import { renderThumbnail } from '../modules/render-thumnail.js';
import { addEventListenerToPicture } from '../modules/render-big-picture.js';

const pictures = getPhoto();
renderThumbnail(getPhoto());
renderThumbnail(pictures);
addEventListenerToPicture(pictures);
