/**
 * Created by bryangill on 10/24/15.
 */
import directive from './app.summary.directive';
import controller from './app.summary.controller';
import service from './app.summary.service';

export default angular.module('ngBlog.module.summary', [])
    .directive('ngbSummary', directive)
    .controller('summaryController', controller)
    .service('SummaryService', service);


