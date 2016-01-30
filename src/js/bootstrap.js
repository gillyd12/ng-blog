/**
 * Created by Gillyd on 10/22/2015.
 */
import mainModule from './app';

angular.element(document).ready(function() {
    angular.bootstrap(document, [mainModule.name], { strictDi: true });
});