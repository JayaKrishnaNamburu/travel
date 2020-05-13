import React, { Suspense, lazy } from 'react';
import back from '../../assets/back.jpg';
import style from './style.module.css';
import TravelBlogs from '../TravelBlogs';

const Travel = () => {
  const Map = lazy(() => import('../Map'));

  return (
    <div>
      <div className={style.travelDescription}></div>
      <div className={style.portfolio}>
        <div className={style.user}>
          <img src={back} alt="bigPicture" className={style.bigPicture} />
        </div>
        <div className={style.map}>
          <Suspense fallback={<div>Loding...</div>}>
            <Map />
          </Suspense>
        </div>
      </div>
      <TravelBlogs />
    </div>
  );
};

export default Travel;
