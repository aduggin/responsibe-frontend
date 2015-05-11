'use strict';

module.exports = function(grunt) {
  grunt.config(
    'htmllint', {
      all: ['<%= config.allHtml  %>']
    });
};