const { merge } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  siteMetadata: {
    title: 'React Utilities Library',
    description: 'React Utilities Library',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/valisumurduc/Sites/react-utilities-library/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        ignore: [{}, {}, {}, {}, {}],
        public: '/public',
        dest: '/docs',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'React Utilities Library',
        description: 'React Utilities Library',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        themeConfig: {},
        docgenConfig: {},
        menu: ['Getting Started', 'Components', 'FAQs'],
        mdPlugins: [],
        hastPlugins: [],
        paths: {
          root: '/Users/valisumurduc/Sites/react-utilities-library',
          templates:
            '/Users/valisumurduc/Sites/react-utilities-library/node_modules/docz-core/dist/templates',
          packageJson:
            '/Users/valisumurduc/Sites/react-utilities-library/package.json',
          docz: '/Users/valisumurduc/Sites/react-utilities-library/.docz',
          cache:
            '/Users/valisumurduc/Sites/react-utilities-library/.docz/.cache',
          app: '/Users/valisumurduc/Sites/react-utilities-library/.docz/app',
          appPublic:
            '/Users/valisumurduc/Sites/react-utilities-library/.docz/public',
          appNodeModules:
            '/Users/valisumurduc/Sites/react-utilities-library/node_modules',
          appPackageJson:
            '/Users/valisumurduc/Sites/react-utilities-library/package.json',
          appYarnLock:
            '/Users/valisumurduc/Sites/react-utilities-library/node_modules/docz-core/yarn.lock',
          ownNodeModules:
            '/Users/valisumurduc/Sites/react-utilities-library/node_modules/docz-core/node_modules',
          gatsbyConfig:
            '/Users/valisumurduc/Sites/react-utilities-library/gatsby-config.js',
          gatsbyBrowser:
            '/Users/valisumurduc/Sites/react-utilities-library/gatsby-browser.js',
          gatsbyNode:
            '/Users/valisumurduc/Sites/react-utilities-library/gatsby-node.js',
          gatsbySSR:
            '/Users/valisumurduc/Sites/react-utilities-library/gatsby-ssr.js',
          importsJs:
            '/Users/valisumurduc/Sites/react-utilities-library/.docz/app/imports.js',
          rootJs:
            '/Users/valisumurduc/Sites/react-utilities-library/.docz/app/root.jsx',
          indexJs:
            '/Users/valisumurduc/Sites/react-utilities-library/.docz/app/index.jsx',
          indexHtml:
            '/Users/valisumurduc/Sites/react-utilities-library/.docz/app/index.html',
          db:
            '/Users/valisumurduc/Sites/react-utilities-library/.docz/app/db.json',
        },
        version: '1.0.0',
      },
    },
  ],
}

module.exports = merge(config, custom)