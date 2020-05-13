import React from 'react';
import style from './style.module.css';

const PostImage = ({ src, alt, caption }) => {
  return (
    <figure>
      <img src={src} alt={alt} className={style.image} />
      <figurecaption>{caption}</figurecaption>
    </figure>
  );
};

export default PostImage;
