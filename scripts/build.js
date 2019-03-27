#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const { spawn } = require('child_process');

(async () => {
  const cwd = process.cwd();
  const files = fs.readdirSync(path.join(cwd, 'packages'));
  const packages = files.filter(file => !file.startsWith('.'));

  const list = [
    {
      type: 'list',
      name: 'package',
      message: 'What package you want to build?',
      choices: [
        'all',
        ...packages,
      ]
    },
  ];

  const { package } = await inquirer.prompt(list);

  spawn(
    'lerna',
    package !== 'all' ? ['run', 'build', '--scope', `${package}`] : ['run', 'build'],
    { stdio: 'inherit' }
  );
})();

