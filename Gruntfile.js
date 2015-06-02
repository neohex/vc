/**
 * General Grunt setup
 */
'use strict';

var xtend = require('xtend');
var loadGruntConfig = require('./grunt/load-grunt-config');

/*
 * Call Grunt configuration
 */
module.exports = function (grunt) {

  // Measure time of grunt tasks
  require('time-grunt')(grunt);

  /**
   * Configuration: All data from package.json, grunt/options and
   * grunt/plugins
   */
  var config = xtend({
      pkg: require('./package')
    },
    loadGruntConfig('grunt/options'),
    loadGruntConfig('grunt/plugins')
  );

  // Load project configuration
  grunt.initConfig(config);

  // Load all npm tasks through jit-grunt (all tasks from node_modules)
  require('jit-grunt')(grunt);

  // Load your own tasks
  grunt.task.loadTasks('./grunt/tasks');

  /**
   * A task for development
   */
  grunt.registerTask('dev', [
    'jshint',
    'pleeease:dev',
    'imagemin',
    'copy',
    'concat:js'
  ]);

  // Default task
  grunt.registerTask('default', ['dev']);

  /**
   * A task for building your pages
   */
  grunt.registerTask('build', [
    'jshint',
    'pleeease:build',
    'imagemin',
    'copy',
    'concat:jsmin',
    'htmlmin'
  ]);

  /**
   * Travis CI task
   */
  grunt.registerTask('travis', [
    'jshint'
  ]);

};
