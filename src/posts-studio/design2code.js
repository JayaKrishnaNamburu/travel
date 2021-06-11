import React from 'react'

import Divider from './divider'
import Quote from './quote'
import styles from './design2code.module.css'

const Design2Code = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <h1 className={styles.text}>
          Bridging the gap between Design and Code
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </h1>
        <span className={styles.text01}>20-05-2021</span>
        <Divider></Divider>
        <span className={styles.text02}></span>
        <div className={styles.container2}>
          <img
            alt="design"
            src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1000"
            className={styles.image}
          />
          <img
            alt="code"
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGNvZGV8ZW58MHx8fHwxNjIxMDczMzg4&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1000"
            className={styles.image1}
          />
        </div>
        <p className={styles.text03}>
          <span>
            Often in product development, majority of time is spent between design and then
            converting those designs to code. Sometimes call this process as
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className={styles.text05}>handoff</span>
          <span>
            , but over the time we might be spending more time in converting these designs to code
            than the actual business logic itself. And considering these designs again iterate on UI
            and UX reviews.
          </span>
        </p>
        <p className={styles.text07}>
          In the recent years, there is a huge growth in tools that aims to narrow the handoff time.
          But only a few are interesting, because often they end up transitioning into just a design
          tool or just a deployment tool. Since the code-generation part is tuff and often it&apos;s
          quite time consuming to maintain a user friendly code. So, here are the two categories
          that we often come-across
        </p>
        <p className={styles.text08}>
          <span></span>
          <span className={styles.text10}>Full-Blown Design tool,</span>
          <span>
            {' '}
            These can be used to design in free-hand and pay less attention to the semantics.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span className={styles.text15}>End to End</span>
          <span> systems, which provide designing and content-management at the same time.</span>
        </p>
        <p className={styles.text17}>
          <span>
            But the beauty of the web-development is we can build a single application in many
            different ways. And we configure our applications based on our requirements. So, here
            are some use-cases, that i personally see a short-coming with the state of no-code
            platforms.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>- Custom Application Setup</span>
          <br></br>
          <span>- API management</span>
          <br></br>
          <span>- Adding custom scripts or custom code</span>
          <br></br>
          <span>- CMS management</span>
          <br></br>
          <span>- Ownership over data</span>
          <br></br>
          <span>- Reusing the design in some other projects just with code.</span>
        </p>
        <span className={styles.text33}>
          <span>
            These are some of the use-cases, where we often try to
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className={styles.text35}>eject</span>
          <span>
            {' '}
            out of the platforms that we are designing / building the application. And then we need
            to fiddle around with the code.
          </span>
        </span>
        <div className={styles.container3}>
          <img
            alt="graphic-designer"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e4ac09ac-d6de-4393-9e5c-298884624998/00b8116d-0d2e-4c45-8ecf-62c9618190e2?org_if_sml=1&w=1200"
            className={styles.image2}
          />
          <p className={styles.text37}>
            <span>
              This has always been the priority while designing our
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://github.com/teleporthq/teleport-code-generators"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span>generators</span>
            </a>
            <span>
              . Making the code-readable and mostly building them with the concept of
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className={styles.text41}>&quot;</span>
            <span className={styles.text42}>How a developer would write this&quot;</span>
            <span className={styles.text43}>.</span>
            <br></br>
            <span>
              We have been experimenting on the ways to support users to take advantages of our
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a href="https://play.teleporthq.io/" target="_blank" rel="noreferrer noopener">
              <span>
                studio
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </a>
            <span>
              for designing and still be able to write their own code or to hook our system into
              their development process.
            </span>
          </p>
        </div>
        <div className={styles.container4}>
          <div className={styles.container5}>
            <Quote text="Imagine a workflow where, designers can deliver their initial designs. And developers can just clone the designs and start writing business logics on top of it. And can just update the designs whenever they undergo a change."></Quote>
          </div>
        </div>
        <p className={styles.text48}>
          <span>
            Does that sounds like we should still keep
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className={styles.text50}>designing</span>
          <span>
            {' '}
            and
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className={styles.text52}>developing</span>
          <span> applications.</span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            I have been looking around and working in no-code tooling for more than a year now and
            most of the time trying to achieve a tool that can do this.
          </span>
          <br></br>
          <br></br>
          <br></br>
          <span>
            Let me introduce you to &apos;teleport-cli&apos;, where we achieve to bridge this gap.
            Any designer can just design the system and developers can
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className={styles.text62}>
            sync
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            with the designs and continue their development. The
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className={styles.text64}>
            cli
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            {' '}
            is fully under beta, and under active development. Please let me know if this idea
            excites you and let us talk :)
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            For more details, about the cli you can check the readme
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://github.com/teleporthq/teleport-code-generators/tree/feat/cli-beta/packages/teleport-cli"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>here</span>
          </a>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span></span>
          <br></br>
          <span></span>
          <span></span>
        </p>
        <span className={styles.text76}>
          Fun-fact, this blog is completely written using our studio at play.teleporthq.io. And
          components are synced to my profile in GitHub.
        </span>
      </div>
    </div>
  )
}

export default Design2Code
