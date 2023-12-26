const commentTemplate = document.querySelector('.social__comment');
const commentsList = document.querySelector('.social__comments');
const bigPicture = document.querySelector('.big-picture');
const countLikes = bigPicture.querySelector('.likes-count');
const photoImage = bigPicture.querySelector('.big-picture__img img');
const photoTitle = bigPicture.querySelector('.social__caption');
const loaderButton = document.querySelector('.comments-loader');
const commentCount = document.querySelector('.social__comment-count');
let onLoaderButtonClick;

const preparateComments = (minValue, maxValue, comments) => {
  if(maxValue >= comments.length) {
    loaderButton.classList.add('hidden');
  } else {
    loaderButton.classList.remove('hidden');
  }

  comments.slice(minValue, maxValue).forEach((comment) => {
    const newComment = commentTemplate.cloneNode(true);
    const userPhoto = newComment.querySelector('img');
    const userMessage = newComment.querySelector('.social__text');

    commentCount.textContent = `${Math.min(comments.length, maxValue)} из ${comments.length} комментариев`;
    userPhoto.src = comment.avatar;
    userPhoto.alt = comment.name;
    userMessage.textContent = comment.message;

    commentsList.appendChild(newComment);
  });
};

const renderComments = (comments) => {
  commentsList.innerHTML = '';
  let minValue = 0;
  let maxValue = 5;

  onLoaderButtonClick = () => {
    minValue = maxValue;
    maxValue = maxValue + 5;

    preparateComments(minValue, maxValue, comments);
  };

  loaderButton.addEventListener('click', onLoaderButtonClick);
  preparateComments(minValue, maxValue, comments);
};

const clearLoaderListener = () => {
  loaderButton.removeEventListener('click', onLoaderButtonClick);
};

const renderBigPicture = (url, description, comments, likes) => {
  photoImage.src = url;
  photoImage.alt = description;
  countLikes.textContent = likes;
  photoTitle.textContent = description;

  renderComments(comments);
};

export {renderBigPicture, clearLoaderListener};
