module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',

    // meta: {
    //   banner: '/*! <%= pkg.name %>, <%= pkg.description %> - v<%= pkg.version %> */'
    // },

   compass: {
     dev: {
       src: 'src/scss',
       dest: 'dist/css',
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
       dest: 'dist/css',
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
     files: ['src/js/*.js', 'src/scss/*', 'src/index.html'],
     tasks: ['compass:dev', 'uglify']
   },

   uglify: {
     mainjs: {
       files: {
         'dist/js/min/main.min.js': ['src/js/plugins/*', 'src/js/main.js']
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
         // "dist/favicon.ico": "src/favicon.ico",
         // "dist/robots.txt": "src/robots.txt",
         // "dist/index.html": "src/index.html",
         "dist/": "src/*",
         "dist/js/vendor/": "src/js/vendor/*"
       }
     }
   }

 });


 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks('grunt-contrib-connect');
 grunt.loadNpmTasks('grunt-contrib-uglify');
 grunt.loadNpmTasks('grunt-contrib-concat');
 grunt.loadNpmTasks('grunt-contrib-copy');
 grunt.loadNpmTasks('grunt-usemin');
 grunt.loadNpmTasks('grunt-compass');

 // registerTasks
 grunt.registerTask('dev', ['connect', 'watch']);
 grunt.registerTask('prod', ['uglify', 'compass:prod', 'copy']);


};
