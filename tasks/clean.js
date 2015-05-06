'use strict';

module.exports = function(grunt) {
  grunt.config(
    'clean', {
      tmp: {
        src: ['temp', '.sass-cache', 'public/stylesheets']
      }
    });
};