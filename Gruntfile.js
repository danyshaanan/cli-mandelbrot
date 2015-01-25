'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    eslint: {
      target: ['lib/**/*.js', 'bin/**/*.js']
    },
    bump: {
      options: {
        files: ['package.json', 'npm-shrinkwrap.json'],
        commitFiles: ['package.json', 'npm-shrinkwrap.json'],
        tagName: '%VERSION%',
        push: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-eslint')
  grunt.loadNpmTasks('grunt-bump')

  grunt.registerTask('default', ['eslint'])
};
