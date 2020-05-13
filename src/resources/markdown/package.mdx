### Why we need to build or publish one?

Javascript eco-system is huge. When we need to solve our problems, we often do a search and find solutions.

But if there is not any, its good to share with the solution that we come up with. It makes the life of others easy who helped in making ours at first.

### What motivates me to contribute to open-source

- The IDE's [VSCode](https://github.com/microsoft/vscode), [Atom](https://github.com/atom/atom)
- Exising popular libraries or frameworks - [Babel](https://github.com/babel/babel), [React](https://github.com/facebook/react), [Angular](https://github.com/angular/angular), [Vue](https://github.com/vuejs/vue), [Stencil](https://github.com/ionic-team/stencil), [Preact](https://github.com/preactjs/preact), [Redux](https://github.com/reduxjs/redux/blob/master/LICENSE.md), [Vuex](https://github.com/vuejs/vuex), [NextJS](https://github.com/zeit/next.js/), [NuxtJS](https://github.com/nuxt/nuxt.js/blob/dev/LICENSE), [Svelte](https://github.com/sveltejs/svelte/blob/master/LICENSE)
- Bundlers - [Webpack](https://github.com/webpack/webpack/blob/master/LICENSE), [Rollup](https://github.com/rollup/rollup/blob/master/LICENSE.md), [Parcel](https://github.com/parcel-bundler/parcel/blob/master/LICENSE)
- Css-in-JS - [Glamour](https://github.com/threepointone/glamor/blob/master/LICENSE), [Styled-Components](https://github.com/styled-components/styled-components/blob/master/LICENSE), [Emotion](https://github.com/emotion-js/emotion/blob/master/LICENSE)
- Design Systems and Tools - [Antd](https://github.com/ant-design/ant-design/blob/master/LICENSE), [Storybook](https://github.com/storybookjs/storybook/), [Styled System](https://github.com/styled-system/styled-system), [Styleguidist](https://github.com/styleguidist/react-styleguidist)
- Back-End Frameworks - [NestJS](https://github.com/nestjs/nest/blob/master/LICENSE), [Serverless](https://github.com/serverless/serverless/blob/master/LICENSE.txt)
- Tools for CI/CD - [Travis](https://travis-ci.org/)
- Testing tools - [Jest](https://github.com/facebook/jest), [Testing Library](https://github.com/testing-library/react-testing-library)
- Utility tools - [Lerna](https://github.com/lerna/lerna), [Verdaccio](https://github.com/verdaccio/verdaccio)

And there is an endless list of individual projects and tools built by individuals.

Yes, I agree a few of these are backed up by big companies but aren't we making a living out of them?

---

### Questions time !!

Is it really easy for many projects to get a huge amount in funds at the beginning?

How they are managing their finances when they are building and opensourcing everything?

---

### Stories or Ideologies that inspire

- There are individuals who quit their day jobs, because of the fear they can't respond back or fix a big ASAP. As many projects around the world rely on them.

- If you want a fix or a new feature. Along with raising a request(issue), give a try to fix/build it. Maintainers are always happy to encourage and help people who are willing to contribute.

If I am right, the first one is from [Henry Zhu](https://twitter.com/left_pad) and the second is from [Sara Vieria](https://twitter.com/nikkitaftw)

---

### Ways in which we can contribute to the eco-system

There are a couple of ways in which we can support the eco-system.

- By building and open-sourcing packages.
- Donating and Backing repositories and maintainers
- Fixing existing issues (at least on the repositories which we use in our daily development).
- Helping in writing documentation and correcting typos.
- Reviewing pull requests and mentoring the newbies to opensource. [Coding Coach](https://codingcoach.io/)
- Helping in setting up the infrastructure/architecture for the project.
- Moderating the community, more like consolidating the issues and the PRs and other _chore_ related things.

---

> [Maintainers Anonymus](https://maintainersanonymous.com/) is a podcast hosted by [Henry Zhu](https://twitter.com/left_pad) to know more about maintainers.

---

### How to build one?

After experimenting with different types of setup's, I personally prefer going ahead with typescript. As it is easy to configure. We can ideally divide this into two stages.

- Building the library itself.
- Maintaining the repository.

Let's look into the folder structure for the setup for building

```
Readme.md
src -
	| index.ts
tsconfig.esm.json
tsconfig.cjs.json
__tests__
package.json
```

- `package.json` is for mentioning our `dependencies` and `devDependencies` and `entry` of the project.
- `tsconfig.esm.json` is for compiling the typescript code target latest environments
- `tsconfig.cjs.json` is for targetting the old environments.
- `src/index.ts` is where our code relies on.

### package.json

This plays a very key role in the package, so let us look a little deeper into attributes.

```json
{
  "name": "",
  "version": "",
  "description": "",
  "author": "",
  "homepage": "",
  "license": "",
  "main": "",
  "module": "",
  "types": "",
  "repository": "",
  "bugs": {
    "url": ""
  },
  "scripts": {},
  "dependencies": {},
  "devDependencies": {}
}
```

Few things are self-explanatory, but let us look into the other.

- _version_, plays a very important role. The best way to follow versioning is by adapting [Semver](https://semver.org/)
- _main_, points out to the entry of the package. Usually, it is pointed to the cjs bundle `index.js` file.
- _module_ points to the `esm` bundle of the file. [Pika](https://www.pika.dev/) is a powerful package manager, which takes advantage of this.
- _types_ points to the `typings` file. Types file helps in adding typings when we use the package.
- _dependencies_ deals with all the packages that we are using in the building.
- _devDependicies_ deals with all the packages that we use at the time of development. These are not bundled into the package. [Bundlephobia](https://bundlephobia.com/) helps in understanding the space occupied by an individual package in the end result.
- _peerDependencies_, when we want our repository to depend on another repository to work with. Mostly used in developing in UI related libraries as the frameworks depend on few other to work.

---

### Changelog Managment

Changelog plays a major role in keeping track of all the changes and releases that are going in the package.
[Lerna Changelog](https://github.com/lerna/lerna-changelog) makes it easy to manage one.

---

### Common pitfalls to look out !!

- _Versioning_ plays a very major role, As tilde(~) installs only patches, (^) cap installs latest patches and minor fixes.

If the user is using _tilde_ and we bundle all fixes and do a version bump and release. The current user will not get the fixes as (~) only pulls patches.

- _Missing Dependencies_, when we are using a package in our development which is not listed in our `package.json`.

If the same package is used by `devDependencies`, the execution does not throw any error as in local. This is because it resolves from the `node_modules` since its the single source of truth for the dependencies.

This can be eliminated by using [Pika CDN](https://www.pika.dev/cdn) to test the bundles against the PR's and install them independently and verify.

Here are some of my views on opensource and how to get started to be a part of it.
