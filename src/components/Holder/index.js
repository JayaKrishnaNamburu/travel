import React from 'react';
import styles from '../Gallery/gallery.module.css';

const Holder = (props) => {
    return (
        <div className={styles.gridItem}>
            <img src={require(`../../compressed/images/${props.loc}/${props.index}.jpg`)} alt="holder" />
        </div>
    );
}

export default Holder