import { getRandomNumber, getRandomArrayItem } from './get-random.js';
import { NAMES, COMMENTS, DESCRIPTIONS } from './constant.js';

const originalId = [];

const getUniqueId = (minValue, maxValue) => {
  let currentId = getRandomNumber(minValue, maxValue);

  if (originalId.length >= (maxValue - minValue + 1)) {
    return null;
  }

  while (originalId.includes(currentId)) {
    currentId = getRandomNumber(minValue, maxValue);
  }

  originalId.push(currentId);
  return currentId;
};

const makeComment = () => ({
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
  comments: Array.from({length: getRandomNumber(1, 20)}, makeComment)
});

const createUsersPhotos = () => Array.from({length: 25}, createUserPhoto);

export {createUsersPhotos};
