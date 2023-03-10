import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import style from './style.module.css'

const Header = () => {
  const seoText = `A self-motivated soul, trying to share all memories and stuff`

  return (
    <>
      <Helmet>
        <title>Jaya Krishna | Travel stories and JavaScript blogs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <matea property="og:title" content="Jaya Krishna Namburu" />
        <meta name="description" content={seoText} />
        <meta property="og:description" content={seoText} />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#000000" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <header className={style.navWrapper}>
        <div></div>
        <nav>
          <ul className={style.navList}>
            <li className={style.listItem}>
              <Link to="/">Home</Link>
            </li>
            {/* <li className={style.listItem}>
              <Link to="/travel">Stories</Link>
            </li> */}
            <li className={style.listItem}>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className={style.listItem}>
              <Link to="/gallery">Travel Gallery</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
