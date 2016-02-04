/**
 * Created by Gillyd on 10/22/2015.
 */

// Application related modules
import ApplicationModule from './modules/application';


var mainModule = angular.module('ngBlog', [
    ApplicationModule.name
]).config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode(true);
    }]);
// this turns off debugging in production
//app.config(['$compileProvider', function ($compileProvider) {
//  $compileProvider.debugInfoEnabled(false);
//}]);

export default mainModule;