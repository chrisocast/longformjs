/* global module:false */

var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

var folderMount = function folderMount(connect, point) {
  return connect.static(path.resolve(point));
};

module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner:
        '/*!\n' +
        ' * Longform.js <%= pkg.version %>\n' +
        ' * http://www.longformjs.com\n' +
        ' * MIT licensed\n' +
        ' * Copyright (C) 2013 Chris Cast, http://www.chriscast.com\n' +
        ' */'
    },

    // local server config
    connect: {
      livereload: {
        options: {
          port: 9001,
          hostname: undefined,
          middleware: function (connect, options) {
              return [lrSnippet, folderMount(connect, '.')];
          }
        }
      }
    },
    // files to watch & tasks to run when they're changed
    regarde: {
      markup: {
        files: 'index.html',
        tasks: ['livereload']
      },
      scss: {
        files: 'css/src/*.scss',
        tasks: ['compass:dev', 'cssmin', 'livereload']
      },
      js: {
        files: 'js/src/*.js',
        tasks: ['requirejs:dev', 'livereload']
      }
    },

    requirejs: {
      dev: {
        options: {
          out: './js/longform.js',
          mainConfigFile: './js/src/config.js',
          name: 'requireLib',
          paths: {
              requireLib: '../../components/requirejs/require'
          },
          optimize: 'none'
        }
      }
    },

    uglify: {
      options: {
        banner: '<%= meta.banner %>\n'
      },
      build: {
        src: 'js/longform.js',
        dest: 'js/longform.min.js'
      }
    },

    cssmin: {
      options: {
        banner: '<%= meta.banner %>\n'
      },
      compress: {
        files: {
          'css/longform.min.css': [ 'css/longform.css' ]
        }
      }
    },

    compass: {
      dev: {
        options: {
          sassDir: 'css/src',
          cssDir: 'css',
          debugInfo: true,
          require: ['singularitygs']
        }
      },
      prod: {
        options: {
          sassDir: 'css/src',
          cssDir: 'css',
          environment: 'production',
          require: ['singularitygs']
        }
      },
    },

    jshint: {
      options: {
        curly: false,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        eqnull: true,
        browser: true,
        expr: true,
        globals: {
          head: false,
          module: false,
          console: false,
          jQuery: true,
          require: true
        }
      },
      files: ['js/src/*.js' ]
    }

  });

  // Dependencies
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-livereload');
  grunt.loadNpmTasks('grunt-contrib-jshint' );
  grunt.loadNpmTasks('grunt-contrib-compass' );
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-uglify' );
  grunt.loadNpmTasks('grunt-contrib-cssmin' );
  //grunt.loadNpmTasks('grunt-mocha');
  //grunt.loadNpmTasks('grunt-casperjs');

  // Default task
  grunt.registerTask( 'default', ['requirejs', 'jshint', 'compass:dev', 'livereload-start', 'connect', 'regarde'] );
  grunt.registerTask( 'build', ['requirejs', 'jshint', 'uglify', 'compass:prod', 'cssmin'] );
};