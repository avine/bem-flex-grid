/**
 * Run this script using npm script: `npm run md-to-html` each time you change the file `README.md`.
 * To run this script in watch mode, use: `npm run md-to-html watch`.
 */

const Fs = require('fs');
const Path = require('path');
const MarkdownIt = require('markdown-it');

const md = new MarkdownIt();

const sourcePath = Path.join(__dirname, './README.md');
const targetPath = Path.join(__dirname, './src/api.html');

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

  <link rel="stylesheet" href="demos/demo.scss">
  <link rel="stylesheet" href="demos/www.scss">
  <link rel="stylesheet" href="lib/bem-flex-grid.ie11.scss">

  <style>
    body { max-width: 992px; margin: auto; padding: 1rem; }
    pre[class*="language-"] { background:#f6f8fa };
  </style>
</head>
<body class="markdown-body_DISABLED">

<div class="www-header">
  <div class="bfg bfg--row bfg--main-center bfg--cross-center bfg--box-overflow">
    <div class="bfg__box bfg__box--fixed www-header-title">
      Bem Flex Grid
    </div>

    <div class="bfg__box bfg__box--fixed">
      <div class="www-logo">
        <div class="www-logo__square www-logo__square--1"></div>
        <div class="www-logo__square www-logo__square--2"></div>
        <div class="www-logo__square www-logo__square--3"></div>
        <div class="www-logo__square www-logo__square--4"></div>
      </div>
    </div>
  </div>
</div>

${md.render(markdown)}
<p><br>View on <a href="https://github.com/avine/bem-flex-grid">Github</a>.</p>

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
