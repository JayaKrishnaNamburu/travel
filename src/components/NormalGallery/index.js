import React from 'react';
import { images } from '../Gallery/gallery';
import styles from '../Gallery/gallery.module.css';
import 'lazysizes';

const NormalGallery = () => {
  return (
    <div className={styles.gridWrapper}>
      {images['kedarkantha'].map((item, index) => (
        <div className={styles.gridItem}>
          <img
            className="lazyload"
            data-src={require(`../../compressed/normal-compression/images/kedarkantha/${item}.jpg`)}
            alt="kedarkantha"
          />
        </div>
      ))}
      {images['yercaud'].map((item, index) => (
        <div className={styles.gridItem}>
          <img
            className="lazyload"
            data-src={require(`../../compressed/normal-compression/images/yercaud/${item}.jpg`)}
            alt="yercaud"
          />
        </div>
      ))}
      {images['banglore'].map((item, index) => (
        <div className={styles.gridItem}>
          <img
            className="lazyload"
            data-src={require(`../../compressed/normal-compression/images/banglore/${item}.jpg`)}
            alt="banglore"
          />
        </div>
      ))}
    </div>
  );
};

export default NormalGallery;
