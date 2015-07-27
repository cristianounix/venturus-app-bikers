module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'js/**/*.js', 'test/**/*.js'],
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/app.js', 'js/widgets.js'],
        dest: 'js/all.js',
      },
    },
    uglify: {
      build: {
        src: 'js/all.js',
        dest: 'js/app.min.js'
      }
    },
    stylus: {
      compile: {
        options: {
          compress: true
        },
        files: {
          'css/app.min.css': ['stylus/init.styl']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-stylus');

  grunt.registerTask('default', ['concat','stylus', 'uglify']);

  grunt.registerTask('build', ['default']);
};
