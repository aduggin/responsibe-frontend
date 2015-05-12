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
      },
      'backstop-reference': {
        cmd: 'npm',
        args: ['run', 'backstop', 'reference']
      },
      'backstop-test': {
        cmd: 'npm',
        args: ['run', 'backstop', 'test']
      },
      'backstop-clean': {
        cmd: 'rm',
        args: ['-r', './node_modules/backstopjs/bitmaps_reference/']
      },
    });
};