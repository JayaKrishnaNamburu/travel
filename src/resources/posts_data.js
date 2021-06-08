export const posts = [
  // {
  //   id: `handling_images`,
  //   heading: `Hadling images on the web`,
  //   description: `Images takes around 50% of the size for web-app's on an average. And if they are not handled properly,
  //   they leave a scar on the end users experience.`,
  //   date:1603817463544,
  //   image: `${require('../compressed/images/generic/Images.png')}`,
  //   caption: `Gallery view from this blog`,
  //   markdown_file: `images`
  // },
  {
    id: `design2code`,
    heading: `Bridging the gap between design and code.`,
    description: `In a product development, majority of time is spent between design and then
    converting those designs to code`,
    redirect: `design2code`
  },
  {
    id: `remote_life`,
    heading: `My open-source journey and working remotely`,
    description: `Opensource helped me in learning many things and at the same time gave an oppurtunity to land in my first remote job.`,
    date: 1599735249720,
    image: `${require('../compressed/images/generic/remote_background.jpg')}`,
    caption: `Image from Unsplash, by @_ferh97`,
    markdown_file: `remote`,
  },
  {
    id: 'dependencies',
    heading: `State of esm-cdn's and development workflows`,
    description: `Developer tooling is one of my favorite things to work with. And we are at the intersecion point in JS developer tooling
    eco-system, where we are seeing a lot of buzz around unbundling development.`,
    image: `${require('../compressed/images/generic/package_background.jpeg')}`,
    caption: `Image from unspalsh `,
    markdown_file: 'dependencies',
  },
  {
    id: `web_past`,
    heading: 'Web development, the past, present and the future !!',
    description: `The state of web-development has changed a lot in the last few years. 
    From using a simple html + css + js, we evolved into a collection of bundler, transpilers and some complex build steps.`,
    markdown_file: 'web_past',
  },
  {
    id: `package`,
    heading: `Why we need to contribute to opensource?`,
    description: `A lot of effort goes into building and maintaining packages. Here is how we can be a part of one.`,
    markdown_file: 'package',
  },
  {
    id: `babel`,
    heading: 'Creating custom Babel plugins',
    description: 'A talk on creating babel plugins and understanding AST. (Abstract Syntax Trees)',
    markdown_file: 'babel',
  },
  {
    id: `lerna`,
    heading: 'Scaffolding a project using lerna and lerna-changelog',
    description:
      'Lerna is a utility tool for managing monorepos, for creating, publishing and for maintaing changelog.',
    markdown_file: 'lerna',
  },
]
