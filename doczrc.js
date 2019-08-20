import pkg from './package.json'

// theme reference: https://github.com/pedronauck/docz/tree/master/packages/docz-theme-default
export default {
  title: 'React Utilities Library',
  description: pkg.description,
  version: pkg.version,
  dest: '/docs',
  hashRouter: 'true',
  base: '/',
  codeSandbox: false,
  htmlContext: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Rubik:400,400i,700,700i&display=swap'
        }
      ]
    }
  },
  themeConfig: {
    showPlaygroundEditor: true,
    colors: {
      primary: '#009090'
    },
    styles: {
      body: { fontFamily: '"Rubik", sans-serif' },
      h1: { fontFamily: '"Rubik", sans-serif' },
      h2: { fontFamily: '"Rubik", sans-serif' }
    }
  },
  menu: ['Getting Started', 'Components', 'FAQs']
}
