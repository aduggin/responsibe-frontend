'use strict';

module.exports = function(grunt) {
  grunt.config(
    'autoprefixer', {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9'],
        map: true
      },
      default: {
        src: '<%= config.cssFile  %>'
      }
    });
};