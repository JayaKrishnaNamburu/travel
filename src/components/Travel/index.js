import React, { Suspense, lazy } from 'react';
import back from '../../assets/back.jpg';
import style from './style.module.css';

const Travel = () => {
  const Map = lazy(() => import('../Map'));

  return (
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
  );
};

export default Travel;
