// configure nodemon
module.exports = function(grunt) {
  grunt.initConfig({
   nodemon: {
     dev: {
       script: 'bin/www'
     }
    },


  watch: {
   js: {
    files: ['public/js/**/*.js', 'routes/js/**/*.js'],
   }
  },


  concurrent: {
   options: {
    logConcurrentOutput: true
   },
   tasks: ['nodemon', 'watch']
 },

  mochaTest: {
    test: {
      options : {
        reporter: 'spec',
        captureFile: 'results.txt',
        quiet: false,
        clearRequireCache: false
      },
      src: ['tests/**/*.js']
    }
  }

  });

  // load nodemon
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-mocha-test');


  // register the nodemon task when we run grunt
  grunt.registerTask('watch-nodemon', ['concurrent']);
};
