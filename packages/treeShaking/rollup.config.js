import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'es/index.esm.js',
      format: 'esm',
    },
    {
      file: 'lib/index.cjs.js',
      format: 'cjs',
    },
  ],
  plugins: [
    resolve(),
    babel(),
  ]
};