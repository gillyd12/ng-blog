/**
 * Created by bryangill on 10/24/15.
 */
import directive from './summary.d.js';
import SummaryController from './summary.c.js';
import summaryService from './summary.s.js';

export default angular.module('app.summary', ['ngSanitize'])
    .directive('ngbSummary', directive)
    .controller('SummaryController', SummaryController)
    .service('summaryService', summaryService)
    .constant('configuration', {
        environment: 'development',
        api_port: '1337',
        api_url: 'http://localhost'
    });


