'use strict';

module.exports = function(grunt) {
  grunt.config(
    'express', {
      options: {
        port: 5000,
        background: true
      },
      dev: {
        options: {
          script: '<%= config.expressFile  %>'
        }
      }
    });
};