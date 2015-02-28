'use strict';
var Promise = require('bluebird');
var request = require('request');

module.exports.reqmise = function reqmise(options) {
  return new Promise(function (resolve, reject) {
    request(options, function (error, response, body) {
      if (error) {
        reject(error);
				return;
      } 
			
			if(response.statusCode === 200){
				resolve(body);
				return;
			}
    });
  });
}