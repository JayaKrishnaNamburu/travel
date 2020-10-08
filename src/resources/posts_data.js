export const posts = [
  // {
  //   id: `package_json`,
  //   heading: `Understanding package.json`,
  //   date: 1600098998728,
  //   image: `${require('../compressed/images/generic/package.jpg')}`,
  //   caption: `Image is from Unsplash by @hudsoncrafted`,
  //   description: `package.json plays a key role in defining details about the package we are shipping. In this post, we will try to explore what are the fields in it and how we can make the best use of them`,
  //   // landing_image: `https://images.unsplash.com/photo-1546864831-f1ca1eaf4e2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80`,
  //   markdown_file: 'package_json'
  // },
  {
    id: `remote_life`,
    heading: `My open-source journey and working remotely`,
    description: `Opensource helped me in learning many things and at the same time gave an oppurtunity to land in my first remote job.`,
    date: 1599735249720,
    image: `${require('../compressed/images/generic/remote_background.jpg')}`,
    caption: `Image from Unsplash, by @_ferh97`,
    markdown_file: `remote`
  },
  {
    id: 'dependencies',
    heading: `The state of dependency managment with bundlers and cdn's`,
    description: `I am always interested in how these cdn's work and how they are able to do everthing on the fly. But when to do the same
    we need a whole lot of setup. I recently implemented one for personal use, and here are my findings along the path`,
    image: `${require('../compressed/images/generic/package_background.jpeg')}`,
    caption: `Image from unspalsh `,
    markdown_file: 'dependencies'
  },
  {
    id: `web_past`,
    heading: 'Web development, the past, present and the future !!',
    description: `The state of web-development has changed a lot in the last few years. 
    From using a simple html + css + js, we evolved into a collection of bundler, transpilers and some complex build steps.`,
    markdown_file: 'web_past'
  },
  {
    id: `package`,
    heading: `Why we need to contribute to opensource and how we can do it`,
    description: `A lot of effort goes into building and maintaining packages. Here is how we can be a part of one.`,
    markdown_file: 'package'
  },
  {
    id: `babel`,
    heading: 'Creating custom Babel plugins',
    description:
      'A talk on creating babel plugins and understanding AST. (Abstract Syntax Trees)',
    markdown_file: 'babel'
  },
  {
    id: `lerna`,
    heading: 'Scaffolding a project using lerna and lerna-changelog',
    description:
      'Lerna is a utility tool for managing monorepos, for creating, publishing and for maintaing changelog.',
    markdown_file: 'lerna'
  }
];
