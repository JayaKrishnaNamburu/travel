import React from 'react';
import styles from '../Gallery/gallery.module.css';

const Holder = props => {
  return (
    <div className={styles.gridItem}>
      <img
        height="500"
        loading="lazy"
        src={require(`../../compressed/images/${props.loc}/${props.index}.jpg`)}
        alt={props.loc}
      />
    </div>
  );
};

export default Holder;
