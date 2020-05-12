import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { getPostData } from '../../resources/post_data';
import style from './style.module.css';

const ReactMarkdown = lazy(() => import('react-markdown/with-html'));
const CodeBlock = lazy(() => import('../Code'));

const Page = () => {
  const [content, setContent] = useState('');
  const [post, setPost] = useState();
  const [landingImageLoaded, setLandingImageLoaded] = useState(false);
  const blogRef = useRef();

  const fetchFile = async fileName => {
    const path = require(`../../resources/markdown/${fileName}.md`);
    const data = await fetch(path);
    const content = await data.text();
    setContent(content);
  };

  const router = useParams();
  const { heading, description, landing_image } = post || {
    heading: '',
    description: ''
  };

  useEffect(() => {
    const { postId } = router;
    const postContent = getPostData(Number(postId));
    if (postContent && postContent.markdown_file) {
      setPost(postContent);
      fetchFile(postContent.markdown_file);
    }
    if (!postId) {
      console.log('push back');
    }
  }, []);

  return (
    <>
      <div className={style.post_wrapper} ref={blogRef}>
        <Helmet>
          <title>{heading}</title>
          <meta name="description" content={description} />
        </Helmet>
        <article>
          <h2 className={style.post_heading}>{heading}</h2>
          <p className={style.post_description}>{description}</p>
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
          {content && (
            <div className={style.post_content}>
              <Suspense fallback={<div>Loading....</div>}>
                <ReactMarkdown
                  source={content}
                  renderers={{ code: CodeBlock }}
                />
              </Suspense>
            </div>
          )}
        </article>
      </div>
    </>
  );
};

export default Page;
