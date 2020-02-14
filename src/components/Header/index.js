import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import style from './style.module.css';

const Header = () => {
  return (
    <Router>
      <section className={style.navWrapper}>
        <h3>Jaya Krishna Namburu</h3>
        <nav>
          <ul className={style.navList}>
            <li className={style.listItem}>
              <Link to="/">Home</Link>
            </li>
            <li className={style.listItem}>
              <Link to="/travel">Travel</Link>
            </li>
            <li className={style.listItem}>
              <Link to="/blogs">Blog</Link>
            </li>
            <li className={style.listItem}>
              <Link to="/blogs">Talks</Link>
            </li>
          </ul>
        </nav>
      </section>
    </Router>
  );
};

export default Header;
