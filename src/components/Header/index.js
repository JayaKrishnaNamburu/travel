import React from 'react';
import { Link } from 'react-router-dom';
import user from '../../assets/caricature.png';
import style from './style.module.css';

const Header = () => {
  return (
    <header className={style.navWrapper}>
      <div>
        <img
          className={style.smallImage}
          src={user}
          alt="Caricature of Jaya Krishna"
        />
        {/* <h4 className={style.userName}>Jaya Krishna Namburu</h4> */}
      </div>
      <nav>
        <ul className={style.navList}>
          <li className={style.listItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={style.listItem}>
            <Link to="/travel">Travel-Stories</Link>
          </li>
          <li className={style.listItem}>
            <Link to="/gallery">Travel-Gallery</Link>
          </li>
          <li className={style.listItem}>
            <Link to="/blogs">Talks & Blogs</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
