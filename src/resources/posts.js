export const posts = [
  {
    id: 7,
    heading: 'Web development, the past, present and the future !!',
    description: `The state of web-development has changed a lot in the last few years. 
    From using a simple html + css + js, we evolved into a collection of bundler, transpilers and some complex build steps.`,
    landing_image: `${require('../compressed/images/generic/ember_meetup.jpg')}`,
    markdown_file: 'web_past'
  },
  {
    id: 6,
    heading: `Why we need to contribute to opensource and how we can do it`,
    description: `A lot of effort goes into building and maintaining packages. Here is how we can be a part of one.`,
    landing_image: `https://images.unsplash.com/photo-1566568500004-fc65c6cbd230?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80`,
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
    landing_image: `${require('../compressed/images/generic/babel.jpg')}`,
    markdown_file: 'babel'
  },
  {
    id: 1,
    heading: 'Scaffolding a project using Lerna',
    description:
      'A tool for managing JavaScript projects with multiple packages.',
    external:
      'https://medium.com/@askjkrishna/scaffolding-a-project-using-lerna-and-lerna-changelog-cad6156f6f36'
  },
  {
    id: 2,
    heading: 'Building bots using Google Dialogue Flow',
    description:
      'JavaScript is used in building Web, Hybrid and even Desktop Applications. Here is a take on building bots',
    external:
      'https://medium.com/gobeyond-ai/beginners-guide-to-build-a-bot-using-javascript-65179c408751'
  },
  {
    id: 3,
    heading: 'Payment Gateway Integration in Android & Web',
    description:
      'Integrating CCAvenue paymnet gateway with mobile and web applications',
    external:
      'https://medium.com/@askjkrishna/payment-gateway-integration-in-android-web-d1cea2eaed48'
  }
];
