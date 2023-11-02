import {NAME, MESSAGE, DESCRIPTION} from './constant.js';
import {getRandomArrayElement, getRandomInteger} from './getRandom.js';

const getId = () => {
  let lastGenerateId = 0;

  return function() {
    lastGenerateId++;
    return lastGenerateId;
  };
};

const getPhotoId = getId();
const getComentId = getId();

const createComments = () => ({
  id: getComentId(1,25),
  avatar: `img/avatar-${getRandomInteger(1,6)}.jpg`,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAME),
});

const createPhoto = (id) =>({
  id: id,
  url: `photos/${id}.jpg`,
  likes: getRandomInteger(15,200),
  description:getRandomArrayElement(DESCRIPTION),
  name: getRandomArrayElement(NAME),
  comments: Array.from({length: getRandomInteger(0,30)}, () => createComments())
});

const getPhoto = () => Array.from({length: 25}, () => createPhoto(getPhotoId()));
export {getPhoto};
