import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import back from '../../assets/back.jpg';
import style from './style.module.css';
import TravelBlogs from '../TravelBlogs';

const description =
  'I like travelling and sharing my stories and here is a collection of few of my travel stories. I hope these might help others in planing their tips and would love to hear few iternaries from you.';

const Travel = () => {
  const Map = lazy(() => import('../Map'));

  return (
    <div>
      <Helmet>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
      </Helmet>
      <TravelBlogs description={description} />
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
    </div>
  );
};

export default Travel;
