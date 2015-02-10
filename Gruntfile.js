module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            styles: {
                options: {
                    yuicompress: true
                },
                files: {
                    'client/css/main.css': 'client/less/main.less'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            styles: {
                files: 'client/less/*.less',
                tasks: ['less']
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            },
            //continuous integration mode: run tests once in PhantomJS browser.
            continuous: {
                configFile: 'karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS']
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