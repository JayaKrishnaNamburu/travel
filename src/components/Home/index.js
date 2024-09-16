import React, { Component } from 'react';
import style from './style.module.css';
import user from '../../assets/caricature.png';
import Balancer from 'react-wrap-balancer';

class Home extends Component {
  render() {
    return (
      <>
        <section className={style.landingInvite}>
          <figure>
            <img
              src={user}
              alt="Jaya Krishna Namburu"
              className={style.landingImage}
            />
          </figure>
          <div>
            <Balancer>
              <p style={{ fontWeight: 700, fontSize: '3rem' }}>Hello..</p>
              <p>
                I am an Engineer, currently working at{' '}
                <a
                  className="bold"
                  href="https://www.teleporthq.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  teleportHQ.
                </a>
                previously{' '}
                <a
                  className="bold"
                  href="https://codesandbox.io/?from-app=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Codesandbox
                </a>{' '}
                and core member of{' '}
                <a
                  className="bold"
                  href="https://jspm.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JSPM
                </a>
                . I like open source software, JavaScript and travelling. I
                ocassionally share my thoughts at conferences and meetups too.
              </p>
              <p>
                You can find me on twitter{' '}
                <a
                  className="bold"
                  href="https://www.jkrishna.dev/twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @askjkrishna
                </a>{' '}
                {''}
                and GitHub{' '}
                <a
                  className="bold"
                  href="https://jkrishna.dev/github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JayaKrishnaNamburu
                </a>
              </p>
            </Balancer>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
