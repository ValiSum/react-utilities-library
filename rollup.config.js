import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import babel from 'rollup-plugin-babel'
import minify from 'rollup-plugin-babel-minify'
import svgr from '@svgr/rollup'

import fs from 'fs'
import path from 'path'

import pkg from './package.json'

const folderPath = './src/'

const isFolder = name => !fs.lstatSync(name).isFile()

const componentsInput = fs.readdirSync(folderPath).reduce((acc, fileName) => {
  if (isFolder(path.join(folderPath, fileName))) {
    acc[fileName] = path.join(folderPath, fileName, 'index.js')
  }
  return acc
}, {})

const external = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {})
]

const plugins = [
  svgr(),
  babel({
    babelrc: false,
    presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
    exclude: 'node_modules/**'
  }),
  resolve(),
  commonjs(),
  sourceMaps(),
  minify()
]

export default [
  {
    input: 'src/index.js',
    output: {
      file: pkg.main,
      name: 'react-utilities-library',
      format: 'umd',
      sourcemap: true,
      globals: {
        'prop-types': 'PropTypes',
        'styled-components': 'styled',
        react: 'React',
        'react-dom': 'ReactDOM',
        '@fortawesome/free-regular-svg-icons': 'freeRegularSvgIcons',
        '@fortawesome/free-solid-svg-icons': 'freeSolidSvgIcons',
        '@fortawesome/react-fontawesome': 'reactFontawesome'
      }
    },
    external,
    plugins
  },
  {
    input: {
      index: 'src/index.js',
      ...componentsInput
    },
    output: {
      dir: 'lib',
      format: 'esm',
      sourcemap: true
    },
    external,
    plugins
  }
]
