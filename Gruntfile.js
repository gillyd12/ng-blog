/**
 * Created by bgill on 2/13/2015.
 */

module.exports = function (grunt) {

    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        exec: {
            jspmInstall: {
                cmd: 'sudo jspm install'
            },
            jspmLoader: {
                cmd: 'sudo jspm dl-loader babel'
            },
            jspmBundle: {
                cmd: 'jspm bundle-sfx src/js/siwBlog.js dist/siwBlog.js -minify --skip-source-maps'
            },
            jspmLink: {
                cmd: 'sudo jspm link -y'
            }
        },
        watch: {
            files: ['*.less', 'src/**'],
            tasks: ['less', 'bundle']
        },
        less: {
            main: {
                options: {
                    compress: true,
                    cleancss: true
                },
                files: {
                    './src/css/main.css': './main.less'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    // configure development environment
    grunt.registerTask('update dependencies', [
        'exec:jspmInstall',
        'exec:jspmLoader'
    ]);
    grunt.registerTask('bundle', [
        'exec:jspmBundle'
    ]);
    grunt.registerTask('dev-watch', [
        'watch'
    ]);

};