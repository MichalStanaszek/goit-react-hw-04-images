import React, { useEffect } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClose = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.Overlay} onClick={handleClose}>
      <div className={styles.Modal}>
        <img src={image.largeImageURL} alt={image.tags} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default Modal;
