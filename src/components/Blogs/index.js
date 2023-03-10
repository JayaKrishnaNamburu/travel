import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { posts } from '../../resources/posts_data'
import style from './style.module.css'
import Balancer from 'react-wrap-balancer'

const Blogs = () => {
  return (
    <div className={style.blogsWrapper} role="main" data-remove-script={true}>
      <Helmet>
        <title>Posts</title>
        <meta
          name="description"
          content="  A collection of all my previous talks and blogs in once place
        "
        />
      </Helmet>
      <article className={style.aritcleGrid}>
        {posts.map((post) => {
          return (
            <article key={post.id}>
              <Link to={post.redirect ? post.redirect : `/post/${post.id}`}>
                <h2>{post.heading}</h2>
              </Link>
              <p className={style.blogDescription}><Balancer>{post.description}</Balancer></p>
              <Link to={post.redirect ? post.redirect : `/post/${post.id}`}><b>Read more</b></Link>
            </article>
          )
        })}
      </article>
    </div>
  )
}

export default Blogs
