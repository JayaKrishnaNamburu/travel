import React from 'react';
import { withRouter } from 'react-router-dom';
import Holder from '../Holder';
import styles from './gallery.module.css';
import { images } from './gallery';

const LoadImages = ({ location }) => {
  return (
    <>
      {images[location].map(item => (
        <Holder key={`${location}-${item}`} index={item} loc={location} />
      ))}
    </>
  );
};

const Gallery = () => {
  return (
    <div className={styles.gridWrapper}>
      {Object.keys(images).map((location, index) => (
        <LoadImages location={location} key={index} />
      ))}
    </div>
  );
};

export default withRouter(Gallery);
