module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            styles: {
                options: {
                    yuicompress: true
                },
                files: {
                    'client/app/css/main.css': 'client/app/less/main.less'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            styles: {
                files: 'src/less/*.less',
                tasks: ['less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-protractor-webdriver');
};