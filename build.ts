import { writeFileSync } from 'fs';
import * as sass from 'node-sass';

const DIR = {
  DIST: 'dist',
  SRC: 'src/lib',
};

const PATHS = [
  'bem-flex-grid-attr',
  'bem-flex-grid-attr.ie11',
  'bem-flex-grid-class',
  'bem-flex-grid-class.ie11',
];

const build = (path: string, compressed = false) => {
  const suffix = compressed ? '.min' : '';

  const outFile = {
    css: `${DIR.DIST}/${path}${suffix}.css`,
    map: `${DIR.DIST}/${path}${suffix}.map`,
  };

  sass.render({
    file: `${DIR.SRC}/${path}.scss`,
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
      } catch (e) {
        console.error(e.message);
      }
    } else {
      console.error(error.message);
    }
    // tslint:enable:no-console
  });
};

PATHS.forEach((path) => {
  build(path);
  build(path, true);
});
