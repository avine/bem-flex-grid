/*
 * Prepare the `./deploy` directory for NPM publish.
 */
import { copySync, emptyDirSync, readFileSync, writeFileSync } from 'fs-extra';
import { join } from 'path';
import { createInterface } from 'readline';

// ===== Dry mode config =====

let DRY_MODE = false;
if (process.argv[2] === '-d' || process.argv[2] === '--dry') {
  DRY_MODE = true;
}

// ===== Empty target directory =====

const targetDir = join(__dirname, './deploy');
emptyDirSync(targetDir);

// ===== Build `package.json` for target directory =====

const packageSource = JSON.parse(readFileSync(
  join(__dirname, './package.json'),
  { encoding: 'utf-8' },
));

const packageTarget = {};
[
  'name',
  'version',
  'description',
  'main',
  'repository',
  'keywords',
  'author',
  'license',
  'bugs',
  'homepage',
].forEach(
  (prop) => packageTarget[prop] = packageSource[prop],
);

writeFileSync(
  join(targetDir, './package.json'),
  JSON.stringify(packageTarget, undefined, 2),
  { encoding: 'utf-8' },
);

// ===== Copy files and directories to target directory =====

[
  './LICENSE',
  './README.md',
  './dist',
  './src/lib',
].forEach(
  (file) => copySync(join(__dirname, file), join(targetDir, file)),
);

// ===== Publish on NPM =====

// tslint:disable-next-line:no-console
console.log(`
Ready to publish on NPM${DRY_MODE ? ' (dry mode):' : ':'}
${targetDir}
`);

if (!DRY_MODE) {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Confirm? (yes) ', (answer) => {
    console.log(''); // tslint:disable-line:no-console
    if (!answer || answer === 'yes') {
      const spawn = require('child_process').spawn;
      const child = spawn('npm', ['publish', targetDir]);

      child.stdout.on('data', (data) => process.stdout.write(data));
      child.stderr.on('data', (data) => process.stdout.write(data));

      child.on('exit', (code) => {
        if (code === 0) {
          process.stdout.write('\n\t* Package published successfully *\n\n');
        }
      });
    } else {
      console.log('\n\t! Package NOT published !\n\n'); // tslint:disable-line:no-console
    }
    rl.close();
  });
}
