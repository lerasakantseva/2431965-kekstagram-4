const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const thumbnailsContainer = document.querySelector('.pictures');

const getThumbnailFromTemplate = (pictureInfo) => {
  const picture = thumbnailTemplate.cloneNode(true);

  picture.querySelector('.picture_img').src = pictureInfo.url;
  picture.querySelector('.picture_img').alt = pictureInfo.description;
  picture.querySelector('.picture_comments').textContent = pictureInfo.comments.length;
  picture.querySelector('.picture_likes').textContent = pictureInfo.likes;

  return picture;
};

const renderThumbnail = (picturesInfo) => {
  const fragment = document.createDocumentFragment();

  picturesInfo.forEach((element) => {
    fragment.appendChild(getThumbnailFromTemplate(element));
  });

  thumbnailsContainer.append(fragment);
};

export {renderThumbnail};
