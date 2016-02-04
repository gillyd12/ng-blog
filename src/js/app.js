/**
 * Created by Gillyd on 10/22/2015.
 */
import summary from './summary/summary.m';

export default angular.module('ngBlog', ['app.summary'])
    .config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode(true);
    }]);
// this turns off debugging in production
//app.config(['$compileProvider', function ($compileProvider) {
//  $compileProvider.debugInfoEnabled(false);
//}]);
