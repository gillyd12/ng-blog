/**
 * Created by Gillyd on 10/22/2015.
 */

// Vendor related modules
import VendorModule from './modules/vendor';

// Application related modules
import ApplicationModule from './modules/application';


var mainModule = angular.module('mainApp', [
    VendorModule.name,
    ApplicationModule.name
]).config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode(true);
    }]);

// this turns off debugging in production
//app.config(['$compileProvider', function ($compileProvider) {
//  $compileProvider.debugInfoEnabled(false);
//}]);

export default mainModule;