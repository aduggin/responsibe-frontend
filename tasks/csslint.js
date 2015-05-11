'use strict';

module.exports = function(grunt) {
  grunt.config(
    'csslint', {
      options: {
        csslintrc: '.csslintrc'
      },
      strict: {
        src: ['public/stylesheets/**/*.css']
      }
    });
};