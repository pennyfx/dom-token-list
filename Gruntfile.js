module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    connect: {
      demo: {
        options:{
          port: 3001,
          base: '',
          keepalive: true
        }
      }
    },
    jshint:{
      options:{
        jshintrc: true
      },
      all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
    },
    bumpup: ['bower.json', 'package.json', 'xtag.json'],
    tagrelease: {
      file: 'package.json',
      prefix: '',
      commit: true
    },
    exec: {
      'update_master':{
        cmd: 'git push origin master --tags'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-tagrelease');
  grunt.loadNpmTasks('grunt-bumpup');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('build', ['jshint','smush-components']);
  grunt.registerTask('bump:patch', ['bumpup:patch', 'tagrelease']);

  grunt.registerTask('push', ['exec:update_master']);
  grunt.registerTask('bump-push', ['bump:patch','push']);

};
