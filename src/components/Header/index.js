import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import style from './style.module.css';

const Header = () => {
  return (
    <>
      <Helmet>
        <title>Jaya Krishna | Travel stories</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <matea property="og:title" content="Jaya Krishna Namburu" />
        <meta
          name="description"
          content="I like writing down all the travel stories that i came across"
        />
        <meta
          property="og:description"
          content="I like writing down all the travel stories that i came across"
        />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#000000" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
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
            <li className={style.listItem}>
              <Link to="/travel">Travel Stories</Link>
            </li>
            <li className={style.listItem}>
              <Link to="/blogs">Talks & Blogs</Link>
            </li>
            <li className={style.listItem}>
              <Link to="/gallery">Travel Gallery</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
