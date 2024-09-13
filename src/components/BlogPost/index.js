import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { getHumanDate } from '../../utils/helpers';
import { PostSubHeader } from '../PostUtils';
import { getPostData } from '../../resources/posts';
import style from './style.module.css';
import Balancer from 'react-wrap-balancer';

const Page = () => {
  const { postId } = useParams();
  const [post, setPostData] = useState(null);
  const [landingImageLoaded, setLandingImageLoaded] = useState(false);

  useEffect(() => {
    if (!postId) {
      throw new Error('No post Id from the URL');
    }
    const postDetails = getPostData(postId);
    setPostData(postDetails);
  }, [postId]);

  if (!post || !post.markdown_file) {
    return null;
  }

  const Content = lazy(() => {
    return import(`../../resources/markdown/${post.markdown_file}.mdx`);
  });

  const { heading, description, image, caption, date, og } = post;

  return (
    <div className={style.post_wrapper} data-remove-script={true}>
      <Helmet>
        <title>{heading}</title>
        <meta name="description" content={description} />

        <meta property="og:url" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={heading} />
        <meta property="og:description" content={description} />
        {og && (
          <meta property="og:image" content={`https://jkrishna.dev/${og}`} />
        )}

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="jkrishna.dev" />
        <meta
          property="twitter:url"
          content="https://jkrishna.dev/post/import-maps-nodejs"
        />
        <meta name="twitter:title" content={heading} />
        <meta name="twitter:description" content={description} />
        {og && (
          <meta
            property="twitter:image"
            content={`https://jkrishna.dev/${og}`}
          />
        )}
      </Helmet>
      <article>
        <div className={style.post_content}>
          <PostSubHeader>{heading}</PostSubHeader>
          <p className={style.post_description}>{description}</p>
          {date && <div className={style.date}>{getHumanDate(date)}</div>}
          {image && (
            <div className={style.post_image_holder}>
              <figure>
                <img
                  className={style.post_landing_image}
                  src={image}
                  onLoad={() => setLandingImageLoaded(true)}
                  alt={heading}
                />
                {caption && <figcaption>{caption}</figcaption>}
              </figure>
              {!landingImageLoaded && (
                <div className={style.post_landing_loader} />
              )}
            </div>
          )}
          <Suspense fallback={<div>Loading....</div>}>
            <Balancer>
              <Content />
            </Balancer>
          </Suspense>
        </div>
      </article>
    </div>
  );
};

export default Page;
