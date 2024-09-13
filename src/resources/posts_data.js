export const posts = [
  {
    id: 'linear-gradient-interpolation',
    heading:
      'Navigating CSS Gradient Syntax: From confusion to unofficial syntax',
    description:
      'This post explains how I built an unofficial syntax to parse linear-gradient with modern color interpolation methods. It details the challenges with existing specifications and the practical solutions developed.',
    markdown_file: 'linear-gradient-interpolation',
    og: `og-linear-gradient-interpolation.svg`,
    date: 1726205737079
  },
  {
    id: 'building-packages-for-runtimes',
    heading: 'Building runtime aware JavaScript packages',
    description:
      'Building javascript packages for respective runtimes, for better compatability and cross-platform usage.',
    markdown_file: 'building-packages-for-runtimes',
    image: 'https://images.unsplash.com/photo-1546864831-f1ca1eaf4e2a',
    og: `og-runtime-javascript-package.svg`,
    date: 1678481219000
  },
  {
    id: 'import-maps-nodejs',
    heading: 'Importmaps in NodeJS with custom loaders',
    description:
      'A simple experiment with NodeJS and custom loader to use importmaps and modules from CDN',
    markdown_file: 'importmaps-nodejs',
    og: `og-import-map.svg`,
    date: 1678481219000
  },
  {
    id: 'esbuild',
    heading: `Reducing build time by 50% for a Typescript Monorepo`,
    description: `As, the projects starts to grow, monorepo build times are taking a massive hit. Here is a succesful attempt in reducing our build time by 50%`,
    redirect: `esbuild_monorepos`
  },
  // {
  //   id: `design2code`,
  //   heading: `Bridging the gap between design and code.`,
  //   description: `In a product development, majority of time is spent between design and then
  //   converting those designs to code`,
  //   redirect: `design2code`
  // },
  {
    id: `remote_life`,
    heading: `My open-source journey and working remotely`,
    description: `Opensource helped me in learning many things and at the same time gave an oppurtunity to land in my first remote job.`,
    date: 1599735249720,
    image: `${require('../compressed/generic/remote_background.jpg')}`,
    og: `og-remote-life.svg`,
    caption: `Image from Unsplash, by @_ferh97`,
    markdown_file: `remote`
  },
  {
    id: 'dependencies',
    heading: `Module cdn's and workflows`,
    description: `Exploring some es-module based CDN's`,
    image: `${require('../compressed/generic/package_background.jpeg')}`,
    caption: `Image from unspalsh `,
    markdown_file: 'dependencies',
    og: `og-module-cdns.svg`
  },
  {
    id: `web_past`,
    heading: 'Web development, the past, present and the future !!',
    description: `The state of web-development has changed a lot in the last few years.
    From using a simple html + css + js, we evolved into a collection of bundler, transpilers and some complex build steps.`,
    markdown_file: 'web_past',
    og: `og-contribute-oss.svg`
  },
  {
    id: `package`,
    heading: `Why contribute to opensource?`,
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
    markdown_file: 'lerna',
    og: `og-lerna.svg`
  }
];
