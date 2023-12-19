import { getRandomNumber, getRandomArrayItem } from './get-random.js';
import { NAMES, COMMENTS, DESCRIPTIONS } from './constant.js';

const uniqueId = [];

const getUniqueId = (min, max) => {
  let currentId = getRandomNumber(min, max);

  if (uniqueId.length >= (max - min + 1)) {
    return null;
  }

  while (uniqueId.includes(currentId)) {
    currentId = getRandomNumber(min, max);
  }

  uniqueId.push(currentId);
  return currentId;
};

const createComment = () => ({
  id: getRandomNumber(0, 1000),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: getRandomArrayItem(COMMENTS),
  name: getRandomArrayItem(NAMES)
});

const createUserPhoto = () => ({
  id: getUniqueId(1, 25),
  url: `photos/${getRandomNumber(1, 25)}.jpg`,
  description: getRandomArrayItem(DESCRIPTIONS),
  likes: getRandomNumber(15, 200),
  comments: Array.from({length: getRandomNumber(1, 20)}, createComment)
});

const createUsersPhotos = () => Array.from({length: 25}, createUserPhoto);

export {createUsersPhotos};
