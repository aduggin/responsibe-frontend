'use strict';

module.exports = function(grunt) {
  grunt.config(
    'sass', {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          '<%= config.cssFile  %>': 'sass/main.scss'
        }
      }
    });
};