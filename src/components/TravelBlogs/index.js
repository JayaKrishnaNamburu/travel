import React from 'react';
import { Link } from 'react-router-dom';
import { travelPosts } from '../../resources/travel_posts';
import style from '../Blogs/style.module.css';

const TravelBlogs = () => {
  return (
    <div className={style.blogsWrapper} role="main">
      <div className={style.blogsHeading}>
        <h2>Travel Stories</h2>
        <p className={style.blogsDescription}>
          I like travelling and sharing my stories and here is a collection of
          few of my travel stories. I hope these might help others in planing
          their tips and would love to hear few iternaries from you.
        </p>
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
