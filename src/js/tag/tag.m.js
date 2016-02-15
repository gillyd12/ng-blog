/**
 * Created by bryangill on 2/14/16.
 */
import directive from './tag.d.js';
import TagController from './tag.c.js';
import tagService from './tag.s.js';

export default angular.module('ngBlog.tag', ['ngSanitize'])
    .directive('ngbTag', directive)
    .controller('TagController', TagController)
    .service('tagService', tagService)
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

