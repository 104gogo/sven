#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const inquirer = require('inquirer');

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

  try {
    const { package } = await inquirer.prompt(list);

    shell.exec(`lerna run build ${package === 'all' ? '' : `--scope ${package}`}`);
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();

