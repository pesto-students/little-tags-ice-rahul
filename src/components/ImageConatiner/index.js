import React from 'react'
import classNames from 'classnames';
import { IMAGE_CONTAINER } from '../../constants';
import './ImageContainer.scss';

const ImageContainer = ({ type = IMAGE_CONTAINER.TYPE.PRIMARY, title = 'Image', link = '#' }) => {

  var ImageContainerConfig = classNames({
    'ImageContainer': true,
    'img-primary' : type === IMAGE_CONTAINER.TYPE.PRIMARY,
    'img-secondary' : type === IMAGE_CONTAINER.TYPE.SECONDARY,
    'img-tertiary' : type === IMAGE_CONTAINER.TYPE.TERTIARY
  });

  return (
    <div className={ImageContainerConfig}>
      <div className="imageContainerTitle">{title}</div>
    </div>
  );
}

export default ImageContainer;