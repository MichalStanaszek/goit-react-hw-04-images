import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, onImageClick }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        className={styles['ImageGalleryItem-image']}
        src={image.webformatURL}
        alt={image.tags}
        onClick={() => onImageClick(image)}
        loading="lazy"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
