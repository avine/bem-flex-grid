import { writeFileSync } from 'fs';
import * as sass from 'node-sass';

const targetDir = {
  dist: 'dist',
  src: 'src/lib',
};

const filenames = [
  'bem-flex-grid-attr',
  'bem-flex-grid-attr.ie11',
  'bem-flex-grid-class',
  'bem-flex-grid-class.ie11',
];

const build = (filename: string, compressed = false) => {
  const suffix = compressed ? '.min' : '';

  const outFile = {
    css: `${targetDir.dist}/${filename}${suffix}.css`,
    map: `${targetDir.dist}/${filename}${suffix}.map`,
  };

  sass.render({
    file: `${targetDir.src}/${filename}.scss`,
    outFile: outFile.css,
    outputStyle: compressed ? 'compressed' : 'nested',
    sourceMap: true,
  },

  (error, result) => {
    // tslint:disable:no-console
    if (!error) {
      try {
        writeFileSync(outFile.css, result.css, { encoding: 'utf8' });
        writeFileSync(outFile.map, result.map, { encoding: 'utf8' });
        console.log(outFile.css);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      console.error(error.message);
    }
    // tslint:enable:no-console
  });
};

console.log('Build (css and source map):'); // tslint:disable-line:no-console

filenames.forEach((filename) => {
  build(filename);
  build(filename, true);
});
