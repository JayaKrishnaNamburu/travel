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
              I am a JavaScript developer, currently working{' '}
              <a
                href="https://www.teleporthq.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                @teleportHQ.
              </a>
              I like opensource, JavaScript and Travelling. I occassionally
              share my thoughts at conferences and meetups. You can find links
              and slides for all my talks. I share my experiences in travelling
              as well.
            </p>
            <p>
              Feel like reading some travel stories, head to {''}
              <Link to="/travel">here.</Link> Like to see some landscapes from
              my previous journeys, head to <Link to="/gallery">here.</Link>{' '}
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
