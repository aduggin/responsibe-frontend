'use strict';

module.exports = function(grunt) {
  grunt.config(
    'scsslint', {
      allFiles: ['<%= config.allSass  %>'],
      options: {
        config: '.scss-lint.yml',
        colorizeOutput: true
      }
    });
};