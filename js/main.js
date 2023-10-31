/* eslint-disable no-console */
const NAME = [
  'Акакий Георгиевич',
  'Святослав Иванович',
  'Ярослава Олеговна',
  'Ольга Игоревна',
  'Иван Васильевич',
  'София Яновна',
  'Александр Михайлович',
  'Константин Данилович',
];

const DESCRIPTION = [
  'котики отдыхают',
  'я слушаю любимую музыку',
  'кот смешно зевает',
  'собака увидела первый снег',
  'брат подскользнулся на люду',
  'я ем',
];

const MESSAGE = [
  'окей',
  'привет',
  'как твои дела?',
  'чем занимаешься?',
  'высыпаешься?',
  'а я?',
];


const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getId = () => {
  let lastGenerateId = 0;

  return function() {
    lastGenerateId++;
    return lastGenerateId;
  };
};

const getPhotoId = getId();
const getComentId = getId();
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

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
console.log(getPhoto());
