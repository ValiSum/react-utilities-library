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
        root:
          '/home/vsumurduc/Documents/workspace/react/react-utilities-library/.docz',
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
        port: 3003,
        p: 3000,
        separator: '-',
        themeConfig: {},
        docgenConfig: {},
        menu: ['Getting Started', 'Components', 'FAQs'],
        mdPlugins: [],
        hastPlugins: [],
        paths: {
          root:
            '/home/vsumurduc/Documents/workspace/react/react-utilities-library',
          templates:
            '/home/vsumurduc/Documents/workspace/react/react-utilities-library/node_modules/docz-core/dist/templates',
          packageJson:
            '/home/vsumurduc/Documents/workspace/react/react-utilities-library/package.json',
          docz:
            '/home/vsumurduc/Documents/workspace/react/react-utilities-library/.docz',
          cache:
            '/home/vsumurduc/Documents/workspace/react/react-utilities-library/.docz/.cache',
          app:
            '/home/vsumurduc/Documents/workspace/react/react-utilities-library/.docz/app',
          appPublic:
            '/home/vsumurduc/Documents/workspace/react/react-utilities-library/.docz/public',
          appNodeModules:
            '/home/vsumurduc/Documents/workspace/react/react-utilities-library/node_modules',
          appPackageJson:
            '/home/vsumurduc/Documents/workspace/react/react-utilities-library/package.json',
          appYarnLock:
            '/home/vsumurduc/Documents/workspace/react/react-utilities-library/node_modules/docz-core/yarn.lock',
          ownNodeModules:
            '/home/vsumurduc/Documents/workspace/react/react-utilities-library/node_modules/docz-core/node_modules',
          gatsbyConfig:
            '/home/vsumurduc/Documents/workspace/react/react-utilities-library/gatsby-config.js',
          gatsbyBrowser:
            '/home/vsumurduc/Documents/workspace/react/react-utilities-library/gatsby-browser.js',
          gatsbyNode:
            '/home/vsumurduc/Documents/workspace/react/react-utilities-library/gatsby-node.js',
          gatsbySSR:
            '/home/vsumurduc/Documents/workspace/react/react-utilities-library/gatsby-ssr.js',
          importsJs:
            '/home/vsumurduc/Documents/workspace/react/react-utilities-library/.docz/app/imports.js',
          rootJs:
            '/home/vsumurduc/Documents/workspace/react/react-utilities-library/.docz/app/root.jsx',
          indexJs:
            '/home/vsumurduc/Documents/workspace/react/react-utilities-library/.docz/app/index.jsx',
          indexHtml:
            '/home/vsumurduc/Documents/workspace/react/react-utilities-library/.docz/app/index.html',
          db:
            '/home/vsumurduc/Documents/workspace/react/react-utilities-library/.docz/app/db.json',
        },
        version: '1.0.0',
      },
    },
  ],
}

module.exports = merge(config, custom)
