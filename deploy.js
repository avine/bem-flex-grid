/*
 * Prepare the `./deploy` directory for NPM publish.
 */

const Fs = require('fs-extra');
const Path = require('path');
const readline = require('readline');

// ===== Dry mode =====

let DRY_MODE = false;
if (process.argv[2] === '-d' || process.argv[2] === '--dry') {
  DRY_MODE = true;
}

if (DRY_MODE) {
  console.log('\n*** DRY_MODE activated. The package will NOT be published. ***');
}

// ===== Empty target directory =====

const targetDir = Path.join(__dirname, './deploy');
Fs.emptyDirSync(targetDir);

// ===== Build `package.json` for target directory =====

const packageSource = JSON.parse(Fs.readFileSync(
  Path.join(__dirname, './package.json'),
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
  prop => packageTarget[prop] = packageSource[prop],
);

Fs.writeFileSync(
  Path.join(targetDir, './package.json'),
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
  file => Fs.copySync(Path.join(__dirname, file), Path.join(targetDir, file)),
);

console.log(`
Target directory ready for deploy:
${targetDir}
`);

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Confirm? (yes) ', (answer) => {
  console.log('');
  if (!answer || answer === 'yes') {
    const spawn = require('child_process').spawn;
    const child = DRY_MODE
      ? spawn('echo', ['Ready to publish to NPM...'])
      : spawn('npm', ['publish', targetDir]);

    child.stdout.on('data', data => process.stdout.write(data));
    child.stderr.on('data', data => process.stdout.write(data));

    child.on('exit', (code) => {
      if (!DRY_MODE && code === 0) {
        process.stdout.write('\n\tPackage successfully published!\n\n');
      }
    });
  } else {
    console.log('\n\tPackage NOT published.\n\n');
  }
  rl.close();
});
