'use strict';

module.exports = function(grunt) {

  var httpBase = grunt.option('httpBase') || '<%= config.url  %>';
  var url = grunt.option('url') || '<%= config.url  %>' + '/components';

  grunt.config(
    'tenon', {
      options: {
        apiKey: process.env.TENON_API_KEY,
        timeout: 240000,
        httpBase: httpBase,
        apiOptions: {
          projectID: 'responsible_frontend',
          level: 'AA'
        },
        force: true
      },
      all: {
        options: {
          contentPaths: '<%= config.arrays.paths  %>'
        }
      },
      single: {
        urls: [
          url
        ]
      }
    });
};