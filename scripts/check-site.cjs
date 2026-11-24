const { existsSync } = require('node:fs');
const { join } = require('node:path');

const requiredFiles = [
  'index.html',
  'projects.html',
  'styles/style.css',
  'js/main.js',
  'js/projects-data.js'
];

const missingFiles = requiredFiles.filter(file => !existsSync(join(__dirname, '..', file)));

if (missingFiles.length) {
  console.error(`Build failed. Missing required site files:\n${missingFiles.join('\n')}`);
  process.exitCode = 1;
} else {
  console.log('Static site checks passed.');
}
