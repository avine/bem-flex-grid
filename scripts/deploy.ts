
/*
 * Prepare the `./deploy` directory for NPM publish.
 */
import { copySync, emptyDirSync, readFileSync, writeFileSync } from 'fs-extra';
import { join } from 'path';
import { createInterface } from 'readline';
import { spawn } from 'child_process';
import { Readable } from 'stream';

// ===== Dry mode config =====

let DRY_MODE = false;
if (process.argv[2] === '-d' || process.argv[2] === '--dry') {
  DRY_MODE = true;
}

// ===== Empty target directory =====

const targetDir = join(__dirname, '../', 'deploy');
emptyDirSync(targetDir);

// ===== Build `package.json` for target directory =====

const packageSource = JSON.parse(readFileSync(
  join(__dirname, '../', 'package.json'),
  { encoding: 'utf8' },
));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const packageTarget: Record<string, any> = {};
[
  'name',
  'version',
  'description',
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
  { encoding: 'utf8' },
);

// ===== Copy files and directories to target directory =====

[
  './LICENSE',
  './README.md',
  './dist',
  './src/lib',
].forEach(
  (file) => copySync(join(__dirname, '../', file), join(targetDir, file)),
);

// ===== Publish on NPM =====

console.log(`
Ready to publish on NPM${DRY_MODE ? ' (dry mode):' : ':'}
${targetDir}
`);

if (!DRY_MODE) {
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question('Confirm? (yes) ', (answer) => {
    console.log('');
    if (!answer || answer === 'yes') {
      const child = spawn('npm', ['publish', targetDir]);

      (child.stdout as Readable).on('data', (data) => process.stdout.write(data));
      (child.stderr as Readable).on('data', (data) => process.stdout.write(data));

      child.on('exit', (code) => {
        if (code === 0) {
          process.stdout.write('\n\t* Package published successfully *\n\n');
        }
      });
    } else {
      console.log('\n\t! Package NOT published !\n\n');
    }
    readline.close();
  });
}
