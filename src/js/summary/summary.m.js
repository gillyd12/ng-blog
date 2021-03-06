/**
 * Created by bryangill on 10/24/15.
 */
import directive from './summary.d.js';
import SummaryController from './summary.c.js';
import summaryService from './summary.s.js';

export default angular.module('siwBlog.summary', ['ngSanitize'])
    .directive('siwSummary', directive)
    .controller('SummaryController', SummaryController)
    .service('summaryService', summaryService);



