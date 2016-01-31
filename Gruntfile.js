/**
 * Created by bgill on 2/13/2015.
 */

module.exports = function (grunt) {

    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // replace isn't needed at this time
        //replace: {
        //    development: {
        //        options: {
        //            patterns: [{
        //                json: grunt.file.readJSON('./src/config/environments/development.json')
        //            }]
        //        },
        //        files: [{
        //            expand: true,
        //            flatten: true,
        //            src: ['./src/config/config.js'],
        //            dest: './src/js/modules/'
        //        }]
        //    },
        //    production: {
        //        options: {
        //            patterns: [{
        //                json: grunt.file.readJSON('./src/config/environments/production.json')
        //            }]
        //        },
        //        files: [{
        //            expand: true,
        //            flatten: true,
        //            src: ['./src/config/config.js'],
        //            dest: './src/js/modules/'
        //        }]
        //    }
        //}
        exec: {
            jspmInstall: {
                cmd: 'sudo jspm install'
            },
            jspmLoader: {
                cmd: 'sudo jspm dl-loader babel'
            },
            jspmBundle: {
                cmd: 'jspm bundle-sfx src/js/app.js dist/ngBlog.js -minify --skip-source-maps'
            }
        },
        watch: {
            files: ['*.less', 'src/**'],
            tasks: ['less']
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

    //grunt.loadNpmTasks('grunt-replace');
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