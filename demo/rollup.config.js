import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue2'
import {resolve} from 'path'

export default {
  entry: resolve(__dirname, 'index.js'),
  dest: resolve(__dirname, 'dist/demo.iife.js'),
  format: 'iife',
  moduleName: 'App',
  plugins: [
    vue(),
    babel({
      babelrc: false,
      externalHelpers: false,
      exclude: 'node_modules/**'
    })
  ],
  onwarn (err) {
    if (err) {
      if (err.code && err.code !== 'UNRESOLVED_IMPORT') {
        console.log(err.code, err.message)
      }
    }
  }
}
