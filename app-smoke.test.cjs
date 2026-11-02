const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const app = fs.readFileSync(path.join(root, 'App.js'), 'utf8');

test('starter app exposes all four navigation destinations', () => {
  for (const tab of ['Learn', 'Practice', 'Explore', 'Profile']) assert.ok(app.includes(`'${tab}'`));
});

test('lesson completion prevents repeat gem awards', () => {
  assert.match(app, /if\(!alreadyCompleted\)\{setCompleted/);
  assert.match(app, /alreadyCompleted\?'Correct! Lesson already completed\.'/);
});

test('progress is based on completed lessons and can start at zero', () => {
  assert.match(app, /completed\.length\/lessons\.length/);
  assert.doesNotMatch(app, /Math\.max\(12,completed\.length/);
});

test('all image requires resolve to existing assets', () => {
  for (const name of ['branding.png']) assert.ok(fs.existsSync(path.join(root, 'assets', name)));
});
