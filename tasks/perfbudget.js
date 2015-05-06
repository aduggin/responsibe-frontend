'use strict';

module.exports = function(grunt) {
  grunt.config(
    'perfbudget', {
      default: {
        options: {
          url: '<%= config.url  %>',
          key: process.env.WEBPAGETEST_API_KEY,
          budget: {
            render: '2000',
            bytesInDoc: '100000',
            requestsDoc: '50',
            SpeedIndex: '1500'
          }
        }
      }
    });
};