const path = require('path');
const babel = require('rollup-plugin-babel');
const getBabelConfig = require('./getBabelConfig.js');

function getRollupConfig(cwd) {
  const { presets, plugins } = getBabelConfig();

  return {
    input: path.join(cwd, 'src', 'index.js'),
    output: [
      {
        file: path.join(cwd, 'dist', 'main.esm.js'),
        format: 'es'
      },
      {
        file: path.join(cwd, 'dist', 'main.cjs.js'),
        format: 'cjs'
      },
    ],
    plugins: [
      babel({
        babelrc: false,
		    presets,
		    plugins,
      }),
    ],
  };
}

module.exports = getRollupConfig;


