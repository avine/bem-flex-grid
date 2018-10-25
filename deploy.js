/**
 * Prepare the `./deploy` directory for NPM publish.
 */

const Fs = require('fs-extra');
const Path = require('path');
const readline = require('readline');

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
    const child = spawn('echo', ['READY TO PUBLISH']); // spawn('npm', ['publish', targetDir])

    child.stdout.on('data', data => process.stdout.write(data));
    child.stderr.on('data', data => process.stdout.write(data));

    child.on('exit', () => process.stdout.write('\n\tPackage successfully published!\n\n'));
  } else {
    console.log('\n\tPackage NOT published.\n\n');
  }
  rl.close();
});
