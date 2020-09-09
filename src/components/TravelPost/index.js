import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { PostSubHeader } from '../PostUtils';
import { getTravelPostsData } from '../../resources/posts';
import style from '../BlogPost/style.module.css';

const Page = () => {
  const { postId } = useParams();
  const [post, setPostData] = useState(null);
  const [landingImageLoaded, setLandingImageLoaded] = useState(false);

  useEffect(() => {
    if (!postId) {
      throw new Error('No post Id from the URL');
    }
    const postDetails = getTravelPostsData(postId);
    setPostData(postDetails);
  }, [postId]);

  if (!post || !post.markdown_file) {
    return null;
  }

  const Content = lazy(() => {
    return import(`../../resources/travel_markdown/${post.markdown_file}.mdx`);
  });

  const { heading, description, landing_image, duration, tags, image } = post;

  return (
    <div className={style.post_wrapper} data-remove-script={true}>
      <Helmet>
        <title>{heading}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={heading} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
      </Helmet>
      <article>
        <PostSubHeader>{heading}</PostSubHeader>
        <p className={style.post_description}>{description}</p>
        <strong>Duration: {duration}</strong>
        <p>
          Tags:
          <span>
            {tags.map(tag => (
              <span style={{ marginLeft: '1rem' }}>{tag}</span>
            ))}
          </span>
        </p>
        {landing_image && (
          <div className={style.post_image_holder}>
            <img
              className={style.post_landing_image}
              src={landing_image}
              onLoad={() => setLandingImageLoaded(true)}
              alt={heading}
            />
            {!landingImageLoaded && (
              <div className={style.post_landing_loader} />
            )}
          </div>
        )}
        <div className={style.post_content}>
          <Suspense fallback={<div>Loading....</div>}>
            <Content />
          </Suspense>
        </div>
      </article>
    </div>
  );
};

export default Page;
