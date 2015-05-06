'use strict';

module.exports = function(grunt) {
  grunt.config(
    'concurrent', {
      'nodemon-watch': {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    });
};