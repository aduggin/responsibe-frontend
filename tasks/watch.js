'use strict';

module.exports = function(grunt) {
  grunt.config(
    'watch', {
      css: {
        files: 'sass/**/*',
        tasks: ['css'],
        options: {
          livereload: true
        }
      }
    });
};