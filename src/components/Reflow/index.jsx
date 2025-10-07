import React from 'react'
import banner from '../../images/varkala/2.jpg'
import holderOne from '../../images/kedarkantha/1.jpg'
import holderThree from '../../images/pollachi/1.jpg'
import styles from './style.module.css'

const Reflow = () => {
  return (
    <section className={styles.wrapper}>
      <h1>Heading of the article</h1>
      <p className={styles.content}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
      <img
        className={`${styles.bannerImage} lazyload`}
        data-src={banner}
        alt="Landing Banner which contains a beach view"
      />
      <p className={styles.content}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
      <p className={styles.content}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
      <img
        data-src={holderOne}
        className={`${styles.bannerImage} lazyload`}
        alt="Placeholder just to show reflow"
      />
      <p className={styles.content}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
      <img
        data-src="https://thamizhselvan93.github.io/shashavilla/static/media/room.f840cf20.jpeg"
        className={`${styles.bannerImage} lazyload`}
        alt="Placeholder just to show reflow"
      />
      <p className={styles.content}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
      <img
        data-src="https://thamizhselvan93.github.io/shashavilla/static/media/lobby1.37e53fb4.jpeg"
        className={`${styles.bannerImage} lazyload`}
        alt="Placeholder just to show reflow"
      />
      <p className={styles.content}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
      <img
        data-src={holderOne}
        className={`${styles.bannerImage} lazyload`}
        alt="Placeholder just to show reflow"
      />
      <p className={styles.content}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
      <img
        data-src={holderThree}
        className={`${styles.bannerImage} lazyload`}
        alt="Placeholder just to show reflow"
      />

      <p className={styles.content}>
        <h3>Links</h3>
        <a href="https://thamizhselvan93.github.io/shashavilla/">Shashavilla</a>
        <div>
          <a href="https://css-tricks.com/preventing-content-reflow-from-lazy-loaded-images/">
            Avoiding reflow
          </a>
        </div>
        <div>
          <a href="https://in.godaddy.com/">Go Daddy</a>
        </div>
      </p>
    </section>
  )
}

export default Reflow
