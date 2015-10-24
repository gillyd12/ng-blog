/**
 * Created by bryangill on 10/24/15.
 */
import template from './summary.html!text';

function summaryDirective() {
    return {
        restrict: "E",
        scope: true,
        template: template
        //bindToController: true,
        //controllerAs: "ctrl",
        //controller: HeaderController
    };
}

summaryDirective.$inject = [];

export default summaryDirective;
