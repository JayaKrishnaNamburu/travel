import React, { Component } from 'react';
import styles from './blog.module.css';

class Gallery extends Component {

    render() {
        return (
            <div className={styles.gridWrapper}>
                <div className={styles.gridItem}>
                    <img src={require('../../images/kedarkantha/1.jpg')} alt="holder" />
                </div>
                <div className={styles.gridItem}>
                    <img src={require('../../images/kedarkantha/2.jpg')} alt="holder" />
                </div>
                <div className={styles.gridItem}>
                    <img src={require('../../images/kedarkantha/3.jpg')} alt="holder" />
                </div>
                <div className={styles.gridItem}>
                    <img src={require('../../images/yercaud/1.jpg')} alt="holder" />
                </div>
                <div className={styles.gridItem}>
                    <img src={require('../../images/banglore/1.jpg')} alt="holder" />
                </div>
            </div>
        );
    }
}

export default Gallery;