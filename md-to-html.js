/**
 * Run this script using npm script: `npm run md-to-html` each time you change the file `README.md`.
 * To run this script in watch mode, use: `npm run md-to-html watch`.
 */

const Fs = require('fs');
const Path = require('path');
const MarkdownIt = require('markdown-it');

const md = new MarkdownIt();

const sourcePath = Path.join(__dirname, './README.md');
const targetPath = Path.join(__dirname, './src/introduction.html');

const mdToHtml = () => {
  const markdown = Fs.readFileSync(sourcePath, { encoding: 'utf-8' });

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Bem Flex Grid</title>

  <link rel="shortcut icon" href="favicon.ico">

  <link rel="stylesheet" href="../node_modules/primer-markdown/build/build.css">

  <link rel="stylesheet" href="../node_modules/prismjs/themes/prism.css">
  <script src="../node_modules/prismjs/prism.js"></script>

  <style>
    body { max-width: 992px; margin: auto; padding: 1rem; }
    pre[class*="language-"] { background:#f6f8fa };
  </style>
</head>
<body class="markdown-body">

${md.render(markdown)}
</body>
</html>`;

  Fs.writeFileSync(targetPath, html, { encoding: 'utf-8' });
  console.log('Updating:', targetPath);
};

mdToHtml();

if (process.argv[2] === 'watch') {
  Fs.watchFile(sourcePath, mdToHtml);
  console.log('watching:', sourcePath);
}
