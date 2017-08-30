// TODO: clean files before and after testsuite runs
// TODO: Failure cases

const saveImage = require('.');
const imageUrl = 'http://zzarcon.github.io/static/images/avatar.jpeg';

test('default', async () => {
  await saveImage(imageUrl);
});

test('custom name', async () => {
  await saveImage(imageUrl, 'hector.ico');
});

test('custom name and directory', async () => {
  await saveImage(imageUrl, './fixtures/hector');
});