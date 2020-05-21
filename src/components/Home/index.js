import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';
import user from '../../assets/caricature.png';

class Home extends Component {
  render() {
    return (
      <>
        <section class={style.landingInvite}>
          <figure>
            <img
              src={user}
              alt="Jaya Krishna Namburu"
              className={style.landingImage}
            />
          </figure>
          <div>
            <p>Hi :)</p>
            <p>
              I am a JavaScript developer, currently working at {' '}
              <a
                href="https://www.teleporthq.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                @teleportHQ. 
              </a>
              I like open source software, JavaScript and travelling. I occassionally
              share my thoughts at conferences and meetups. You can find links
              and slides for all my talks. I share my travel experiences as well.
            </p>
            <p>
              If you feel like reading some of my travel stories, head to my {''}
              <Link to="/travel">travel blog.</Link> Do you want to just see the
              pictures from my journeys? Then check out my <Link to="/gallery">travel gallery</Link>{''}.
            </p>
            <p>
              Are you a technical person who loves JavaScript? Then head right to my {''}
              <Link to="/blogs">technical blogs</Link>.
            </p>
            <p>
              You can find me on twitter -{' '}
              <a
                href="https://twitter.com/askjkrishna"
                target="_blank"
                rel="noopener noreferrer"
              >
                @askjkrishna
              </a>{' '}
              {''}
              and GitHub -{' '}
              <a
                href="https://github.com/JayaKrishnaNamburu"
                target="_blank"
                rel="noopener noreferrer"
              >
                JayaKrishnaNamburu
              </a>
            </p>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
