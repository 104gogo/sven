#!/usr/bin/env node

const { spawnSync } = require('child_process');

const args = process.argv.slice(2);

spawnSync(
  'node',
  [require.resolve('../src/index.js'), ...args],
  { stdio: 'inherit' }
);
