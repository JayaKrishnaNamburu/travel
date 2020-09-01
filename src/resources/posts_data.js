export const posts = [
  {
    id: 8,
    heading: `The state of dependency managment with bundlers and cdn's`,
    description: `I am always interested in how these cdn's work and how they are able to do everthing on the fly. But when to do the same
    we need a whole lot of setup. I recently implemented one for personal use, and here are my findings along the path`,
    landing_image: `https://images.unsplash.com/photo-1546864831-f1ca1eaf4e2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80`,
    markdown_file: 'dependencies'
  },
  {
    id: 7,
    heading: 'Web development, the past, present and the future !!',
    description: `The state of web-development has changed a lot in the last few years. 
    From using a simple html + css + js, we evolved into a collection of bundler, transpilers and some complex build steps.`,
    markdown_file: 'web_past'
  },
  {
    id: 6,
    heading: `Why we need to contribute to opensource and how we can do it`,
    description: `A lot of effort goes into building and maintaining packages. Here is how we can be a part of one.`,
    markdown_file: 'package'
  },
  // {
  //   id: 5,
  //   heading: 'Maintaining Monorepos using Lerna and Verdaccio',
  //   description:
  //     'A talk on maintaining monorepos using Lerna and Verdaccio. The combination of both helps in shipping packages with confidence',
  //   landing_image:
  //     'https://images.unsplash.com/photo-1546864831-f1ca1eaf4e2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
  //   markdown_file: 'monorepo'
  // },
  {
    id: 4,
    heading: 'Creating custom Babel plugins',
    description:
      'A talk on creating babel plugins and understanding AST. (Abstract Syntax Trees)',
    markdown_file: 'babel'
  },
  {
    id: 1,
    heading: 'Scaffolding a project using lerna and lerna-changelog',
    description:
      'A tool for managing JavaScript projects with multiple packages.',
    markdown_file: 'lerna'
  }
];
