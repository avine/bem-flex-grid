/*
 * Generate `./src/index.html` from `./README.md`.
 */
import { readFileSync, watchFile, writeFileSync } from 'fs';
import MarkdownIt from 'markdown-it';
import { join } from 'path';

const md = new MarkdownIt();

const templatePath = join(__dirname, './readme.template.html');
const sourcePath = join(__dirname, '../', 'README.md');
const targetPath = join(__dirname, '../', 'src/index.html');

const template = readFileSync(templatePath, { encoding: 'utf8' });

const updateFile = () => {
  const markdown = readFileSync(sourcePath, { encoding: 'utf8' });
  const html = template.replace('{{markdown}}', md.render(markdown));

  writeFileSync(targetPath, html, { encoding: 'utf8' });
  console.log('Updated:', targetPath); // tslint:disable-line:no-console
};

updateFile();

if (process.argv[2] === 'watch') {
  watchFile(sourcePath, updateFile);
  console.log('Watching:', sourcePath); // tslint:disable-line:no-console
}
