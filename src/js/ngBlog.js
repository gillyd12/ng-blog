/**
 * Created by Gillyd on 10/22/2015.
 */
import summary from './summary/summary.m';
import author from './author/author.m';
import tag from './tag/tag.m';

export default angular.module('ngBlog', [
    'ngBlog.summary',
    'ngBlog.author',
    'ngBlog.tag'
]).constant('configuration', {
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
