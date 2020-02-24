import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import { getPostData } from '../../resources/post_data';
import CodeBlock from '../Code';
import { useParams } from 'react-router-dom';
import './style.css';

const Page = () => {
  const [content, setContent] = useState('');
  const [post, setPost] = useState();
  const [landingImageLoaded, setLandingImageLoaded] = useState(false);

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
      {/* <Head>
        <link href="static/markdown.css" rel="stylesheet" />
      </Head> */}
      <div className="post_wrapper">
        <article>
          <h2 className="post_heading">{heading}</h2>
          <p className="post_description">{description}</p>
          {landing_image && (
            <div className="post_image_holder">
              <img
                className="post_landing_image"
                src={landing_image}
                onLoad={() => setLandingImageLoaded(true)}
                alt={heading}
              />
              {!landingImageLoaded && <div className="post_landing_loader" />}
            </div>
          )}
        </article>
        {content && (
          <div className="post_content">
            <ReactMarkdown
              source={content}
              renderers={{
                code: CodeBlock
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
