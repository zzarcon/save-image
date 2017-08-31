// @flow
const {URL} = require('url');
const http = require('http');
const https = require('https');
const {join, basename} = require('path');
const {writeFile} = require('fs');

const save = async (imageUrl /*: string */, destinationPath /*: string */) => {
  const url = new URL(imageUrl);
  const get = url.protocol === 'https:' ? https.get : http.get;

  return new Promise((resolve, reject) => {
    get(url.href, res => {
      let rawData = '';

      res.setEncoding('binary');
      res.on('error', reject);
      res.on('data', chunk => rawData += chunk);
      res.on('end', () => {
        const fileName = destinationPath || basename(url.href);
        const destination = join(__dirname, fileName);
        writeFile(destination, rawData, 'binary', (err) => {
          if (err) return reject(err);

          resolve(rawData);
        });
      });
    });
  });
};

module.exports = save;