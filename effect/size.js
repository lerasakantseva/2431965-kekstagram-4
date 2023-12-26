const valueSize = document.querySelector('.scale__control--value');
const reducedButton = document.querySelector('.scale__control--smaller');
const growingButton = document.querySelector('.scale__control--bigger');
const photo = document.querySelector('.img-upload__preview img');

const MIN_SIZE = 25;
const MAX_SIZE = 100;
const SIZE_DEFAULT = 100;


const setSize = (newValue) => {
  valueSize.value = `${newValue}%`;
  photo.style.transform = `scale(${Number.parseInt(valueSize.value, 10) / 100})`;
};

const clickOnReducedButton = () => {
  const currentValue = Number.parseInt(valueSize.value, 10);
  let newValue = currentValue - 25;

  if (newValue <= MIN_SIZE) {
    newValue = MIN_SIZE;
  }

  setSize(newValue);
};

const clickOnGrowingButton = () => {
  const currentValue = Number.parseInt(valueSize.value, 10);
  let newValue = currentValue + 25;

  if (newValue >= MAX_SIZE) {
    newValue = MAX_SIZE;
  }

  setSize(newValue);
};

const initSizedPhoto = () => {
  reducedButton.addEventListener('click', clickOnReducedButton);
  growingButton.addEventListener('click', clickOnGrowingButton);
};

const resetSizing = () => {
  const newValue = SIZE_DEFAULT;

  setSize(newValue);
};

export {initSizedPhoto, resetSizing};
