'use strict';

module.exports = function(grunt) {
  grunt.config(
    'pagespeed', {
      options: {
        nokey: true,
        url: '<%= config.url  %>',
        paths: '<%= config.arrays.paths  %>',
        locale: 'en_GB'
      },
      desktop: {
        options: {
          strategy: 'desktop',
          threshold: 85
        }
      },
      mobile: {
        options: {
          strategy: 'mobile',
          threshold: 85
        }
      }
    });
};