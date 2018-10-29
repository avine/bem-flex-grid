/*
 * Generate `./src/index.html` from `./README.md`.
 */

const Fs = require('fs');
const Path = require('path');
const MarkdownIt = require('markdown-it');

const md = new MarkdownIt();

const templatePath = Path.join(__dirname, './index-template.html');
const sourcePath = Path.join(__dirname, './README.md');
const targetPath = Path.join(__dirname, './src/index.html');

const template = Fs.readFileSync(templatePath, { encoding: 'utf-8' });

const updateFile = () => {
  const markdown = Fs.readFileSync(sourcePath, { encoding: 'utf-8' });
  const html = template.replace('{{markdown}}', md.render(markdown));

  Fs.writeFileSync(targetPath, html, { encoding: 'utf-8' });
  console.log('Updating:', targetPath);
};

updateFile();

if (process.argv[2] === 'watch') {
  Fs.watchFile(sourcePath, updateFile);
  console.log('watching:', sourcePath);
}
