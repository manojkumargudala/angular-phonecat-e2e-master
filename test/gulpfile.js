'use strict';

var gulp = require('gulp');
var wrench = require('wrench');

wrench.readdirSyncRecursive('./gulp').filter( async function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(async function(file) {
  require('./gulp/' + file);
});
