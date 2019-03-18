export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/main.esm.js',
      format: 'es'
    },
    {
      file: 'dist/main.cjs.js',
      format: 'cjs'
    },
  ]
};