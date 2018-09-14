/**
 * Run this script (using npm script: `npm run md-to-html`) each time you change the file `README.md`
 */

const Fs = require('fs');
const Path = require('path');

const markdown = Fs.readFileSync(Path.join(__dirname, './README.md'), { encoding: 'utf-8' });

const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

const html = `<!DOCTYPE html>
<html lang="en" id="demo-index">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Bem Flex Grid</title>

  <link rel="shortcut icon" href="favicon.ico">
  <link rel="stylesheet" href="../node_modules/primer-markdown/build/build.css">
</head>
<body class="markdown-body">

${md.render(markdown)}
</body>
</html>`;

Fs.writeFileSync(Path.join(__dirname, './src/introduction.html'), html, { encoding: 'utf-8' });
