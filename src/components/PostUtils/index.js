import React from 'react';
import style from './style.module.css';

export const Suggestion = props => {
  return <div className={style.suggestion}>{props.children}</div>;
};

export const PostSubHeader = props => (
  <h2 className={style.subHeader}>{props.children}</h2>
);
