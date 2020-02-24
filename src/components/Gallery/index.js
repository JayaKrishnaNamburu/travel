import React from 'react';
import { withRouter } from 'react-router-dom';
import Holder from '../Holder';
import styles from './gallery.module.css';
import { images } from './gallery';
import 'lazysizes';

const Gallery = () => {
  return (
    <div className={styles.gridWrapper}>
      {images['kedarkantha'].map(item => (
        <Holder key={`kedarkantha-${item}`} index={item} loc="kedarkantha" />
      ))}
      {images['yercaud'].map(item => (
        <Holder key={`yercaud-${item}`} index={item} loc="yercaud" />
      ))}
      {images['banglore'].map(item => (
        <Holder key={`banglore-${item}`} index={item} loc="banglore" />
      ))}
      {images['udaipur'].map(item => (
        <Holder key={`udaipur-${item}`} index={item} loc="udaipur" />
      ))}
      {images['wayanad'].map(item => (
        <Holder key={`wayanad-${item}`} index={item} loc="wayanad" />
      ))}
      {images['coorg'].map(item => (
        <Holder key={`coorg-${item}`} index={item} loc="coorg" />
      ))}
      {images['pollachi'].map(item => (
        <Holder key={`pollachi-${item}`} index={item} loc="pollachi" />
      ))}
      {images['pichavaram'].map(item => (
        <Holder key={`pichavaram-${item}`} index={item} loc="pichavaram" />
      ))}
      {images['varkala'].map(item => (
        <Holder key={`varkala-${item}`} index={item} loc="varkala" />
      ))}
      {images['rishikesh'].map(item => (
        <Holder key={`rishikesh-${item}`} index={item} loc="rishikesh" />
      ))}
    </div>
  );
};

export default withRouter(Gallery);
