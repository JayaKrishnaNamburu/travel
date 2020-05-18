import React from 'react';
import { Link } from 'react-router-dom';
import { travelPosts } from '../../resources/travel_posts';
import style from '../Blogs/style.module.css';

const TravelBlogs = ({ description }) => {
  return (
    <div className={style.blogsWrapper} role="main">
      <div className={style.blogsHeading}>
        <h2>Travel Stories</h2>
        <p className={style.blogsDescription}>{description}</p>
      </div>
      <article className={style.aritcleGrid}>
        {travelPosts.map(post => {
          return (
            <article key={post.id}>
              <Link to={`/travel/post/${post.id}`}>
                <h2>{post.heading}</h2>
              </Link>
              <p className={style.blogDescription}>{post.description}</p>
              <Link to={`/travel/post/${post.id}`}>Read more...</Link>
            </article>
          );
        })}
      </article>
    </div>
  );
};

export default TravelBlogs;
