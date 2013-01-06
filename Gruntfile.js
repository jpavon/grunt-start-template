module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',

    // meta: {
    //   banner: '/*! <%= pkg.name %>, <%= pkg.description %> - v<%= pkg.version %> */'
    // },

   compass: {
     dev: {
       src: 'scss',
       dest: 'css',
       linecomments: true,
       forcecompile: true,
       require: [],
       debugsass: false,
       images: 'img',
       relativeassets: true
       // outputstyle: 'compressed'
     },

     prod: {
       src: 'scss',
       dest: 'css',
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
     files: ['js/*.js', 'scss/*', 'index.html'],
     tasks: ['compass:dev', 'uglify']
   },

   uglify: {
     mainjs: {
       files: {
         'js/min/main.min.js': ['js/plugins/*', 'js/main.js']
       }
     }
   },

   connect: {
     server: {
       options: {
         port: 8000,
         base: ''
       }
     }
   }

 });


 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks('grunt-contrib-connect');
 grunt.loadNpmTasks('grunt-contrib-uglify');
 grunt.loadNpmTasks('grunt-contrib-concat');
 grunt.loadNpmTasks('grunt-compass');

 // registerTasks
 grunt.registerTask('dev', ['connect', 'watch']);
 grunt.registerTask('prod', ['uglify', 'compass:prod']);


};
