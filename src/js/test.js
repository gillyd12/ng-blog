/**
 * Created by Gillyd on 10/22/2015.
 */
import mainModule from './ngBlog';

angular.element(document).ready(function() {
    angular.bootstrap(document, [mainModule.name], { strictDi: true });
});