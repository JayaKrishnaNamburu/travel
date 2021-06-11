import React from 'react'

import Divider from './divider'
import Quote from './quote'
import styles from './es-build.module.css'
import { Helmet } from 'react-helmet'

const heading = 'Reducing build time by 50% for a Typescript Monorepo'
const description =
  'As, the projects starts to grow, monorepo build times are taking a massive hit. Here is a succesful attempt in reducing our build time by 50%'

const EsBuild = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>{heading}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={heading} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e4ac09ac-d6de-4393-9e5c-298884624998/887654f9-d9de-4069-abe7-2af2c5bc176b?org_if_sml=1&w=200"
        />
      </Helmet>
      <div className={styles.container1}>
        <h1 className={styles.text}>{heading}</h1>
        <span className={styles.text001}>11-06-2021</span>
        <Divider></Divider>
        <div className={styles.container2}>
          <img
            alt="placeholder"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e4ac09ac-d6de-4393-9e5c-298884624998/57ff0ad0-be40-4637-aca8-62f0ce11da15?org_if_sml=1&w=200"
            className={styles.image}
          />
          <h1 className={styles.text002}>+</h1>
          <h1 className={styles.text003}> Monorepo&apos;s</h1>
        </div>
        <p className={styles.text004}>
          <span>The state of Javascript developer</span>
          <span className={styles.text006}> tooling</span>
          <span>
            {' '}
            is exciting and moving at much faster pace than ever. JavaScript being a high level and
            dynamic language, we end up coming across many runtime errors than a traditional
            compiler based languages (i.e rust, go, c++). It has it&apos;s own
          </span>
          <span className={styles.text008}>pros</span>
          <span> and</span>
          <span className={styles.text010}>{' '}cons</span>
          <span> at the same time.</span>
          <br></br>
          <br></br>
          <span>
            One major advantage is, learning curve is little easier as the feedback loop
            of seeing our projects running is quick. But the same will
          </span>
          <span className={styles.text016}> bite</span>
          <span> us back in large scale projects.</span>
        </p>
        <p className={styles.text018}>
          <span>But with</span>
          <span className={styles.text020}> typescript</span>
          <span className={styles.text021}>,</span>
          <span className={styles.text022}> linters</span>
          <span className={styles.text023}>,</span>
          <span>and</span>
          <span className={styles.text025}></span>
          <span className={styles.text026}> prettier</span>
          <span>
            {' '}
            and many other build time and development time targeting tools. These JS tooling has made our lifes as
            developers much more easier and at the same time reducing the run-time errors that we
            often run into. But, these tools being again written in JS, starts to show the short
            comings when the applications starts to grow bigger.
          </span>
        </p>
        <p className={styles.text028}>
          <span>Ok, Now enough</span>
          <span className={styles.text030}>ranting</span>
          <span>
            {' '}
            about the slowness of build tools, but what actually got me thinking into all this ?
          </span>
          <br></br>
          <span>Why should i bother, moving my build pipelines which is absolutely stable at the moment ?</span>
          <br></br>
          <span className={styles.text038}></span>
          <br></br>
          <span>There is a high chance of you coming across</span>
          <span className={styles.text041}>{' '}esbuild</span>
          <span>{' ' }I could direct you to some of the blogposts that talk about </span>
          <a href="https://github.com/evanw/esbuild" target="_blank" rel="noreferrer noopener">
            <span>esbuild</span>
          </a>
          <span>.</span>
        </p>
        <h1 className={styles.text045}>Monorepo build times</h1>
        <p className={styles.text046}>
          <span>
            Now, let&apos;s talk about monorepos. I wrote a article before on setting up a monorepo
            using typescipt and lerna. You can find it on{' '}
          </span>
          <a
            href="https://medium.com/@askjkrishna/scaffolding-a-project-using-lerna-and-lerna-changelog-cad6156f6f36"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>medium</span>
          </a>
          <span></span>
          <span>. And we adopted the same in our</span>
          <a
            href="https://github.com/teleporthq/teleport-code-generators"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>{' '}monorepo</span>
          </a>
          <span>{' '} of code generators. As, the project started to grow, we started running into</span>
          <span className={styles.text053}> delayed build times.</span>
          <span>. The build times are taking a</span>
          <span className={styles.text055}>{' '}massive</span>
          <span>
            {' '}
            hit. Our monorepo, consists of 60+ packages to support all frameworks that we target at
            the end. And so, we are looking at
          </span>
          <span className={styles.text057}> 10~13minutes </span>
          <span> of build time at minimum. Here is a screenshot from our CI.</span>
          <br></br>
          <br></br>
        </p>
        <img
          alt="placeholder"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e4ac09ac-d6de-4393-9e5c-298884624998/ae60ae64-bfaa-429e-bd5d-ff00ce25b449?org_if_sml=1&w=800"
          className={styles.image1}
        />
        <p className={styles.text063}>
          <span>You can see, on an average the build time is minimum</span>
          <span className={styles.text065}> 10mins</span>
          <span>. And this started to show effect in local too, even when we had a</span>
          <span className={styles.text067}>{' '}custom-watcher.{' ' }</span>
          <span>
            That takes care of watching the package and rebuilding them, which you can
            find here. But still the initial startup and build time at end is consuming a
            considerable time.
          </span>
            <br />
        </p>
        <p className={styles.text071}>
          <span>
            We don&apos;t use Webpack or rollup build tools. We just need to transpile the
            code to
          </span>
          <span className={styles.text073}> es6</span>
          <span>
            {' '}
            and publish to npm. Any bundling with dependencies, transpiling will handled by the users
            consuming the library. That&apos;s the best way to go, or else we might end up bundling
            two times, transpiling towo times. First when we do it before publishing to npm and once again when the users
            using in their build systems.
          </span>
        </p>
        <Quote text="tsc -p tsconfig-cjs.json  &amp;&amp; tsc -p tsconfig-cjs.json"></Quote>
        <p>
          <span>
            Command that we use for building all the packages. Now, let&apos;s look into reducing
            these build times.
          </span>
          <br></br>
          <span>
            So, let&apos;s address the two main missing points if we totally move towards using
          </span>
          <span className={styles.text079}>esbuild</span>
          <span>
            . At the moment of writing, esbuild doesn&apos;t support generating types and
            static-type checking. Which is fairly reasonable because, that&apos;s what
          </span>
          <span className={styles.text081}>tsc</span>
          <span> compiler is for</span>
          <span>
            . It means, esbuild can read a typescript code-base. But it just strips away typescript
            related meta.
          </span>
          <br></br>
          <br></br>
          <span>So, we will be missing on,</span>
          <span className={styles.text088}>types</span>
          <span> generated by the project and</span>
          <span className={styles.text090}>type-checking</span>
          <span>
            . Type-checking is one of the main up-side that we discussed at the start of this post,
            which helps in minimising the runtime errros.
          </span>
          <span className={styles.text092}>So, we need</span>
          <span className={styles.text093}>esbuild&apos;s</span>
          <span className={styles.text094}>transpile&apos;s performance and</span>
          <span className={styles.text095}>typescript&apos;s types</span>
          <span className={styles.text096}>and</span>
          <span className={styles.text097}>static-type-checking.</span>
        </p>
        <h1 className={styles.text099}>Custom Build Scripts</h1>
        <p className={styles.text100}>
          <span>I started to put together some custom scripts to achieve this.</span>
          <br></br>
          <span>A custom</span>
          <span className={styles.text104}>{' ' }build</span>
          <span>
            {' '}
            script that walks through all the packages at depth as 1. And builds the package using
            esbuild&apos;s node-api. And the <span className={styles.text097}>package.json</span> of each package.
          </span>
        </p>
        <iframe
          title="custom-script"
          src={`
          data:text/html;charset=utf-8,     <head>
          <base target='_blank' />
          </head>     
          <body>
          
          <script src="https://gist.github.com/JayaKrishnaNamburu/77582aa77b2ff623bbcfd0ae61e6d8dc.js"></script>
          </body>`}
          className={styles.iframe}
        ></iframe>
        <p className={styles.text106}>
          A Custom watcher to look for changes in packages, and rebuilding them.
        </p>
        <iframe
          title="custom-watcher"
          src="data:text/html;charset=utf-8,     &lt;head&gt;&lt;base target='_blank' /&gt;&lt;/head&gt;     &lt;body&gt;&lt;script src=&quot;https://gist.github.com/JayaKrishnaNamburu/ebf0b4bb7753affb0b4db9bab013882c.js&quot;&gt;&lt;/script&gt;     &lt;/body&gt;"
          className={styles.iframe1}
        ></iframe>
        <p className={styles.text107}>
          <span>and now configuring</span>
          <span className={styles.text109}>npm scripts</span>
          <span> to run</span>
          <span className={styles.text111}>{' '}typescript compiler</span>
          <span> to generate types and a static type checking.</span>
        </p>
        <iframe
          title="npm-scripts"
          src="data:text/html;charset=utf-8,     &lt;head&gt;&lt;base target='_blank' /&gt;&lt;/head&gt;     &lt;body&gt;&lt;script src=&quot;https://gist.github.com/JayaKrishnaNamburu/ffae981886b721db9c87a5ba88325503.js&quot;&gt;&lt;/script&gt;     &lt;/body&gt;"
          className={styles.iframe2}
        ></iframe>
        <p className={styles.text113}>
          <span>And here is the final result.</span>
          <br />
          <br></br>
          <span>
            - Packages transpiled using esbuild. And types are generated in parallel using lerna.
          </span>
          <br></br>
          <span>- All the packages are transpiled to</span>
          <span className={styles.text119}>es6</span>
          <span> and with</span>
          <span className={styles.text121}>cjs</span>
          <span>and</span>
          <span className={styles.text123}>esm</span>
          <span>
            formats. Transpiling till es6 is enough since, if the end users want to support a much
            lower syntax. The user&apos;s build systems can do that again.
          </span>
          <br></br>
          <span>Ok, let&apos;s talk about the results. It's clear that we are having an average of 
          <span className={styles.text057}>{' ' }5~6minutes{' '}</span>
            in our build time now.</span>
        </p>
        <img
          alt="placeholder"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e4ac09ac-d6de-4393-9e5c-298884624998/95256103-7d2e-47dd-8b8b-e9fd4b96cc5e?org_if_sml=1&w=800"
          className={styles.image2}
        />
        <p className={styles.text127}>
            PS: This may not be the best of the solutions in configuring a mono-repo with custom
            scripts. But hey, it works for us and saves half a time spent on transpiling the
            code-base.
          <br></br>
          <span>You can reach me out at</span>
          <a href="https://twitter.com/askjkrishna" target="_blank" rel="noreferrer noopener">
            <span className={styles.text131}> @askjkrishna</span>
          </a>
          <span className={styles.text132}></span>
        </p>
      </div>
    </div>
  )
}

export default EsBuild
