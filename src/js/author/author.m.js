/**
 * Created by bryangill on 2/8/16.
 */
/**
 * Created by bryangill on 10/24/15.
 */
import directive from './author.d.js';
import AuthorController from './author.c.js';
import authorService from './author.s.js';

export default angular.module('ngBlog.author', ['ngSanitize'])
    .directive('ngbAuthor', directive)
    .controller('AuthorController', AuthorController)
    .service('authorService', authorService)
    .constant('configuration', {
        environment: 'development',
        api_port: '1337',
        api_url: 'http://localhost'
    })
    .config(['$locationProvider', ($locationProvider) => {
        $locationProvider.html5Mode(true);
    }])
    .config(['$compileProvider', ($compileProvider) => {
        $compileProvider.debugInfoEnabled(false);
    }]);



