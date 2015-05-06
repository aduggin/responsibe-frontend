'use strict';

module.exports = function(grunt) {
  grunt.config(
    'nodemon', {
      dev: {
        script: '<%= config.expressFile  %>'
      }
    });
};