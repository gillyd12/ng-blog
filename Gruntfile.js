/**
 * Created by bgill on 2/13/2015.
 */

module.exports = function (grunt) {

    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        replace: {
            development: {
                options: {
                    patterns: [{
                        json: grunt.file.readJSON('./src/config/environments/development.json')
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['./src/config/config.js'],
                    dest: './src/js/modules/'
                }]
            },
            production: {
                options: {
                    patterns: [{
                        json: grunt.file.readJSON('./src/config/environments/production.json')
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['./src/config/config.js'],
                    dest: './src/js/modules/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-replace');

    // configure development environment
    grunt.registerTask('development', [
        'replace:development'
    ]);

    grunt.registerTask('production', [
        'replace:production'
    ]);

};