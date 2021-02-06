#!/usr/bin/env node

const path = require('path');
const glob = require('glob');
const fs = require('fs');

console.log('Copying GraphQL schemas...');

const projectRoot = path.join(__dirname, '..');
const srcDir = path.join(projectRoot, 'src');
const buildDir = path.join(projectRoot, 'build');

glob('**/*.gql', { cwd: srcDir }, (err, files) => {
  if (err) {
    console.error(err);
  }
  files.forEach((fileName) => {
    console.log('- ', fileName);
    fs.copyFileSync(path.join(srcDir, fileName), path.join(buildDir, fileName));
  });
});
