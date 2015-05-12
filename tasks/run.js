'use strict';

module.exports = function(grunt) {
  grunt.config(
    'run', {
      curl: {
        cmd: './download_html.sh'
      },
      htmlinspector: {
        cmd: 'npm',
        args: ['run', 'htmlinspector']
      }
    });
};