import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { posts } from '../../resources/posts_data'
import style from './style.module.css'

const Blogs = () => {
  return (
    <div className={style.blogsWrapper} role="main" data-remove-script={true}>
      <Helmet>
        <title>Talks & Blogs</title>
        <meta
          name="description"
          content="  A collection of all my previous talks and blogs in once place
        "
        />
      </Helmet>
      <div>
        <img
          className={style.landingImage}
          src={require(`../../compressed/images/generic/ember_meetup.jpg`)}
          alt="Langing Hero"
        />
      </div>
      <article className={style.aritcleGrid}>
        {posts.map((post) => {
          return (
            <article key={post.id}>
              <Link to={`/post/${post.id}`}>
                <h2>{post.heading}</h2>
              </Link>
              <p className={style.blogDescription}>{post.description}</p>
              <Link to={`/post/${post.id}`}>Read more</Link>
            </article>
          )
        })}
      </article>
    </div>
  )
}

export default Blogs
