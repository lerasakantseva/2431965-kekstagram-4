const bigPicture = document.querySelector('.big-picture');
const removeButton = bigPicture.querySelector('.big-picture__cancel');

const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikesCount = bigPicture.querySelector('.likes-count');
const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');
const bigPictureCommentsCountBlock = bigPicture.querySelector('.social__comment-count');
const bigPictureSocialCaption = bigPicture.querySelector('.social-caption');
const bigPictureCommentsLoader = bigPicture.querySelector('.comments-loader');

const body = document.querySelector('body');
const comment = document.querySelector('.social__comment');
const commentList = document.querySelector('.social__comments');

const renderComment = (commentInfo) => {
  const newComment = comment.cloneNode(true);

  newComment.querySelector('.social__picture').src = commentInfo.avatar;
  newComment.querySelector('.social__picture').alt = commentInfo.name;
  newComment.querySelector('.social__picture').textContent = commentInfo.message;

  return newComment;
};

const renderComments = (commentsInfo) => {
  commentList.innerHTML = '';
  const fragment = document.createDocumentFragment();

  commentsInfo.forEach((commentInfo) => {
    fragment.append(renderComment(commentInfo));
  });

  commentList.append(fragment);
};

const showBigPicture = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  bigPictureCommentsCountBlock.classList.add('hidden');
  bigPictureCommentsLoader.classList.add('hidden');
};

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

const documentOnKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
};

const fillPictureDetails = (pictureInfo) => {
  bigPictureImg.src = pictureInfo.url;
  bigPictureLikesCount.textContent = pictureInfo.likes;
  bigPictureCommentsCount.textContent = pictureInfo.comments.Length;
  bigPictureSocialCaption.textContent = pictureInfo.description;

  renderComments(pictureInfo.comments);
};

const addEventListenerToPicture = (picturesInfo) => {
  const pictures = document.querySelectorAll('.picture');

  for (const picture of pictures){
    picture.addEventListener('click', () => {
      showBigPicture();
      fillPictureDetails(picturesInfo[picture.dataset.id - 1]);
    });
  }

  removeButton.addEventListener('click', hideBigPicture);
  document.addEventListener('keydown', documentOnKeyDown);
};

export {addEventListenerToPicture};
