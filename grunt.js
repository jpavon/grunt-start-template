module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',

    // meta: {
    //   banner: '/*! <%= pkg.name %>, <%= pkg.description %> - v<%= pkg.version %> */'
    // },

    min: {
      dist: {
        src: ['js/main.js'],
        dest: 'js/min/main.min.js'
      }
    },

    compass: {
      dev: {
        src: 'scss',
        dest: 'css',
        linecomments: true,
        forcecompile: true,
        require: [],
        debugsass: false,
        images: '/img/',
        relativeassets: true
        // outputstyle: 'compressed'
      },

      prod: {
        src: 'scss',
        dest: 'css',
        linecomments: true,
        forcecompile: true,
        require: [],
        debugsass: false,
        images: '/img/',
        relativeassets: true,
        outputstyle: 'compressed'
      }
    },

    watch: {
      files: ["js/*.js", "scss/*"],
      tasks: "min compass:dev"
    },

    uglify: {
      mangle: {toplevel: true},
      squeeze: {dead_code: false},
      codegen: {quote_keys: true}
    },

    server: {
      port: 8000,
      base: ''
    }

  });


  grunt.loadNpmTasks( 'grunt-compass' );

  grunt.registerTask('dev', 'server watch');

  grunt.registerTask('prod', 'min compass:prod');
};