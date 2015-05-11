'use strict';

module.exports = function(grunt) {
  grunt.config(
    'jshint', {
      options: {
        jshintrc: true
      },
      dist: {
        src: '<%= config.arrays.js  %>'
      }
    });
};