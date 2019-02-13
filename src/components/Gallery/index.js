import React from 'react';
import Holder from '../Holder';
import styles from './gallery.module.css';
import { images } from './gallery';

const Gallery = () =>  {
    return (
        <div className={styles.gridWrapper}>
            {images['kedarkantha'].map((item) => <Holder key={`kedarkantha-${item}`}
             index={item} loc="kedarkantha" />)}
            {images['yercaud'].map((item) => <Holder key={`yercaud-${item}`} index={item} loc="yercaud" />)}
            {images['banglore'].map((item) => <Holder key={`banglore-${item}`} index={item} loc="banglore" />)}
            {images['udaipur'].map((item) => <Holder key={`udaipur-${item}`} index={item} loc="udaipur" />)}
            {images['wayanad'].map((item) => <Holder key={`wayanad-${item}`} index={item} loc="wayanad" />)}
        </div>
    );
}

export default Gallery;