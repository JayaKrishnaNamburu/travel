import React from 'react'

import styles from './design2code.module.css'

const Design2Code = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <h1 className={styles.text}>Bridging the gap between Design and Code</h1>
        <span className={styles.text01}>15-May-2021</span>
        <div className={styles.container2}></div>
        <span className={styles.text02}></span>
        <div className={styles.container3}>
          <img
            alt="UI Design"
            src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1000"
            className={styles.image}
          />
          <img
            alt="UI Code"
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGNvZGV8ZW58MHx8fHwxNjIxMDczMzg4&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1000"
            className={styles.image1}
          />
        </div>
        <p className={styles.text03}>
          <span>
            A typical day of a front-end developer, starts with a design discussion, planning,
            re-creating the designs in code. And this cycle doesn&apos;t stop here.
          </span>
          <br></br>
          <span>
            The designs go for a ux-review, and feedback and the design process continues. And to
            solve this solution, there numerous hand-off tools / no-code tools have started to
            explore and come up with their own solutions.
          </span>
        </p>
        <p className={styles.text07}>
          <span>
            The tools which aims to solve this cycle of design and code into multiple categories.
            This is more of my personal take on how i see the division of tools.
          </span>
          <br></br>
          <br></br>
          <span>
            - A full-blown design tools. These can be used to design in free-hand and pay less
            attention to the semantics, like am i using the proper styles to place an element, am i
            using the proper layout etc.
          </span>
          <span></span>
          <br></br>
          <span>
            - A end to end systems, which provide designing and content-management at the same time.
            We have the same upsides and down-sides too at the same time with this approach.
          </span>
        </p>
        <p className={styles.text16}>
          <span>
            The one problem with the both approaches is, we are subjected to a degree of vendor
            lock-in with the system. There is a limitation to which we can do with the tools at the
            moment. Sure, it&apos;s a good solution for many use-cases.
          </span>
          <br></br>
          <br></br>
          <span>
            But, about more advanced use-cases, what about building properitaty applications which
            have their own CMS solutions, or Databases.
          </span>
          <br></br>
          <span>
            If i take a step-back and think about the problem that these no-code platforms are
            trying to solve, we are missing out these use-cases.
          </span>
        </p>
        <p className={styles.text24}>
          <span>
            So, we get into the system and design everything and now we want to work on top of it.
            The solution at the moment is &quot;eject&quot;, surely most of the node-code platforms
            today allows us to eject the code that the systems generate and allow users to work with
            it.
          </span>
          <br></br>
          <span>But what if the user still want&apos;s to use the tool for designing.</span>
          <br></br>
          <br></br>
          <span>
            We loose the benifits that the tool provides us, and now from here on we are alone in
            the designing journey again.
          </span>
        </p>
      </div>
    </div>
  )
}

export default Design2Code
