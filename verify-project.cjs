const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const readJson = (name) => JSON.parse(fs.readFileSync(path.join(root, name), 'utf8'));
const pkg = readJson('package.json');
const app = readJson('app.json').expo;
for (const file of ['App.js', 'app.json', 'package.json', 'babel.config.js']) {
  assert.ok(fs.existsSync(path.join(root, file)), `Missing root file: ${file}`);
}
for (const file of ['branding.png', 'app-icon.png', 'splash-logo.png']) {
  const full = path.join(root, 'assets', file);
  assert.ok(fs.existsSync(full), `Missing required asset: assets/${file}`);
  const b = fs.readFileSync(full);
  assert.ok(b.length > 1000, `Asset is unexpectedly small: assets/${file}`);
  assert.equal(b.subarray(0, 8).toString('hex'), '89504e470d0a1a0a', `Not a valid PNG: assets/${file}`);
}
for (const rel of [app.icon, app.splash.image, app.android.adaptiveIcon.foregroundImage]) {
  assert.ok(fs.existsSync(path.join(root, rel)), `app.json references missing image: ${rel}`);
}
assert.equal(app.android.package, 'com.asmaron.supreme', 'Unexpected Android application ID');
assert.ok(pkg.dependencies.expo && pkg.dependencies.react && pkg.dependencies['react-native'], 'Core Expo dependencies missing');
assert.ok(fs.existsSync(path.join(root, '.github/workflows/build-apk.yml')), 'GitHub Actions workflow missing');
console.log(`Asmaron ${pkg.version}: project structure, Expo paths, Android ID and PNG assets verified.`);
