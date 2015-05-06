'use strict';

module.exports = function(grunt) {
  grunt.config(
    'jscs', {
      src: '<%= config.arrays.js  %>',
      options: {
        config: '.jscsrc'
      }
    });
};