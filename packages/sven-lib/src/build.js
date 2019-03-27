const { rollup } = require('rollup');
const getRollupConfig = require('./getRollupConfig.js');

async function build(cwd) {
  const { output, ...input } = getRollupConfig(cwd);

  for (let config of output) {
    const bundle = await rollup(input);
    await bundle.write(config);
  }
}

module.exports = build;


