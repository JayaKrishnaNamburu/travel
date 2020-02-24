import React, { Component, Suspense } from 'react';
import style from './style.module.css';
import back from '../../assets/back.jpg';
import bangalore from '../../assets/bangalore.jpeg';

class Home extends Component {
  render() {
    const Map = React.lazy(() => import('../Map'));
    return (
      <>
        <section className={style.talks}>
          <img
            src={bangalore}
            className={style.landingBanner}
            alt="Explaining about choosing Javascript stack in Fontend"
          />
        </section>

        <section className={style.headWrapper}>
          <div className={style.intro}>
            {/* <img src={user} alt="user-avatar" className={style.user} /> */}
            <p>
              A full-stack JavaScript Developer, with a passion for learning new
              things everyday and contribute to community.
            </p>
          </div>
        </section>

        <section className={style.portfolio}>
          <div className={style.user}>
            <img src={back} alt="bigPicture" className={style.bigPicture} />
          </div>
          <div className={style.map}>
            <Suspense fallback={<div>Loding...</div>}>
              <Map />
            </Suspense>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
