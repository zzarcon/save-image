// TODO: Failure cases

const saveImage = require('.');
const {statSync} = require('fs');
const del = require('node-delete');
const imageUrl = 'http://zzarcon.github.io/static/images/avatar.jpeg';

const cleanUp = () => {
  del.sync('./hector.ico');
  del.sync('./fixtures/*');
};

const existFile = path => statSync(path).isFile();

beforeAll(cleanUp);
afterAll(cleanUp);

test('default', async () => {
  await saveImage(imageUrl);

  expect(existFile('avatar.jpeg')).toBeTruthy();
});

test('custom name', async () => {
  const fileName = 'hector.ico';
  await saveImage(imageUrl, fileName);

  expect(existFile(fileName)).toBeTruthy();
});

test('custom name and directory', async () => {
  const path = './fixtures/hector';
  await saveImage(imageUrl, path);

  expect(existFile(path)).toBeTruthy();
});