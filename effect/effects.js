import { EFFECTS } from './constant-effects.js';

const effectLevel = document.querySelector('.effect-level');
const effectValue = document.querySelector('.effect-level__value');
const effectContainer = document.querySelector('.effect-level__slider');
const uploadPreviewImg = document.querySelector('.img-upload__preview img');
const effects = document.querySelector('.effects');

effectLevel.classList.add('hidden');

const DEFAULT_VALUE = EFFECTS[0];
let chosenEffect = DEFAULT_VALUE;

const checkingDefault = () => chosenEffect === DEFAULT_VALUE;

noUiSlider.create(effectContainer, {
  range: {
    min: DEFAULT_VALUE.min,
    max: DEFAULT_VALUE.max,
  },
  start: DEFAULT_VALUE.max,
  step: DEFAULT_VALUE.step,
  connect: 'lower'
});

effectContainer.noUiSlider.on('update', () => {
  effectValue.value = effectContainer.noUiSlider.get();
});

const onUpdateEffect = () => {
  effectContainer.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });

  if(checkingDefault()) {
    effectLevel.classList.add('hidden');
  } else {
    effectLevel.classList.remove('hidden');
  }
};

const onChangeValueEffect = () => {
  const value = effectContainer.noUiSlider.get();
  uploadPreviewImg.style.filter = checkingDefault() ?
    DEFAULT_VALUE.style :
    `${chosenEffect.style}(${value}${chosenEffect.unit})`;
  effectValue.value = value;
};

const onChangeEffect = (evt) => {
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  uploadPreviewImg.className = `effects__preview--${chosenEffect.name}`;
  onUpdateEffect();
};

effects.addEventListener('change', onChangeEffect);
effectContainer.noUiSlider.on('update', onChangeValueEffect);

const resetEffects = () => {
  chosenEffect = DEFAULT_VALUE;
  onUpdateEffect();
};

const initEffects = () => {
  effects.addEventListener('change', onChangeEffect);
  effectContainer.noUiSlider.on('update', onChangeValueEffect);

  effectContainer.noUiSlider.on('update', () => {
    effectValue.value = effectContainer.noUiSlider.get();
  });
};

export {resetEffects, initEffects};
