/**
 * Created by bryangill on 10/24/15.
 */
import template from './summary.html!text';
import SummaryController from './summary.c.js';

function summary() {
    return {
        restrict: "E",
        template: template,
        scope: {
            api_url: '=url',
            api_port: '=port'
        },
        controllerAs: "summaryCtrl",
        controller: SummaryController
    };
}

export default summary;