Have we ever asked these questions to ourself :thining_face:

- Why did we start building websites ?
- How does the web pages in the past do even look ?
- How's the web on the present day looks like ?

Yes, these questions seem a bit strange right to someone. But when we look at the rate at which web-dev is increasing, there are many new dev's are coming on board. When started in 2016, i jumped on the hype train and started building with popular frameworks and libraries. But it took a long time for me to realise that we are heading into the very first thing which we swore to fulfil.

#### Why did we start building websites ?

To share data and information in an effective way, so every person over the internet can access it and get benefited from that.

#### How does the web in the past looks like ?

Just a bunch of **html + css + js** (the sequence is very important). Even today browsers follow the same sequence when loading webpages.

#### How's the web on the present day looks like ?

- A `index.html` file as a entry. (It still exists because we did not find a way to replace it with JS yet !!)
- For `css` we started using `css-in-js` which in return adds `js` to your bundles (yes, not in all the cases).
- And finally our favouriate step, `js` and `js` and more `js`.

---

**Toolchain**

The toolchain has changed a lot, i sometimes feel we are making them as complex as possible everyday. In initial days i used to spend most of my time in deciding

> If i should learn the library and framework or should i start learning the setup and tool chain process.

Let's explore how a present day toolchain looks like..

- Library of choice
- Bundler
- Transpiler
- Compiler (not all the time, but if you are using typescript with babel we end up having one for transpiling and one of compiling)
- Plugins for our **Transpiler**
- Plugins for our **Bundler**
- If you are using JSX, we need a seperate plugin to support that
- CSS-In-JS library and friends.
- Typescript / Flow for type-checking.
- Polyfills
- Code Formatters
- Linters
- Ok! State Managment and friends
- Everyone uses a service worker

We, definitely not going to ship into our _production_ bundles with all the things that mentioned above. But everything has it's significant impact.

> Is it a bad idea ?
> No, absloutely not !!
> PS: **snowpack** for the rescue for simplifying build process

Our development and applications are becoming complex than ever and so our toolchains also should. In the following series of posts i will share all the things that i learning. I will try to cover by findings on the following topics.

- Initial Bundle size and impact.
- Static and SSR.
- Handling images.
- Progressive Enhancement.
- Font's and Typography.
- Choosing Dependencies.

_I will update the links when a new post is up_