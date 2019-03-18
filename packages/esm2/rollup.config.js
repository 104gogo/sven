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
  ]
};