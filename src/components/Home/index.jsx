import { Component } from 'react';
import style from './style.module.css';
import user from '../../assets/caricature.png';
import Balancer from 'react-wrap-balancer';

class Home extends Component {
  render() {
    return (
      <>
        <section className={`${style.landingInvite} pages_with_content`}>
          <figure>
            <img
              src={user}
              alt="Jaya Krishna Namburu"
              className={style.landingImage}
            />
          </figure>
          <div>
            <Balancer>
              <p style={{ fontWeight: 700, fontSize: '3rem' }}>Hello.</p>
              <p>
                I'm Jaya Krishna Namburu, a software engineer with hands-on
                experience in open source and building scalable front-end
                platforms and developer tools. Currently at{' '}
                <a
                  className="bold"
                  href="https://www.userflow.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Userflow
                </a>
                , previously at{' '}
                <a
                  className="bold"
                  href="https://www.teleporthq.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  teleportHQ
                </a>
                ,{' '}
                <a
                  className="bold"
                  href="https://codesandbox.io/?from-app=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Codesandbox
                </a>
                .
              </p>
              <p>
                Connect with me on Twitter{' '}
                <a
                  className="bold"
                  href="https://www.jkrishna.dev/twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @askjkrishna
                </a>{' '}
                or on GitHub{' '}
                <a
                  className="bold"
                  href="https://jkrishna.dev/github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JayaKrishnaNamburu
                </a>
                .
              </p>
            </Balancer>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
