'use strict';

var ngrok = require('ngrok');

module.exports = function(grunt) {

  require('dotenv').load(); // load environmental variables in .env
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.task.loadTasks('tasks');

  grunt.registerTask('default', ['prepare', 'css', 'js', 'concurrent:nodemon-watch']);
  grunt.registerTask('test', ['prepare', 'css', 'js', 'validate-html', 'smoketests', 'accessibility', 'speed']);

  grunt.registerTask('prepare', ['clean']);
  grunt.registerTask('css', ['sass', 'autoprefixer', 'scsslint', 'csslint']);
  grunt.registerTask('js', ['jshint', 'jscs']);
  grunt.registerTask('smoketests', ['express', 'dalek']);

  grunt.registerTask('validate-html', ['express', 'run:curl', 'htmllint']);
  grunt.registerTask('accessibility', ['express', 'tenon-ngrok']);
  grunt.registerTask('speed', ['express', 'pagespeed-ngrok']);
  grunt.registerTask('budget', ['express', 'perfbudget-ngrok']);
  
  grunt.registerTask('tenon-ngrok', 'Run tenon with ngrok', function() {
    var done = this.async();

    ngrok.connect({
      port: 5000
    }, function(err, url) {
      if (err !== null) {
        grunt.fail.fatal(err);
        return done();
      }
      grunt.log.write('Exposing a local server: ' + url);
      grunt.config.set('tenon.options.httpBase', url);
      grunt.task.run('tenon:all');
      done();
    });
  });

  grunt.registerTask('pagespeed-ngrok', 'Run pagespeed with ngrok', function() {
    var done = this.async();

    ngrok.connect({
      port: 5000
    }, function(err, url) {
      if (err !== null) {
        grunt.fail.fatal(err);
        return done();
      }
      grunt.log.write('Exposing a local server: ' + url);
      grunt.config.set('pagespeed.options.url', url);
      grunt.task.run(['pagespeed:desktop', 'pagespeed:mobile']);
      done();
    });
  });

  grunt.registerTask('perfbudget-ngrok', 'Run perfbudget with ngrok', function() {
    var done = this.async();

    ngrok.connect({
      port: 5000
    }, function(err, url) {
      if (err !== null) {
        grunt.fail.fatal(err);
        return done();
      }
      grunt.log.write('Exposing a local server: ' + url);
      grunt.config.set('perfbudget.default.options.url', url);
      grunt.task.run('perfbudget');
      done();
    });
  });

};