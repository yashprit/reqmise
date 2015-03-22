'use strict';

var Promise = require('bluebird'),
  request = require('request');


function reqmise(url, options) {
  if (typeof url !== 'string') {
    throw new Error("url must be string");
  }

  if (typeof options !== 'object') {
    throw new Error('options must be object')
  }

  return new Promise(function(resolve, reject) {
    request(options, function(error, response, body) {
      if (error) {
        reject(error);
        return;
      }

      if (response.statusCode === 200) {
        resolve([response, body]);
        return;
      }
    });
  });
}

module.exports = reqmise
