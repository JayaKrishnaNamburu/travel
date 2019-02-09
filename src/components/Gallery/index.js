import React from 'react';
import Holder from '../Holder';
import styles from './gallery.module.css';
import { images } from './gallery';

const Gallery = () =>  {
    return (
        <div className={styles.gridWrapper}>
            {images['kedarkantha'].map((item) => <Holder index={item} loc="kedarkantha" />)}
            {images['yercaud'].map((item) => <Holder index={item} loc="yercaud" />)}
            {images['banglore'].map((item) => <Holder index={item} loc="banglore" />)}
            {images['udaipur'].map((item) => <Holder index={item} loc="udaipur" />)}
        </div>
    );
}

export default Gallery;