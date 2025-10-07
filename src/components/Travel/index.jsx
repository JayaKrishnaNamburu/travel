import React, { Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet'
import style from './style.module.css'
// import TravelBlogs from '../TravelBlogs'

const description = `I like travelling and ocassionally i write them down. 
I hope these might help others in planning their tips. 
I would love to hear iternaries from you too.`

const Travel = () => {
  const Map = lazy(() => import('../Map'))

  return (
    <div>
      <Helmet>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
      </Helmet>
      {/* <TravelBlogs description={description} /> */}
      <div className={style.travelDescription}></div>
      <div className={style.portfolio}>
        {/* <div className={style.user}>
          <img src={back} alt="bigPicture" className={style.bigPicture} />
        </div>
        <div className={style.map}> */}
          <Suspense fallback={<div>Loding...</div>}>
            <Map />
          </Suspense>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Travel
