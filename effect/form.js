import {resetEffects} from './effects.js';
import { resetSizing } from './size.js';
import { sendData } from '/js/fetch-api.js';
import { showErrorAlarm, showSuccessMessage } from '/photos-and-comments/popup-window.js';

const uploadInput = document.querySelector('#upload-file');
const formEdit = document.querySelector('.img-upload__overlay');
const previewImage = document.querySelectorAll('.effects__preview');
const form = document.querySelector('#upload-select-image');
const buttonClose = document.querySelector('.img-upload__cancel');
const hashtag = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');
const img = document.querySelector('.img-upload__preview img');


const PATTERN = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_VALUE_HASHTAGS = 5;
const MAX_VALUE_COMMENT = 140;

const untouched = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent:'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-error'
});

const onUploadInputChange = () => {
  const reader = new FileReader();
  reader.readAsDataURL(uploadInput.files[0]);
  setInnerListeners();

  if (uploadInput.value.length > 0) {
    reader.addEventListener('load', () => {
      resetSizing();
      const url = reader.result;

      img.src = url;

      formEdit.classList.remove('hidden');
      document.body.classList.add('.modal-open');

      previewImage.forEach((image) => {
        image.style.backgroundImage = `url('${url}')`;
      });
    });
  }
};

const isFieldFocused = () => document.activeElement === hashtag || document.activeElement === comment;

const closeModal = () => {
  formEdit.classList.add('hidden');
  document.body.classList.remove('.modal-open');
  document.body.removeEventListener('keydown', onDocumentKeyDown);
  buttonClose.removeEventListener('click', onCloseButtonClick);
  untouched.reset();
  form.reset();
  resetEffects();
  resetSizing();
};

function onDocumentKeyDown (evt) {
  if (evt.key === 'Escape' && !isFieldFocused()) {
    closeModal();
  }
}

function onCloseButtonClick() {
  closeModal();
}

function setInnerListeners() {
  document.body.addEventListener('keydown', onDocumentKeyDown);
  buttonClose.addEventListener('click', onCloseButtonClick);

}

const isHashtagsLength = (hashtags) => hashtags.length <= MAX_VALUE_HASHTAGS;
const isValidateHashtag = (item) => PATTERN.test(item);
const isUniqHashtags = (hashtags) => hashtags.length === new Set(hashtags).size;

const validateHashtag = (string) => {
  const hashtags = string.trim().toLowerCase().split(' ');
  if (hashtag.length > 0) {
    return hashtags.every(isValidateHashtag) && isHashtagsLength(hashtags) && isUniqHashtags(hashtags);
  }

  return isHashtagsLength(hashtags) && isUniqHashtags(hashtags);
};

const validateCommentLength = (string) => string.length <= MAX_VALUE_COMMENT;

untouched.addValidator(hashtag, validateHashtag, 'Слишком много хэш-тегов');
untouched.addValidator(comment, validateCommentLength, 'Комментарий слишком длинный');

const onFormSubmit = (evt) => {
  const isValid = untouched.validate();
  evt.preventDefault();
  if(isValid){
    sendData(new FormData(evt.target))
      .then(() => {
        closeModal();
        showSuccessMessage();
      })
      .catch(showErrorAlarm);
  }
};

const setupForm = () => {
  uploadInput.addEventListener('change', onUploadInputChange);
  form.addEventListener('submit', onFormSubmit);
};

export {setupForm};
