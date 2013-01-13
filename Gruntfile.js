module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),

    compass: {
      dev: {
        src: 'src/scss',
        dest: 'src/css',
        linecomments: true,
        forcecompile: true,
        require: [],
        debugsass: false,
        images: 'img',
        relativeassets: true
        // outputstyle: 'compressed'
      },
      prod: {
        src: 'src/scss',
        dest: 'src/css',
        linecomments: false,
        forcecompile: true,
        require: [],
        debugsass: false,
        images: 'img',
        relativeassets: true,
        outputstyle: 'compressed'
      }
    },

    watch: {
      scripts: {
        files: [
          'src/js/*.js',
          'src/js/plugins/*.js'
        ],
        tasks: ['uglify']
      },
      compass: {
        files: [
          'src/scss/*'
        ],
        tasks: ['compass:dev']
      }
    },

    uglify: {
      mainjs: {
        files: {
          'src/js/min/main.min.js':
          [
            'src/js/plugins/*',
            'src/js/main.js'
          ]
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: 'src/'
        }
      }
    },

    copy: {
      dist: {
        files: {
          "dist/": "src/*",
          // "dist/img/": "src/img/**/*",
          "dist/css/": "src/css/*",
          "dist/js/min/": "src/js/min/*",
          "dist/js/vendor/": "src/js/vendor/*",
          "dist/.htaccess": "src/.htaccess"
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-compass');

  // registerTasks
  grunt.registerTask('dev', ['connect', 'watch']);
  grunt.registerTask('prod', ['uglify', 'compass:prod', 'copy']);

};
