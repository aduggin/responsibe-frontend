'use strict';

module.exports = function(grunt) {
  grunt.config.merge({
    config: {
      arrays: {
        paths: ['/', '/base', 'form'], // '<%= config.arrays.paths  %>'
        js: ['Gruntfile.js', 'tasks/*.js'] // '<%= config.arrays.js  %>'
      },
      allHtml: 'temp/html/*.html', // '<%= config.allHtml  %>'
      allSass: 'sass/**/*.scss', // '<%= config.allSass  %>'
      cssFile: 'public/stylesheets/style.css', // '<%= config.cssFile  %>'
      expressFile: 'index.js', // '<%= config.expressFile  %>'
      url: 'http://responsible-frontend.herokuapp.com/' // '<%= config.url  %>'
    }
  });
};