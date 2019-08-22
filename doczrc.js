import * as path from 'path'
import pkg from './package.json'

const SRC = path.resolve(__dirname, 'src')

export default {
  title: 'React Utilities Library',
  description: pkg.description,
  version: pkg.version,
  base: '/',
  src: './',
  dest: '/docs',
  menu: ['Getting Started', 'Components', 'FAQs'],
  onCreateWebpackChain: config => {
    config.resolve.alias.set('@components', `${SRC}`)

    return config
  }
}
