import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../../resources/posts';
import style from './style.module.css';

const Blogs = () => {
  return (
    <div className={style.blogsWrapper} role="main">
      <article className={style.aritcleGrid}>
        {posts.map(post => {
          return (
            <article>
              <h3 className={style.blogHeading}>{post.heading}</h3>
              <p className={style.blogDescription}>{post.description}</p>
              <Link to={`/post/${post.id}`} className={style.readMoreButton}>
                Read more...
              </Link>
            </article>
          );
        })}
      </article>
    </div>
  );
};

export default Blogs;
