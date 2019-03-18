const build = require('./build.js');

const cwd = process.cwd();

async function run() {
  try {
    await build(cwd);
  } catch (e) {
    console.log(e);
    process.exit(0);
  }
}

run();
